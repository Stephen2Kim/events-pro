import React, {useEffect, useState} from "react";
import EventList from "./EventList"
import { useParams, link} from "react-router-dom";

const EventDetail=()=>{
  let {id} = useParams();
  let [event,setEvent] = useState(null)
  useEffect(()=>{
    fetch (`./events${id}`)
    .then(response => response.json)
    .then(data =>setEvent(data))
    .catch(error => console.error('Error fetchingevent details:',error))
  }, [id]);
  if (!event){
    return <p>loading...</p>
  }
  return(
    <div>
        <h1>{event.name}</h1>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Details:</strong> {event.details}</p>
      <link to="/events">Back to Events List</link>
    </div>
  );
}
export default EventDetail;