import React, { useState } from 'react';
import City from "./City";

import "./CountryList.css"

const CountryList = () => {
    const [showEstonia, setShowEstonia] = useState(false);
    const [showLithuania, setShowLithuania] = useState(false);
    const [showLatvia, setShowLatvia] = useState(false);

    const [buttonTextEstonia, setButtonTextEstonia] = useState('Show Cities');
    const [buttonTextLithuania, setButtonTextLithuania] = useState('Show Cities');
    const [buttonTextLatvia, setButtonTextLatvia] = useState('Show Cities');

    const toggleCity = (country) => {
        let showState, setShowState, setButtonTextState;

        switch (country) {
            case 'Estonia':
                showState = showEstonia;
                setShowState = setShowEstonia;
                setButtonTextState = setButtonTextEstonia;
                break;
            case 'Lithuania':
                showState = showLithuania;
                setShowState = setShowLithuania;
                setButtonTextState = setButtonTextLithuania;
                break;
            case 'Latvia':
                showState = showLatvia;
                setShowState = setShowLatvia;
                setButtonTextState = setButtonTextLatvia;
                break;
            default:
                break;
        }

        if (showState) {
            setShowState(false);
            setButtonTextState('Show Cities');
        } else {
            setShowState(true);
            setButtonTextState('Show Countries');
        }
    };

    const renderCityContainer = (showState, toggleCity, buttonTextState, country) => (
        <div className="city-container">
            {showState ? (
                <div>
                    <p>{country}</p>
                    <button className="button" onClick={() => toggleCity(country)}>{buttonTextState}</button>
                    <div className={`child-container ${showState ? 'show' : ''}`}>
                        <City country={country} />
                    </div>
                </div>
            ) : (
                <div>
                    <p>{country}</p>
                    <button className="button" onClick={() => toggleCity(country)}>{buttonTextState}</button>
                </div>
            )}
        </div>
    );

    return (
        <div>
            <h2>Countries</h2>
            {renderCityContainer(showEstonia, toggleCity, buttonTextEstonia, 'Estonia')}
            {renderCityContainer(showLithuania, toggleCity, buttonTextLithuania, 'Lithuania')}
            {renderCityContainer(showLatvia, toggleCity, buttonTextLatvia, 'Latvia')}
        </div>
    );
};

export default CountryList;

