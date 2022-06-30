import React, {useEffect, useState} from 'react'
import '../assests/css/ConfessionLists.css'
import { database} from '../config/firebase'
import { set, ref, onValue } from "firebase/database";
import Moment from 'react-moment';
import { ShimmerSimpleGallery } from 'react-shimmer-effects';

const ConfessionLists = () => {
    const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const [confessionList, setConfessionList] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true)
        onValue(ref(database, "confession/"), (snapshot) =>{
            let _data = snapshot.val()
            const _confessionList = [];
            for(let key in _data){
                _confessionList.push(_data[key])
            }
            setConfessionList(_confessionList);
        setIsLoading(false);

        })

    }, [])

  return (
    <center>
    <div className='confessionLists'>
        {isLoading ? "Loading.... ":confessionList?
            (confessionList.map((confession)=> {
            let _date =  new Date(confession.createdAt);  

            return(<div className="confession-card" key={confession.createdAt}>
            <div className="date">{`${_date.getFullYear()}-${monthList[_date.getMonth()]}, ${_date.getDay()}`}</div><br /><br />
            {confession.note}
            <div className='time'>
                <Moment fromNow>{confession.createdAt}</Moment>
            </div>
             </div>)
            })):<h1>No Confession</h1>
        }
    </div>
    </center>
  )
}

export default ConfessionLists