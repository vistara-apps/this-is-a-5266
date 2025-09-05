import React, { useContext } from 'react'
import { Scale, MessageCircle, FileText, Share2, MapPin } from 'lucide-react'
import Card from './Card'
import Button from './Button'
import { LocationContext } from '../contexts/LocationContext'

const Dashboard = ({ onNavigate }) => {
  const { location, isLoading, requestLocation } = useContext(LocationContext)

  const features = [
    {
      id: 'rights',
      title: 'Know Your Rights',
      description: 'Instant access to your legal rights',
      icon: Scale,
      onClick: () => onNavigate('rights')
    },
    {
      id: 'scripting',
      title: 'Legal Scripts',
      description: 'Pre-written responses in your language',
      icon: MessageCircle,
      onClick: () => onNavigate('scripting')
    },
    {
      id: 'logger',
      title: 'Log Interaction',
      description: 'Record details of police encounters',
      icon: FileText,
      onClick: () => onNavigate('logger')
    },
    {
      id: 'summary',
      title: 'Case Summary',
      description: 'Generate shareable reports',
      icon: Share2,
      onClick: () => onNavigate('summary')
    }
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <Card className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">
          Your Rights, Your Voice
        </h2>
        <p className="text-white/80 mb-4">
          Instantly accessible legal guidance when you need it most
        </p>
        
        {/* Location Status */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="w-4 h-4 text-white/60" />
          <span className="text-white/60 text-sm">
            {isLoading ? 'Getting location...' : 
             location ? `${location.state || 'Unknown State'}` : 
             'Location not set'}
          </span>
        </div>

        {!location && !isLoading && (
          <Button onClick={requestLocation} variant="secondary" size="sm">
            Enable Location for State-Specific Rights
          </Button>
        )}
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-white">127</div>
          <div className="text-white/60 text-sm">Rights Accessed</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-white">45</div>
          <div className="text-white/60 text-sm">Scripts Used</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-white">12</div>
          <div className="text-white/60 text-sm">Interactions Logged</div>
        </Card>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feature) => {
          const IconComponent = feature.icon
          return (
            <Card key={feature.id} className="p-6 cursor-pointer hover:bg-white/15 transition-colors" onClick={feature.onClick}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard