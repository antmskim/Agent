# Columbus AI: Personalized AI-Powered Travel Buddy
Columbus AI is a virtual tour companion that crafts personalized walking routes based on your interests, whether you're into modern architecture, historical landmarks, or scenic views.

Built for SpurHacks 2025 

## Features

-  **Personalized Walking Tours**  
  Creates a tour using a graph of nearby landmarks, user preferences, and walking distances.

-  **AI Chat Assistant**  
  Gemini-powered virtual agent responds to questions about landmarks in real-time.

-  **Voice Interaction**  
  Integrated with ElevenLabs for realistic text-to-speech responses.

-  **3D Avatar Interface**  
  React Three Fiber renders a talking avatar that animates based on speech.

---

##  How It Works

1. **Landmark Graph**  
   - Nodes = landmarks  
   - Edges = estimated walking distances  
   - We use a variation of the **Knapsack algorithm** to find optimal paths based on interest and distance.

2. **AI Conversation**  
   - Gemini API generates contextual responses  
   - ElevenLabs converts those into speech

3. **Frontend Animation**  
   - React Three Fiber displays a 3D avatar  
   - Avatar animates while speaking using audio cues

---

##  Tech Stack

**Frontend**
- React + Vite
- React Three Fiber (R3F)
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- Gemini API (Google Generative AI)
- ElevenLabs API (Text-to-Speech)
- dotenv

---
## Demo 
Demo Video
https://youtu.be/2-zZhAjdDbs
## Getting Started

### Backend Setup

```bash
cd backend
npm install
node index.js
Update your .env file with:

init
Copy
Edit
GEMINI_API_KEY=your_key
ELEVENLABS_API_KEY=your_key
VOICE_ID=your_voice_id
Frontend Setup
bash
Copy
Edit
cd frontend
yarn install
yarn dev

Project Structure
bash
Copy
Edit
/backend
  index.js
  .env
  /audios
  /node_modules

/frontend
  App.jsx
  Avatar.jsx
  api.js
  ...
