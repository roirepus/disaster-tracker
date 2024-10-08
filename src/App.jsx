import { useState, useEffect } from "react";
import Map from "./components/Map";

function App() {
  const [eventData, setEventData]=useState([])
  const [loading, setLoading]=useState(false)

  useEffect(()=>{
    const fetchEvents= async()=>{
      setLoading(true)
      const res= await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      const {events}=await res.json()
      setEventData(events)
      setLoading(false)
    }
    fetchEvents()
    console.log(eventData)
  },[])
  return (
    <>
      {!loading ? <Map eventData={eventData}/>: <h1>loading</h1>}

    </>

  );
}

export default App;
