import React, { useState, useContext } from 'react'
import { ArrowLeft, MapPin, AlertTriangle, Info } from 'lucide-react'
import Card from './Card'
import Button from './Button'
import { LocationContext } from '../contexts/LocationContext'

const RightsInfo = ({ onBack }) => {
  const { location } = useContext(LocationContext)
  const [selectedScenario, setSelectedScenario] = useState('traffic-stop')

  const scenarios = [
    { id: 'traffic-stop', name: 'Traffic Stop', icon: '🚗' },
    { id: 'street-encounter', name: 'Street Encounter', icon: '🚶' },
    { id: 'home-visit', name: 'Home Visit', icon: '🏠' },
    { id: 'arrest', name: 'Arrest Situation', icon: '⚖️' }
  ]

  const rightsInfo = {
    'traffic-stop': {
      title: 'Traffic Stop Rights',
      rights: [
        'You have the right to remain silent',
        'You can refuse consent to search your vehicle',
        'You can ask "Am I free to go?"',
        'You have the right to see the officer\'s badge and get their name',
        'You can record the interaction (in most states)'
      ],
      warnings: [
        'Keep your hands visible at all times',
        'Don\'t make sudden movements',
        'Be polite and respectful',
        'Don\'t argue or resist, even if you believe the stop is unlawful'
      ]
    },
    'street-encounter': {
      title: 'Street Encounter Rights',
      rights: [
        'You have the right to walk away if not being detained',
        'You can ask "Am I being detained?"',
        'You don\'t have to answer questions beyond identifying yourself',
        'You can refuse consent to search',
        'You have the right to record in public'
      ],
      warnings: [
        'Stay calm and don\'t run',
        'Keep your hands visible',
        'Don\'t reach for anything without announcing it',
        'Be respectful but firm about your rights'
      ]
    },
    'home-visit': {
      title: 'Home Visit Rights',
      rights: [
        'Police need a warrant to enter your home (with few exceptions)',
        'You can speak through the door',
        'You don\'t have to let them in without a warrant',
        'You can ask to see the warrant',
        'You have the right to remain silent'
      ],
      warnings: [
        'Don\'t open the door unless required',
        'Ask for identification',
        'Don\'t consent to entry or search',
        'Stay calm even if they\'re persistent'
      ]
    },
    'arrest': {
      title: 'Arrest Situation Rights',
      rights: [
        'You have the right to remain silent (Miranda Rights)',
        'You have the right to an attorney',
        'If you can\'t afford an attorney, one will be appointed',
        'Anything you say can be used against you',
        'You can invoke these rights at any time'
      ],
      warnings: [
        'Don\'t resist arrest, even if you believe it\'s unlawful',
        'Don\'t say anything without a lawyer present',
        'Ask for a lawyer immediately',
        'Remember details for later legal action'
      ]
    }
  }

  const currentRights = rightsInfo[selectedScenario]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="iconOnly" onClick={onBack}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h2 className="text-xl font-bold text-white">Know Your Rights</h2>
          <div className="flex items-center gap-2 mt-1">
            <MapPin className="w-4 h-4 text-white/60" />
            <span className="text-white/60 text-sm">
              {location?.state || 'Location not available'}
            </span>
          </div>
        </div>
      </div>

      {/* Scenario Selector */}
      <Card>
        <h3 className="font-semibold text-white mb-4">Select Scenario</h3>
        <div className="grid grid-cols-2 gap-3">
          {scenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setSelectedScenario(scenario.id)}
              className={`p-3 rounded-md border-2 transition-colors ${
                selectedScenario === scenario.id
                  ? 'border-accent bg-accent/20 text-white'
                  : 'border-white/20 bg-white/10 text-white/80 hover:border-white/40'
              }`}
            >
              <div className="text-2xl mb-1">{scenario.icon}</div>
              <div className="text-sm font-medium">{scenario.name}</div>
            </button>
          ))}
        </div>
      </Card>

      {/* Rights Information */}
      <Card>
        <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
          <Info className="w-5 h-5 text-accent" />
          {currentRights.title}
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-white mb-2">Your Rights:</h4>
            <ul className="space-y-2">
              {currentRights.rights.map((right, index) => (
                <li key={index} className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-accent mt-1">•</span>
                  {right}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              Important Reminders:
            </h4>
            <ul className="space-y-2">
              {currentRights.warnings.map((warning, index) => (
                <li key={index} className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-yellow-400 mt-1">•</span>
                  {warning}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Button 
          variant="secondary" 
          className="w-full"
          onClick={() => window.location.href = '#scripting'}
        >
          Get Legal Scripts
        </Button>
        <Button 
          variant="secondary" 
          className="w-full"
          onClick={() => window.location.href = '#logger'}
        >
          Log This Interaction
        </Button>
      </div>
    </div>
  )
}

export default RightsInfo