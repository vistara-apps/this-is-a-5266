import React, { useState } from 'react'
import { ArrowLeft, MessageCircle, Globe, Copy, Check } from 'lucide-react'
import Card from './Card'
import Button from './Button'
import LegalScriptBlock from './LegalScriptBlock'

const LegalScripting = ({ onBack }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('english')
  const [selectedScenario, setSelectedScenario] = useState('traffic-stop')
  const [copiedScript, setCopiedScript] = useState(null)

  const languages = [
    { id: 'english', name: 'English', flag: '🇺🇸' },
    { id: 'spanish', name: 'Español', flag: '🇪🇸' }
  ]

  const scenarios = [
    { id: 'traffic-stop', name: 'Traffic Stop' },
    { id: 'consent-search', name: 'Refusing Search' },
    { id: 'detention-question', name: 'Am I Detained?' },
    { id: 'silent-right', name: 'Remaining Silent' }
  ]

  const scripts = {
    english: {
      'traffic-stop': {
        title: 'Basic Traffic Stop Response',
        script: '"Good [morning/afternoon/evening], officer. I understand you\'ve stopped me. I have my license and registration ready. I choose to remain silent and would like to exercise my constitutional rights."'
      },
      'consent-search': {
        title: 'Refusing Consent to Search',
        script: '"Officer, I do not consent to any searches of my person, belongings, or vehicle. I am exercising my Fourth Amendment right to refuse consent to search."'
      },
      'detention-question': {
        title: 'Asking About Detention',
        script: '"Officer, am I being detained, or am I free to go? I would like to exercise my right to leave if I am not being detained."'
      },
      'silent-right': {
        title: 'Invoking Right to Remain Silent',
        script: '"I am exercising my Fifth Amendment right to remain silent. I will not answer any questions without my attorney present."'
      }
    },
    spanish: {
      'traffic-stop': {
        title: 'Respuesta Básica en Parada de Tráfico',
        script: '"Buenos [días/tardes/noches], oficial. Entiendo que me ha detenido. Tengo mi licencia y registro listos. Elijo permanecer en silencio y me gustaría ejercer mis derechos constitucionales."'
      },
      'consent-search': {
        title: 'Negarse al Consentimiento de Búsqueda',
        script: '"Oficial, no consiento a ninguna búsqueda de mi persona, pertenencias o vehículo. Estoy ejerciendo mi derecho de la Cuarta Enmienda de negar el consentimiento para la búsqueda."'
      },
      'detention-question': {
        title: 'Preguntando Sobre Detención',
        script: '"Oficial, ¿estoy siendo detenido o soy libre de irme? Me gustaría ejercer mi derecho a irme si no estoy siendo detenido."'
      },
      'silent-right': {
        title: 'Invocando el Derecho a Permanecer en Silencio',
        script: '"Estoy ejerciendo mi derecho de la Quinta Enmienda a permanecer en silencio. No responderé ninguna pregunta sin mi abogado presente."'
      }
    }
  }

  const copyScript = async (scriptText) => {
    try {
      await navigator.clipboard.writeText(scriptText)
      setCopiedScript(selectedScenario)
      setTimeout(() => setCopiedScript(null), 2000)
    } catch (err) {
      console.error('Failed to copy script:', err)
    }
  }

  const currentScript = scripts[selectedLanguage][selectedScenario]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="iconOnly" onClick={onBack}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h2 className="text-xl font-bold text-white">Legal Scripts</h2>
          <p className="text-white/60 text-sm">Pre-written, legally sound responses</p>
        </div>
      </div>

      {/* Language Selector */}
      <Card>
        <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5 text-accent" />
          Select Language
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {languages.map((language) => (
            <button
              key={language.id}
              onClick={() => setSelectedLanguage(language.id)}
              className={`p-3 rounded-md border-2 transition-colors ${
                selectedLanguage === language.id
                  ? 'border-accent bg-accent/20 text-white'
                  : 'border-white/20 bg-white/10 text-white/80 hover:border-white/40'
              }`}
            >
              <div className="text-2xl mb-1">{language.flag}</div>
              <div className="text-sm font-medium">{language.name}</div>
            </button>
          ))}
        </div>
      </Card>

      {/* Scenario Selector */}
      <Card>
        <h3 className="font-semibold text-white mb-4">Select Scenario</h3>
        <div className="grid grid-cols-1 gap-2">
          {scenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setSelectedScenario(scenario.id)}
              className={`p-3 rounded-md border-2 text-left transition-colors ${
                selectedScenario === scenario.id
                  ? 'border-accent bg-accent/20 text-white'
                  : 'border-white/20 bg-white/10 text-white/80 hover:border-white/40'
              }`}
            >
              <div className="font-medium">{scenario.name}</div>
            </button>
          ))}
        </div>
      </Card>

      {/* Script Display */}
      {currentScript && (
        <LegalScriptBlock 
          title={currentScript.title}
          script={currentScript.script}
          language={selectedLanguage}
          onCopy={() => copyScript(currentScript.script)}
          copied={copiedScript === selectedScenario}
        />
      )}

      {/* Additional Tips */}
      <Card>
        <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-accent" />
          Usage Tips
        </h3>
        <ul className="space-y-2 text-white/80 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-accent mt-1">•</span>
            Speak clearly and calmly
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent mt-1">•</span>
            Don't argue or debate with officers
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent mt-1">•</span>
            Repeat the script if necessary
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent mt-1">•</span>
            Stay polite and respectful at all times
          </li>
        </ul>
      </Card>
    </div>
  )
}

export default LegalScripting