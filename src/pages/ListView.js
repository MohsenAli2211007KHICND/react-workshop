import React, { useCallback, useEffect, useState } from 'react'
import CountrySelector from '../components/CountrySelector'
import Flag from '../components/Flag'
import Panel from '../components/Panel'

export default function ListView() {
    const [country, setCountry] = useState(null);
    const [holidays, setHolidays] = useState([]);

    useEffect(() => {

        async function loadData() {
            const url = `https://date.nager.at/api/v3/publicholidays/2023/${country.code}`;
            const response = await fetch(url);
            if(response.status === 204){
                setHolidays([]);
                return
            }
            const data = await response.json();
            setHolidays(data);
        }
        if (country !== null) {
            loadData();
        }


    }, [country]);




    return <div>
        <CountrySelector onChange={(value) => setCountry(value)} />
        {country === null ? <Panel>Please select a country</Panel> :
            <>
                <div>
                    <h2>{country.name}</h2>
                    <Flag countryCode={country.code} >

                    </Flag>
                </div>

                {holidays.length > 0 ? holidays.map(holiday => (
                    <Panel>
                        <p>Name: {holiday.name}</p>
                        <p>Local Name: {holiday.localName}</p>
                        <p>Date: {holiday.date}</p>
                    </Panel>
                )) :
                    <Panel>No Data to show for {country.name}</Panel>}
            </>
        }
    </div>;
}
