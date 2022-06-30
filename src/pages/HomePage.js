import React from 'react'
import AddConfession from '../components/AddConfession'
import ConfessionLists from '../components/ConfessionLists'
import useTitle from '../hooks/useTitle'

const HomePage = () => {
    useTitle("home")
  return (
    <div>
        <AddConfession />
        <ConfessionLists />
    </div>
  )
}

export default HomePage