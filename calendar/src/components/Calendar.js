import React from 'react';
import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import moment from 'moment-timezone';
import Select from 'react-select';

const Calendar = () => {
    const [events, setEvents] = useState([]);
    const isSmallScreen = window.innerWidth <= 800;

    const [showAllEvents, setShowAllEvents] = useState(false);
    const [activeOption, setActiveOption] = useState('America/Chicago');
    useEffect(() => {
        fetch("http://localhost:8081/events")
            .then((response) => response.json())
            .then((data) => {
                setEvents(data);
                console.log("Load Events: ", data);
            });
    }, []);

    const timeZones = moment.tz.names().map(zone => ({
        value: zone,
        label: zone.replace(/_/g, ' ')
    })); // Get a list of all time zones and format them for react-select

    const convertToTimeZone = (date, time, timeZone) => {
        const [month, day, year] = date.split('/').map(Number);
        const [timeString, period] = time.split(' ');
        const [hours, minutes] = timeString.split(':').map(Number);

        // Create a Moment object using the parsed date and time
        let eventDate = moment.tz({
            year: 2000 + year,
            month: month - 1,
            day: day,
            hour: hours % 12 + (period === 'PM' ? 12 : 0),
            minute: minutes
        }, 'America/Chicago'); // Assuming input is in CST

        // Convert to the target time zone
        eventDate = eventDate.tz(timeZone);

        // Get the new date and time in the target time zone
        const newDate = eventDate.format('M/D/YY');
        const newTime = eventDate.format('h:mm A');

        return { newDate, newTime };
    };

    const handleOptionChange = (selectedOption) => {
        setActiveOption(selectedOption.value);
    };

    const makeMenu = () => {
        return (
            <div>
                <button className={`btn ${showAllEvents ? 'btn-outline-secondary' : 'btn-primary'}`} style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowAllEvents(false)}>Upcoming Events</button>
                <button className={`btn ${showAllEvents ? 'btn-primary' : 'btn-outline-secondary'}`} style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowAllEvents(true)}>All Events</button>
            </div>
        );
    };

    const makeTimeZoneMenu = () => {
        if (isSmallScreen) {
            return (
                <div style={{ width: 'auto', margin: 'auto', textAlign: 'left' }}>
                    <Select
                        options={timeZones}
                        onChange={handleOptionChange}
                        value={timeZones.find(zone => zone.value === activeOption)}
                        isSearchable
                    />
                </div>
            );
        } else {
            return (
                <div style={{ width: '25%', margin: 'auto', textAlign: 'left' }}>
                    <Select
                        options={timeZones}
                        onChange={handleOptionChange}
                        value={timeZones.find(zone => zone.value === activeOption)}
                        isSearchable
                    />
                </div>
            );
        }
    };

    const singleEvent = (event) => {
        const classNames = {
            'TS': 'ts',
            'WoO': 'woo',
            'LOLMS': 'lolms',
            'Football': 'football',
            'F1': 'f1',
            'Indycar': 'indy',
            'XR': 'xr',
            'Other': 'other'
        };

        return (<button className={`unclickable-button ${classNames[event.category] || classNames['Other']}`}>{event.category}: {event.title}</button>);
    };

    const renderEvent = (event) => {
        const currentDate = new Date();
        const [month, day, year] = event.date.split('/').map(Number);
        const eventDate = new Date(2000 + year, month - 1, day);

        const { newDate, newTime } = event.time ? convertToTimeZone(event.date, event.time, activeOption) : { newDate: event.date, newTime: '' };

        if (showAllEvents || eventDate >= currentDate) {
            if (event.category === 'F1' || event.category === 'WoO' || event.category === "LOLMS" || event.category === "Indycar") {
                return (
                    <div>
                        <div>
                            <div className="row justify-content-center">
                                <div className="col text-center">
                                    {singleEvent(event)}
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='col text-center'>
                                    <p className="title" style={{ marginTop: '20px'}}>{newDate} {newTime && <em className="date">@ {newTime}</em>}</p>
                                    <p><strong>{event.track}</strong> in {event.city}</p>

                                </div>
                            </div>
                        </div>
                        <hr className="featurette-divider" />
                    </div>
                );
            } else {
                return (
                    <div>
                        <div>
                            <div className="row justify-content-center">
                                <div className="col text-center">
                                    {singleEvent(event)}
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='col text-center'>
                                    <p className="title">{newDate} {newTime && <em className="date">@ {newTime}</em>}</p>
                                </div>
                            </div>
                        </div>
                        <hr className="featurette-divider" />
                    </div>
                );
            }
        }


    };

    const allEvents = events.map((el) => (
        <div >
            {renderEvent(el)}
        </div>
    ));

    return (
        <div>
            <div className="container">
                <h1 className="page-title">Events</h1>
                <hr className="featurette-divider" />
                <div style={{ textAlign: "center" }}>
                    {makeMenu()}
                </div>
                <div style={{ textAlign: "right" }}>
                    {makeTimeZoneMenu()}
                </div>
                <hr className="featurette-divider" />
                {allEvents}
            </div>
        </div>
    );
}

export default Calendar;