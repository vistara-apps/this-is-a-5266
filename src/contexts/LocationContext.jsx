import React, { createContext, useState, useEffect } from 'react'

export const LocationContext = createContext()

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // State mapping for US states (simplified version)
  const getStateFromCoordinates = (latitude, longitude) => {
    // This is a simplified implementation
    // In a real app, you'd use a geocoding service
    const states = {
      'CA': { minLat: 32.5, maxLat: 42.0, minLng: -124.4, maxLng: -114.1 },
      'NY': { minLat: 40.5, maxLat: 45.0, minLng: -79.8, maxLng: -71.8 },
      'TX': { minLat: 25.8, maxLat: 36.5, minLng: -106.6, maxLng: -93.5 },
      'FL': { minLat: 24.4, maxLat: 31.0, minLng: -87.6, maxLng: -80.0 },
    }

    for (const [state, bounds] of Object.entries(states)) {
      if (latitude >= bounds.minLat && latitude <= bounds.maxLat &&
          longitude >= bounds.minLng && longitude <= bounds.maxLng) {
        return state
      }
    }
    return 'Unknown'
  }

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
        const state = getStateFromCoordinates(latitude, longitude)
        
        setLocation({
          coordinates: { latitude, longitude },
          state,
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