import React from 'react';

export default function DisplayEvents({eventsDisplayed}) {

  return (
    <div>
      Top Five
      {eventsDisplayed.map( (event) => (
        <div className="events">
          <div>
            Date:
            {event.date}
          </div>
          <div>
          Description:
            {event.description}
          </div>
          <div>
          </div>
          <div>
          </div>
        </div>

      ))}
    </div>
  )
}