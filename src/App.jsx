import React, { useState, useEffect } from 'react'
import AppHeader from './components/AppHeader'
import Dashboard from './components/Dashboard'
import RightsInfo from './components/RightsInfo'
import LegalScripting from './components/LegalScripting'
import InteractionLogger from './components/InteractionLogger'
import CaseSummary from './components/CaseSummary'
import { LocationProvider } from './contexts/LocationContext'
import { InteractionProvider } from './contexts/InteractionContext'

function App() {
  const [activeView, setActiveView] = useState('dashboard')

  return (
    <LocationProvider>
      <InteractionProvider>
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800">
          <div className="container mx-auto px-4 py-6 max-w-md sm:max-w-2xl lg:max-w-4xl">
            <AppHeader />
            
            <main className="mt-6">
              {activeView === 'dashboard' && (
                <Dashboard onNavigate={setActiveView} />
              )}
              {activeView === 'rights' && (
                <RightsInfo onBack={() => setActiveView('dashboard')} />
              )}
              {activeView === 'scripting' && (
                <LegalScripting onBack={() => setActiveView('dashboard')} />
              )}
              {activeView === 'logger' && (
                <InteractionLogger onBack={() => setActiveView('dashboard')} />
              )}
              {activeView === 'summary' && (
                <CaseSummary onBack={() => setActiveView('dashboard')} />
              )}
            </main>
          </div>
        </div>
      </InteractionProvider>
    </LocationProvider>
  )
}

export default App