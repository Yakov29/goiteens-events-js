import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMan } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";




import PropTypes from 'prop-types';

import { EventStyle } from "./EventStyle.js";
import { events } from "../../data/upcoming-events.js";

export const Event = () => {
  console.log(events.name);
  return (
    <EventStyle>
        {events.map((event) => {
            const {id,  name, location, speaker, time } = event;
          return (
            <li key={id}>
              <h2>{name}</h2>
                <p><IoLocationSharp /> {location}</p>
                <p><IoIosMan /> {speaker}</p>
                <p><FaCalendar /> {time.start}</p>
                <p><IoIosTime /> {time.end}</p>
            </li>
          );
        })}
    </EventStyle>
  );
};


Event.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  speaker: PropTypes.string,
  time: PropTypes.object
}
