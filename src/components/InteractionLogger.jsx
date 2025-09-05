import React, { useState, useContext } from 'react'
import { ArrowLeft, FileText, MapPin, Clock, Save } from 'lucide-react'
import Card from './Card'
import Button from './Button'
import { LocationContext } from '../contexts/LocationContext'
import { InteractionContext } from '../contexts/InteractionContext'

const InteractionLogger = ({ onBack }) => {
  const { location } = useContext(LocationContext)
  const { saveInteraction } = useContext(InteractionContext)
  const [formData, setFormData] = useState({
    type: 'traffic-stop',
    officerBadge: '',
    officerName: '',
    vehicleInfo: '',
    description: '',
    witnesses: '',
    outcome: ''
  })
  const [isSaving, setIsSaving] = useState(false)

  const interactionTypes = [
    { id: 'traffic-stop', name: 'Traffic Stop' },
    { id: 'street-encounter', name: 'Street Encounter' },
    { id: 'home-visit', name: 'Home Visit' },
    { id: 'arrest', name: 'Arrest' },
    { id: 'other', name: 'Other' }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const interaction = {
        ...formData,
        timestamp: new Date().toISOString(),
        location: location || { state: 'Unknown', coordinates: null },
        id: Date.now().toString()
      }
      
      await saveInteraction(interaction)
      alert('Interaction logged successfully!')
      onBack()
    } catch (error) {
      console.error('Failed to save interaction:', error)
      alert('Failed to save interaction. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  const currentTime = new Date().toLocaleString()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="iconOnly" onClick={onBack}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h2 className="text-xl font-bold text-white">Log Interaction</h2>
          <p className="text-white/60 text-sm">Record details for your protection</p>
        </div>
      </div>

      {/* Auto-filled Information */}
      <Card>
        <h3 className="font-semibold text-white mb-4">Automatic Information</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-white/80">
            <Clock className="w-4 h-4 text-accent" />
            <span className="text-sm">{currentTime}</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm">
              {location ? 
                `${location.state || 'Unknown State'}${location.coordinates ? 
                  ` (${location.coordinates.latitude.toFixed(4)}, ${location.coordinates.longitude.toFixed(4)})` : 
                  ''}` : 
                'Location not available'
              }
            </span>
          </div>
        </div>
      </Card>

      {/* Interaction Type */}
      <Card>
        <h3 className="font-semibold text-white mb-4">Type of Interaction</h3>
        <div className="grid grid-cols-1 gap-2">
          {interactionTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleInputChange('type', type.id)}
              className={`p-3 rounded-md border-2 text-left transition-colors ${
                formData.type === type.id
                  ? 'border-accent bg-accent/20 text-white'
                  : 'border-white/20 bg-white/10 text-white/80 hover:border-white/40'
              }`}
            >
              {type.name}
            </button>
          ))}
        </div>
      </Card>

      {/* Officer Information */}
      <Card>
        <h3 className="font-semibold text-white mb-4">Officer Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm mb-2">Badge Number</label>
            <input
              type="text"
              value={formData.officerBadge}
              onChange={(e) => handleInputChange('officerBadge', e.target.value)}
              className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent"
              placeholder="Enter badge number if visible"
            />
          </div>
          <div>
            <label className="block text-white/80 text-sm mb-2">Officer Name</label>
            <input
              type="text"
              value={formData.officerName}
              onChange={(e) => handleInputChange('officerName', e.target.value)}
              className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent"
              placeholder="Officer's name if provided"
            />
          </div>
          <div>
            <label className="block text-white/80 text-sm mb-2">Vehicle/Unit Info</label>
            <input
              type="text"
              value={formData.vehicleInfo}
              onChange={(e) => handleInputChange('vehicleInfo', e.target.value)}
              className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent"
              placeholder="License plate, unit number, etc."
            />
          </div>
        </div>
      </Card>

      {/* Description */}
      <Card>
        <h3 className="font-semibold text-white mb-4">Description of Events</h3>
        <textarea
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          rows={4}
          className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent resize-none"
          placeholder="Describe what happened in detail..."
        />
      </Card>

      {/* Additional Information */}
      <Card>
        <h3 className="font-semibold text-white mb-4">Additional Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm mb-2">Witnesses</label>
            <input
              type="text"
              value={formData.witnesses}
              onChange={(e) => handleInputChange('witnesses', e.target.value)}
              className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent"
              placeholder="Names or descriptions of witnesses"
            />
          </div>
          <div>
            <label className="block text-white/80 text-sm mb-2">Outcome</label>
            <input
              type="text"
              value={formData.outcome}
              onChange={(e) => handleInputChange('outcome', e.target.value)}
              className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent"
              placeholder="Warning, citation, arrest, etc."
            />
          </div>
        </div>
      </Card>

      {/* Save Button */}
      <Button 
        onClick={handleSave} 
        disabled={isSaving}
        className="w-full"
      >
        <Save className="w-4 h-4 mr-2" />
        {isSaving ? 'Saving...' : 'Save Interaction Log'}
      </Button>
    </div>
  )
}

export default InteractionLogger