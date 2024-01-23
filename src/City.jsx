import React from 'react';

const City = ({ country }) => {
    return (
        <div>
            <ul>
                {country === 'Estonia' && (
                    <>
                        <li>Tallinn</li>
                        <li>Tartu</li>
                        <li>Narva</li>
                        <li>Pärnu</li>
                        <li>Silamae</li>
                    </>
                )}
                {country === 'Lithuania' && (
                    <>
                        <li>Vilnius</li>
                        <li>Kaunas</li>
                        <li>Klaipėda</li>
                        <li>Šiauliai</li>
                        <li>Panevėžys</li>
                    </>
                )}
                {country === 'Latvia' && (
                    <>
                        <li>Riga</li>
                        <li>Daugavpils</li>
                        <li>Jūrmala</li>
                        <li>Liepāja</li>
                        <li>Rēzekne</li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default City;
