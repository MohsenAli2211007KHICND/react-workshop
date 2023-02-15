import React from 'react'

export default function Flag(country) {
  return (
    <div>

      <img src={`https://flagsapi.com/${country.countryCode}/flat/64.png`}></img>
    </div>
  )
}
