import React, { useCallback } from 'react'
import {countryCodes} from '../data/countryCodes.js'
import styles from './Country.module.css'

export default function CountrySelector({onChange}) {
    const handleCountryChange = useCallback((event) => {
        const value = event.target.value;
        const countryData = countryCodes.find(x => x.code === value);
        onChange(countryData);
    }, [onChange]);

    return <select className={styles.selector} onChange={handleCountryChange}>
        <option selected disabled>Please select a country</option>
        {countryCodes.map(country => {
            return <option value={country.code}>{country.name}</option>
            })}
    </select>
}
