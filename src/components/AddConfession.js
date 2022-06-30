import React, {useState} from 'react'
import '../assests/css/AddConfession.css'
import {FaLock} from 'react-icons/fa'
import { database as db, set, ref, onValue  } from '../config/firebase'
import { v4 as uuidv4 } from 'uuid';
import {ToastContainer, toast} from "react-toast";

const AddConfession = () => {

    const [text, setText] = useState("");

    const addConfession = () =>{
        if(text){
            set(ref(db, 'confession/' + uuidv4()), {
                note:text,
                createdAt: Date.now(),
              }).then(err=>{
                if(!err){
                    toast.success("Confesseion Added")
                    setText("")

                    //check data
                    onValue(ref(db, 'confession'), (snapshot) => {
                        let _data = snapshot.val();
                        for(let key in _data){
                            let createdAt = new Date(_data[key].createdAt);
                            createdAt.setDate(createdAt.getDate() + 1) 
                            if (new Date() >= createdAt){
                                console.log("delete");
                                set(ref(db, 'confession/'+key), null);
                            }
                        }
                    })
                }else{
                    toast.error("Couldnot add confession note.");
                }
                
              });
        }

    }

  return (
    <center>
        <div className='addConfession'>
            <textarea rows="8" cols="70" placeholder='write your confession here....' value={text} onChange={(e) => setText(e.target.value)}>

            </textarea>
            <button onClick={addConfession}>Confess</button>

        </div>
        <FaLock size="12"/>
        <small style={{marginLeft:"5px"}}>Confess Note will remain for 24 hours.</small>
        <ToastContainer delay={2500} />
    </center>
  )
}

export default AddConfession