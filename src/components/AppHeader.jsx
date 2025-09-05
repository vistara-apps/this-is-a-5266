import React from 'react'
import { Shield, Menu } from 'lucide-react'

const AppHeader = () => {
  return (
    <header className="glass-effect rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-md">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">Pocket Advocate</h1>
            <p className="text-white/80 text-sm">Know Your Rights</p>
          </div>
        </div>
        <button className="p-2 hover:bg-white/10 rounded-md transition-colors">
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>
    </header>
  )
}

export default AppHeader