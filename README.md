# Pocket Advocate

**Your rights, your voice, instantly accessible.**

A mobile-first web application providing instant, rights-based guidance and documentation tools for interactions with law enforcement.

## 🚀 Features

### ✅ Core Features (Fully Implemented)

1. **On-Demand Rights Information**
   - Instant access to constitutional rights
   - State-specific legal information
   - Scenario-based guidance (traffic stops, street encounters, home visits, arrests)
   - Comprehensive coverage of all 50 US states + DC

2. **Legal Scripting & Translation**
   - Pre-written, legally sound scripts
   - English and Spanish language support
   - Scenario-specific responses
   - AI-powered script generation (with OpenAI integration)

3. **Interaction Logging**
   - Quick-access logging with timestamp and location
   - Detailed form for comprehensive documentation
   - Local storage with offline capability
   - Automatic location detection and state mapping

4. **Shareable Case Summaries**
   - AI-generated professional summaries
   - PDF export functionality
   - Copy to clipboard and native sharing
   - Structured format suitable for legal counsel

### 🔧 Technical Features

- **Progressive Web App (PWA)** - Installable on mobile devices
- **Offline Capability** - Service worker for offline access
- **Responsive Design** - Mobile-first, works on all screen sizes
- **State-Specific Information** - Comprehensive US state mapping
- **AI Integration** - OpenAI GPT for intelligent content generation
- **PDF Export** - Professional document generation
- **Geolocation** - Automatic location detection for state-specific rights

## 🛠 Technology Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS with custom design system
- **AI**: OpenAI GPT-3.5-turbo
- **PDF Generation**: jsPDF
- **PWA**: Service Worker, Web App Manifest
- **State Management**: React Context API
- **Storage**: localStorage (with IndexedDB ready for future)

## 📱 Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/vistara-apps/this-is-a-5266.git
   cd this-is-a-5266
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env and add your OpenAI API key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

### Environment Variables

Create a `.env` file with the following variables:

```env
# OpenAI API Configuration (optional - app works without it)
VITE_OPENAI_API_KEY=your_openai_api_key_here

# Application Configuration
VITE_APP_NAME=Pocket Advocate
VITE_APP_VERSION=1.0.0

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_OFFLINE_MODE=true

# Development Configuration
VITE_DEBUG_MODE=false
```

## 🏗 Architecture

### Project Structure
```
src/
├── components/          # React components
│   ├── AppHeader.jsx   # Main navigation header
│   ├── Dashboard.jsx   # Main dashboard view
│   ├── RightsInfo.jsx  # Rights information display
│   ├── LegalScripting.jsx # Legal scripts interface
│   ├── InteractionLogger.jsx # Interaction logging form
│   ├── CaseSummary.jsx # Summary generation and export
│   └── ...
├── contexts/           # React Context providers
│   ├── LocationContext.jsx # Geolocation and state detection
│   └── InteractionContext.jsx # Interaction data management
├── services/           # External service integrations
│   ├── openai.js      # OpenAI API integration
│   └── pdfExport.js   # PDF generation utilities
├── data/              # Static data and mappings
│   └── stateMapping.js # US state boundaries and legal info
└── ...
```

### Design System

The app follows a consistent design system defined in `tailwind.config.js`:

- **Colors**: Purple/blue gradient theme with green accents
- **Typography**: Responsive text scales with clear hierarchy
- **Spacing**: Consistent spacing system (sm: 8px, md: 12px, lg: 20px)
- **Components**: Reusable Card, Button, and specialized components

## 🔒 Privacy & Security

- **Local Storage**: All interaction data stored locally on device
- **No Tracking**: No analytics or user tracking by default
- **API Security**: OpenAI API calls include safety measures
- **Offline First**: Core functionality works without internet

## 📋 User Flows

### 1. Know Your Rights Flow
1. User opens app and enables location
2. App detects state and shows state-specific rights
3. User selects scenario (traffic stop, etc.)
4. App displays relevant rights and warnings
5. User can export rights card as PDF

### 2. Interaction Logging Flow
1. User taps "Log Interaction" 
2. App pre-fills timestamp and location
3. User fills out interaction details
4. Data saved locally with encryption
5. User can generate summary later

### 3. Case Summary Flow
1. User selects logged interaction
2. App generates AI-powered summary
3. User can copy, share, or export as PDF
4. Summary includes legal disclaimers

## 🌐 Deployment

### Production Build
```bash
npm run build
npm run preview  # Test production build locally
```

### Docker Deployment
```bash
docker build -t pocket-advocate .
docker run -p 3000:3000 pocket-advocate
```

### Static Hosting
The built app can be deployed to any static hosting service:
- Vercel
- Netlify  
- GitHub Pages
- AWS S3 + CloudFront

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Build and test
npm run build
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 Legal Disclaimer

**IMPORTANT**: This application is for informational purposes only and does not constitute legal advice. The information provided should not be used as a substitute for professional legal counsel. Always consult with a qualified attorney for legal guidance regarding specific situations.

## 📞 Support

For support, feature requests, or bug reports, please open an issue on GitHub.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for civil rights and community safety**
