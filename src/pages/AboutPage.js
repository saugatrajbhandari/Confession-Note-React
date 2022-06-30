import React from 'react'
import useTitle from '../hooks/useTitle'

const AboutPage = () => {
    useTitle("about")
  return (
    <center>
    <div style={{marginTop:"20px"}}>
        React Confession Web App
    </div>
    </center>
  )
}

export default AboutPage