import React, { createContext, useState, useEffect } from 'react'
import { getStateFromCoordinates } from '../data/stateMapping'

export const LocationContext = createContext()

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Enhanced state detection with comprehensive mapping

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser')
      return
    }

    setIsLoading(true)
    setError(null)

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        const stateInfo = getStateFromCoordinates(latitude, longitude)
        
        setLocation({
          coordinates: { latitude, longitude },
          state: stateInfo?.code || 'Unknown',
          stateInfo: stateInfo,
          timestamp: new Date().toISOString()
        })
        setIsLoading(false)
      },
      (err) => {
        setError(err.message)
        setIsLoading(false)
        
        // Set a default location if geolocation fails
        setLocation({
          coordinates: null,
          state: 'Unknown',
          timestamp: new Date().toISOString()
        })
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    )
  }

  const value = {
    location,
    isLoading,
    error,
    requestLocation
  }

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  )
}
