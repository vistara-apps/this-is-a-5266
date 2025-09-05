import OpenAI from 'openai'

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Note: In production, API calls should go through a backend
})

/**
 * Generate an intelligent case summary using OpenAI
 * @param {Object} interaction - The interaction data
 * @returns {Promise<string>} - Generated summary
 */
export const generateIntelligentSummary = async (interaction) => {
  if (!import.meta.env.VITE_OPENAI_API_KEY) {
    // Fallback to mock summary if no API key
    return generateMockSummary(interaction)
  }

  try {
    const prompt = `Generate a professional police interaction summary based on the following information:

Date & Time: ${new Date(interaction.timestamp).toLocaleString()}
Location: ${interaction.location?.state || 'Unknown State'}
Type: ${interaction.type?.replace('-', ' ') || 'Unknown'}
Officer Badge: ${interaction.officerBadge || 'Not provided'}
Officer Name: ${interaction.officerName || 'Not provided'}
Vehicle/Unit: ${interaction.vehicleInfo || 'Not provided'}
Description: ${interaction.description || 'No description provided'}
Witnesses: ${interaction.witnesses || 'None reported'}
Outcome: ${interaction.outcome || 'Not specified'}

Please create a clear, factual summary that:
1. Organizes the information professionally
2. Includes relevant legal rights that applied
3. Provides guidance on next steps if needed
4. Maintains an objective tone
5. Includes a disclaimer about seeking legal counsel

Format the response as a structured document suitable for sharing with legal counsel or keeping as a personal record.`

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a legal assistant helping citizens document police interactions. Provide accurate, helpful, and professional summaries while emphasizing constitutional rights and the importance of legal counsel.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 1000,
      temperature: 0.3
    })

    return response.choices[0].message.content
  } catch (error) {
    console.error('OpenAI API error:', error)
    // Fallback to mock summary on error
    return generateMockSummary(interaction)
  }
}

/**
 * Generate legal scripts for specific scenarios using OpenAI
 * @param {string} scenario - The scenario type
 * @param {string} language - The target language
 * @param {string} state - The user's state for state-specific advice
 * @returns {Promise<Object>} - Generated script with title and content
 */
export const generateLegalScript = async (scenario, language = 'english', state = null) => {
  if (!import.meta.env.VITE_OPENAI_API_KEY) {
    return null // Fall back to static scripts
  }

  try {
    const stateContext = state ? ` in ${state}` : ''
    const languageInstruction = language === 'spanish' ? 'Respond in Spanish' : 'Respond in English'
    
    const prompt = `Generate a legal script for a ${scenario.replace('-', ' ')} scenario${stateContext}. 
    
    ${languageInstruction}. The script should:
    1. Be respectful and professional
    2. Clearly assert constitutional rights
    3. Be easy to remember and say under stress
    4. Be legally sound and appropriate
    5. Avoid escalating the situation
    
    Provide both a title and the script text.`

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a legal expert helping citizens understand their rights during police interactions. Provide clear, constitutionally sound scripts that help people exercise their rights safely and respectfully.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 300,
      temperature: 0.2
    })

    const content = response.choices[0].message.content
    const lines = content.split('\n').filter(line => line.trim())
    
    return {
      title: lines[0].replace(/^(Title:|Script Title:)/i, '').trim(),
      script: lines.slice(1).join(' ').trim()
    }
  } catch (error) {
    console.error('OpenAI API error:', error)
    return null
  }
}

/**
 * Get state-specific rights information using OpenAI
 * @param {string} state - The state code
 * @param {string} scenario - The scenario type
 * @returns {Promise<Object>} - State-specific rights and warnings
 */
export const getStateSpecificRights = async (state, scenario) => {
  if (!import.meta.env.VITE_OPENAI_API_KEY || !state || state === 'Unknown') {
    return null // Fall back to general rights
  }

  try {
    const prompt = `Provide specific legal rights and important warnings for a ${scenario.replace('-', ' ')} scenario in ${state}. 

    Include:
    1. Constitutional rights that apply
    2. State-specific laws or procedures
    3. Important safety warnings
    4. What to expect in this state
    
    Format as JSON with 'rights' and 'warnings' arrays.`

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a legal expert with knowledge of state-specific laws and procedures. Provide accurate, helpful information about citizens\' rights during police interactions.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 500,
      temperature: 0.1
    })

    return JSON.parse(response.choices[0].message.content)
  } catch (error) {
    console.error('OpenAI API error:', error)
    return null
  }
}

/**
 * Fallback mock summary generator
 * @param {Object} interaction - The interaction data
 * @returns {string} - Mock summary
 */
const generateMockSummary = (interaction) => {
  return `POLICE INTERACTION SUMMARY

Date & Time: ${new Date(interaction.timestamp).toLocaleString()}
Location: ${interaction.location?.state || 'Unknown State'}${interaction.location?.coordinates ? ` (${interaction.location.coordinates.latitude.toFixed(4)}, ${interaction.location.coordinates.longitude.toFixed(4)})` : ''}
Type: ${interaction.type?.replace('-', ' ').toUpperCase() || 'UNKNOWN'}

OFFICER INFORMATION:
${interaction.officerBadge ? `Badge Number: ${interaction.officerBadge}` : 'Badge Number: Not provided'}
${interaction.officerName ? `Name: ${interaction.officerName}` : 'Name: Not provided'}
${interaction.vehicleInfo ? `Vehicle/Unit: ${interaction.vehicleInfo}` : 'Vehicle/Unit: Not provided'}

INCIDENT DESCRIPTION:
${interaction.description || 'No description provided'}

WITNESSES:
${interaction.witnesses || 'None reported'}

OUTCOME:
${interaction.outcome || 'Not specified'}

CONSTITUTIONAL RIGHTS THAT APPLIED:
- Right to remain silent (Fifth Amendment)
- Right to refuse consent to search (Fourth Amendment)
- Right to ask if you are free to go
- Right to have an attorney present during questioning
- Right to record the interaction (in most jurisdictions)

ADDITIONAL NOTES:
- This summary was generated automatically
- Keep this record for your files
- Contact legal counsel if you have concerns about this interaction
- Document any injuries or property damage immediately
- Consider filing a complaint if rights were violated

DISCLAIMER:
This summary is for documentation purposes only and does not constitute legal advice. 
Consult with a qualified attorney for legal guidance regarding this interaction.

Generated by Pocket Advocate on ${new Date().toLocaleString()}`
}
