import React, { useState, useContext } from 'react'
import { ArrowLeft, Share2, FileText, Download, Copy, Check } from 'lucide-react'
import Card from './Card'
import Button from './Button'
import { InteractionContext } from '../contexts/InteractionContext'
import { exportSummaryToPDF } from '../services/pdfExport'

const CaseSummary = ({ onBack }) => {
  const { interactions, generateSummary } = useContext(InteractionContext)
  const [selectedInteraction, setSelectedInteraction] = useState(null)
  const [generatedSummary, setGeneratedSummary] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleGenerateSummary = async () => {
    if (!selectedInteraction) return
    
    setIsGenerating(true)
    try {
      const summary = await generateSummary(selectedInteraction)
      setGeneratedSummary(summary)
    } catch (error) {
      console.error('Failed to generate summary:', error)
      alert('Failed to generate summary. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleShare = async () => {
    if (!generatedSummary) return
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Police Interaction Summary',
          text: generatedSummary,
        })
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(generatedSummary)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (error) {
      console.error('Failed to share:', error)
    }
  }

  const handleExportPDF = async () => {
    if (!generatedSummary || !selectedInteraction) return
    
    try {
      await exportSummaryToPDF(generatedSummary, selectedInteraction)
    } catch (error) {
      console.error('Failed to export PDF:', error)
      alert('Failed to export PDF. Please try again.')
    }
  }

  const copyToClipboard = async () => {
    if (!generatedSummary) return
    
    try {
      await navigator.clipboard.writeText(generatedSummary)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="iconOnly" onClick={onBack}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h2 className="text-xl font-bold text-white">Case Summary</h2>
          <p className="text-white/60 text-sm">Generate shareable reports</p>
        </div>
      </div>

      {/* Interaction Selector */}
      <Card>
        <h3 className="font-semibold text-white mb-4">Select Interaction to Summarize</h3>
        {interactions.length === 0 ? (
          <div className="text-center py-8">
            <FileText className="w-12 h-12 text-white/40 mx-auto mb-4" />
            <p className="text-white/60">No interactions logged yet</p>
            <p className="text-white/40 text-sm mt-2">Log an interaction first to generate a summary</p>
          </div>
        ) : (
          <div className="space-y-3">
            {interactions.map((interaction) => (
              <button
                key={interaction.id}
                onClick={() => setSelectedInteraction(interaction)}
                className={`w-full p-4 rounded-md border-2 text-left transition-colors ${
                  selectedInteraction?.id === interaction.id
                    ? 'border-accent bg-accent/20 text-white'
                    : 'border-white/20 bg-white/10 text-white/80 hover:border-white/40'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium capitalize mb-1">
                      {interaction.type.replace('-', ' ')}
                    </div>
                    <div className="text-sm text-white/60">
                      {new Date(interaction.timestamp).toLocaleString()}
                    </div>
                    <div className="text-sm text-white/60">
                      {interaction.location.state || 'Unknown Location'}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </Card>

      {/* Generate Summary Button */}
      {selectedInteraction && !generatedSummary && (
        <Button 
          onClick={handleGenerateSummary}
          disabled={isGenerating}
          className="w-full"
        >
          <FileText className="w-4 h-4 mr-2" />
          {isGenerating ? 'Generating Summary...' : 'Generate Case Summary'}
        </Button>
      )}

      {/* Generated Summary */}
      {generatedSummary && (
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white">Generated Summary</h3>
            <div className="flex gap-2">
              <Button variant="iconOnly" onClick={copyToClipboard}>
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </Button>
              <Button variant="iconOnly" onClick={handleExportPDF}>
                <Download className="w-4 h-4" />
              </Button>
              <Button variant="iconOnly" onClick={handleShare}>
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="bg-black/20 rounded-md p-4 mb-4">
            <pre className="text-white/90 text-sm leading-relaxed whitespace-pre-wrap">
              {generatedSummary}
            </pre>
          </div>

          <div className="flex gap-3">
            <Button 
              variant="secondary" 
              className="flex-1"
              onClick={() => {
                setGeneratedSummary(null)
                setSelectedInteraction(null)
              }}
            >
              Generate Another
            </Button>
            <Button 
              variant="primary" 
              className="flex-1"
              onClick={handleShare}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Summary
            </Button>
          </div>
        </Card>
      )}

      {copied && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg">
          Summary copied to clipboard!
        </div>
      )}
    </div>
  )
}

export default CaseSummary
