import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar.jsx'
import DisplayEvents from './components/DisplayEvents.jsx'
import Title from './components/Title.jsx'

export default function App() {
  const [eventsDisplayed, setEventsDisplayed] = useState([]);


  useEffect(() => {
    getData()
  }, []);

const getData = () => {
  axios.get('/events')
  .then ( (res) => {
    console.table(res.data[1])

  })
}

const searchData = (searchWord) => {
  axios.get(`/events?q=${searchWord}&_limit=5`)
  .then ( (res) => {
    console.table(res.data)
    setEventsDisplayed(res.data)
  })
}



  return (
    <div className="main">
        <Title />
      <SearchBar searchData={searchData}/>
      <DisplayEvents eventsDisplayed={eventsDisplayed}/>
    </div>
  )
}


