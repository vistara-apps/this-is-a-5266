import React from 'react'
import { Copy, Check } from 'lucide-react'
import Card from './Card'
import Button from './Button'

const LegalScriptBlock = ({ 
  title, 
  script, 
  language = 'english', 
  onCopy, 
  copied = false 
}) => {
  const variantClasses = {
    english: 'border-l-4 border-l-blue-400',
    spanish: 'border-l-4 border-l-green-400'
  }

  return (
    <Card className={`${variantClasses[language]} relative`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-white mb-3">{title}</h3>
          <div className="bg-black/20 rounded-md p-4 mb-4">
            <p className="text-white/90 text-base leading-relaxed italic">
              {script}
            </p>
          </div>
        </div>
        <Button 
          variant="iconOnly" 
          onClick={onCopy}
          className="shrink-0"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>
      
      {copied && (
        <div className="absolute top-2 right-12 bg-green-600 text-white text-xs px-2 py-1 rounded">
          Copied!
        </div>
      )}
    </Card>
  )
}

export default LegalScriptBlock