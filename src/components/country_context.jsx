import React from 'react'

const CountryContext = React.createContext()

export const CountryProvider = CountryContext.Provider
export const CountryConsumer = CountryContext.Consumer

export default CountryContext