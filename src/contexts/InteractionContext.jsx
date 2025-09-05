import React, { createContext, useState, useEffect } from 'react'
import { generateIntelligentSummary } from '../services/openai'

export const InteractionContext = createContext()

export const InteractionProvider = ({ children }) => {
  const [interactions, setInteractions] = useState([])

  // Load interactions from localStorage on mount
  useEffect(() => {
    const savedInteractions = localStorage.getItem('pocket-advocate-interactions')
    if (savedInteractions) {
      try {
        setInteractions(JSON.parse(savedInteractions))
      } catch (error) {
        console.error('Failed to load interactions:', error)
      }
    }
  }, [])

  // Save interactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('pocket-advocate-interactions', JSON.stringify(interactions))
  }, [interactions])

  const saveInteraction = async (interaction) => {
    setInteractions(prev => [interaction, ...prev])
  }

  const generateSummary = async (interaction) => {
    try {
      // Use OpenAI service for intelligent summary generation
      const summary = await generateIntelligentSummary(interaction)
      return summary
    } catch (error) {
      console.error('Failed to generate summary:', error)
      throw error
    }
  }

  const value = {
    interactions,
    saveInteraction,
    generateSummary
  }

  return (
    <InteractionContext.Provider value={value}>
      {children}
    </InteractionContext.Provider>
  )
}
