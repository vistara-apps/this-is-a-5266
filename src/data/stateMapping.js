/**
 * Comprehensive US state mapping with coordinates and legal information
 */

export const US_STATES = {
  'AL': {
    name: 'Alabama',
    bounds: { minLat: 30.2, maxLat: 35.0, minLng: -88.5, maxLng: -84.9 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'AK': {
    name: 'Alaska',
    bounds: { minLat: 54.0, maxLat: 71.5, minLng: -179.0, maxLng: -129.0 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public spaces.'
  },
  'AZ': {
    name: 'Arizona',
    bounds: { minLat: 31.3, maxLat: 37.0, minLng: -114.8, maxLng: -109.0 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'AR': {
    name: 'Arkansas',
    bounds: { minLat: 33.0, maxLat: 36.5, minLng: -94.6, maxLng: -89.6 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'CA': {
    name: 'California',
    bounds: { minLat: 32.5, maxLat: 42.0, minLng: -124.4, maxLng: -114.1 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public. Strong privacy protections.'
  },
  'CO': {
    name: 'Colorado',
    bounds: { minLat: 37.0, maxLat: 41.0, minLng: -109.1, maxLng: -102.0 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'CT': {
    name: 'Connecticut',
    bounds: { minLat: 40.9, maxLat: 42.1, minLng: -73.7, maxLng: -71.8 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public spaces.'
  },
  'DE': {
    name: 'Delaware',
    bounds: { minLat: 38.4, maxLat: 39.8, minLng: -75.8, maxLng: -75.0 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'FL': {
    name: 'Florida',
    bounds: { minLat: 24.4, maxLat: 31.0, minLng: -87.6, maxLng: -80.0 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'GA': {
    name: 'Georgia',
    bounds: { minLat: 30.4, maxLat: 35.0, minLng: -85.6, maxLng: -80.8 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'HI': {
    name: 'Hawaii',
    bounds: { minLat: 18.9, maxLat: 28.4, minLng: -178.3, maxLng: -154.8 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public spaces.'
  },
  'ID': {
    name: 'Idaho',
    bounds: { minLat: 42.0, maxLat: 49.0, minLng: -117.2, maxLng: -111.0 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'IL': {
    name: 'Illinois',
    bounds: { minLat: 36.9, maxLat: 42.5, minLng: -91.5, maxLng: -87.0 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public. Two-party consent for private conversations.'
  },
  'IN': {
    name: 'Indiana',
    bounds: { minLat: 37.8, maxLat: 41.8, minLng: -88.1, maxLng: -84.8 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'IA': {
    name: 'Iowa',
    bounds: { minLat: 40.4, maxLat: 43.5, minLng: -96.6, maxLng: -90.1 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public spaces.'
  },
  'KS': {
    name: 'Kansas',
    bounds: { minLat: 37.0, maxLat: 40.0, minLng: -102.1, maxLng: -94.6 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'KY': {
    name: 'Kentucky',
    bounds: { minLat: 36.5, maxLat: 39.1, minLng: -89.6, maxLng: -81.9 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public spaces.'
  },
  'LA': {
    name: 'Louisiana',
    bounds: { minLat: 28.9, maxLat: 33.0, minLng: -94.0, maxLng: -88.8 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'ME': {
    name: 'Maine',
    bounds: { minLat: 43.1, maxLat: 47.5, minLng: -71.1, maxLng: -66.9 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public spaces.'
  },
  'MD': {
    name: 'Maryland',
    bounds: { minLat: 37.9, maxLat: 39.7, minLng: -79.5, maxLng: -75.0 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public. Two-party consent for private conversations.'
  },
  'MA': {
    name: 'Massachusetts',
    bounds: { minLat: 41.2, maxLat: 42.9, minLng: -73.5, maxLng: -69.9 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public. Two-party consent for private conversations.'
  },
  'MI': {
    name: 'Michigan',
    bounds: { minLat: 41.7, maxLat: 48.3, minLng: -90.4, maxLng: -82.4 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public spaces.'
  },
  'MN': {
    name: 'Minnesota',
    bounds: { minLat: 43.5, maxLat: 49.4, minLng: -97.2, maxLng: -89.5 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public spaces.'
  },
  'MS': {
    name: 'Mississippi',
    bounds: { minLat: 30.2, maxLat: 35.0, minLng: -91.7, maxLng: -88.1 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public spaces.'
  },
  'MO': {
    name: 'Missouri',
    bounds: { minLat: 36.0, maxLat: 40.6, minLng: -95.8, maxLng: -89.1 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'MT': {
    name: 'Montana',
    bounds: { minLat: 45.0, maxLat: 49.0, minLng: -116.1, maxLng: -104.0 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'NE': {
    name: 'Nebraska',
    bounds: { minLat: 40.0, maxLat: 43.0, minLng: -104.1, maxLng: -95.3 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'NV': {
    name: 'Nevada',
    bounds: { minLat: 35.0, maxLat: 42.0, minLng: -120.0, maxLng: -114.0 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'NH': {
    name: 'New Hampshire',
    bounds: { minLat: 42.7, maxLat: 45.3, minLng: -72.6, maxLng: -70.6 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'NJ': {
    name: 'New Jersey',
    bounds: { minLat: 38.9, maxLat: 41.4, minLng: -75.6, maxLng: -73.9 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public spaces.'
  },
  'NM': {
    name: 'New Mexico',
    bounds: { minLat: 31.3, maxLat: 37.0, minLng: -109.1, maxLng: -103.0 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'NY': {
    name: 'New York',
    bounds: { minLat: 40.5, maxLat: 45.0, minLng: -79.8, maxLng: -71.8 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'NC': {
    name: 'North Carolina',
    bounds: { minLat: 33.8, maxLat: 36.6, minLng: -84.3, maxLng: -75.5 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public spaces.'
  },
  'ND': {
    name: 'North Dakota',
    bounds: { minLat: 45.9, maxLat: 49.0, minLng: -104.1, maxLng: -96.6 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'OH': {
    name: 'Ohio',
    bounds: { minLat: 38.4, maxLat: 42.3, minLng: -84.8, maxLng: -80.5 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'OK': {
    name: 'Oklahoma',
    bounds: { minLat: 33.6, maxLat: 37.0, minLng: -103.0, maxLng: -94.4 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'OR': {
    name: 'Oregon',
    bounds: { minLat: 42.0, maxLat: 46.3, minLng: -124.6, maxLng: -116.5 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public spaces.'
  },
  'PA': {
    name: 'Pennsylvania',
    bounds: { minLat: 39.7, maxLat: 42.5, minLng: -80.5, maxLng: -74.7 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public. Two-party consent for private conversations.'
  },
  'RI': {
    name: 'Rhode Island',
    bounds: { minLat: 41.1, maxLat: 42.0, minLng: -71.9, maxLng: -71.1 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'SC': {
    name: 'South Carolina',
    bounds: { minLat: 32.0, maxLat: 35.2, minLng: -83.4, maxLng: -78.5 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public spaces.'
  },
  'SD': {
    name: 'South Dakota',
    bounds: { minLat: 42.5, maxLat: 45.9, minLng: -104.1, maxLng: -96.4 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public spaces.'
  },
  'TN': {
    name: 'Tennessee',
    bounds: { minLat: 35.0, maxLat: 36.7, minLng: -90.3, maxLng: -81.6 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'TX': {
    name: 'Texas',
    bounds: { minLat: 25.8, maxLat: 36.5, minLng: -106.6, maxLng: -93.5 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'UT': {
    name: 'Utah',
    bounds: { minLat: 37.0, maxLat: 42.0, minLng: -114.1, maxLng: -109.0 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'VT': {
    name: 'Vermont',
    bounds: { minLat: 42.7, maxLat: 45.0, minLng: -73.4, maxLng: -71.5 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'VA': {
    name: 'Virginia',
    bounds: { minLat: 36.5, maxLat: 39.5, minLng: -83.7, maxLng: -75.2 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public spaces.'
  },
  'WA': {
    name: 'Washington',
    bounds: { minLat: 45.5, maxLat: 49.0, minLng: -124.8, maxLng: -116.9 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public. Two-party consent for private conversations.'
  },
  'WV': {
    name: 'West Virginia',
    bounds: { minLat: 37.2, maxLat: 40.6, minLng: -82.6, maxLng: -77.7 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'WI': {
    name: 'Wisconsin',
    bounds: { minLat: 42.5, maxLat: 47.1, minLng: -92.9, maxLng: -86.2 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'WY': {
    name: 'Wyoming',
    bounds: { minLat: 41.0, maxLat: 45.0, minLng: -111.1, maxLng: -104.0 },
    stopAndIdentify: true,
    recordingLegal: true,
    notes: 'Stop and identify state. Recording is legal in public.'
  },
  'DC': {
    name: 'District of Columbia',
    bounds: { minLat: 38.8, maxLat: 39.0, minLng: -77.1, maxLng: -76.9 },
    stopAndIdentify: false,
    recordingLegal: true,
    notes: 'Recording is legal in public spaces.'
  }
}

/**
 * Get state information from coordinates
 * @param {number} latitude 
 * @param {number} longitude 
 * @returns {Object|null} State information or null if not found
 */
export const getStateFromCoordinates = (latitude, longitude) => {
  for (const [stateCode, stateInfo] of Object.entries(US_STATES)) {
    const { bounds } = stateInfo
    if (latitude >= bounds.minLat && latitude <= bounds.maxLat &&
        longitude >= bounds.minLng && longitude <= bounds.maxLng) {
      return {
        code: stateCode,
        ...stateInfo
      }
    }
  }
  return null
}

/**
 * Get state-specific legal information
 * @param {string} stateCode 
 * @returns {Object|null} Legal information for the state
 */
export const getStateLegalInfo = (stateCode) => {
  const state = US_STATES[stateCode]
  if (!state) return null
  
  return {
    name: state.name,
    stopAndIdentify: state.stopAndIdentify,
    recordingLegal: state.recordingLegal,
    notes: state.notes
  }
}
