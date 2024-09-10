
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import db from "./db"

const EventList =() => {
  const [events, setEvents] =useState([]);

  useEffect(()=>{
    fetch('./events')
    .then(response => response.json())
    .then(data => setEvents(data))
    .catch(error => console.error("Error Fetching events:", error));
  },[]);

  return(
    <div>
      <h1> Available Events</h1>
      <ul>
        {events.map(event=>(
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>
             <h2>{event.name}</h2>
              <p>{event.date}</p>
              <p>{event.location}</p>
              </Link>
            </li>
        ))}
      </ul>
    </div>
  );
};
export default EventList;