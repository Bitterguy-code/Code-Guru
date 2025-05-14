# :computer: Code Guru Frontend
This is the frontend of the Code Guru platform, built with **React**, **Vite**, and styled using **Tailwind CSS**. It connects to a Django REST API backend and supports features like AI-driven daily challenges, newsletters, and a real-time coding playground.
---
## :atom_symbol: Tech Stack
- **React** (with Hooks)
- **Vite** (lightweight build tool)
- **Tailwind CSS** (utility-first styling)
- **React Router DOM** (routing)
- **html-react-parser** (for rendering JSX content from backend)
- **Monaco Editor** (VSCode-like code editor)
- **Axios or Fetch** for HTTP requests (assumed)
---
## :file_folder: Project Structure
```
frontend/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # ReactDOM render
│   ├── router.jsx               # App routes
│   ├── index.css                # Tailwind + global styles
│   ├── components/             # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── ChallengeCard.jsx
│   │   ├── PrivateRoute.jsx
│   │   ├── monacoEditor.jsx
│   ├── pages/                  # Route-based pages
│   │   ├── HomePage.jsx
│   │   ├── SignUpPage.jsx
│   │   ├── LogInPage.jsx
│   │   ├── ChallengeDailyPage.jsx
│   │   ├── ChallengeAnswerPage.jsx
│   │   ├── ChallengeProgressPage.jsx
│   │   ├── PlaygroundPage.jsx
│   │   ├── NewsletterPage.jsx
│   │   ├── NotFoundPage.jsx
│   └── utilities.jsx           # Shared helpers/util functions
```
---
## :compass: Routing
All routes are managed via `router.jsx` using **React Router**.
Example:
```jsx
<Route path="/challenge/daily" element={<ChallengeDailyPage />} />
```
Protected routes are wrapped using `PrivateRoute` component to ensure the user is authenticated.
---
## :brain: Key Features
### :small_orange_diamond: Daily Challenge Page
- Fetches and renders JSX content for a coding challenge
- Tailwind-styled JSX is parsed and displayed using `html-react-parser`
- Includes code submission form and language toggle
### :small_orange_diamond: Answer Evaluation
- User submits code
- Sends request to backend
- Displays feedback on whether the solution is correct (via OpenAI API)
### :small_orange_diamond: Newsletter Page
- Renders an AI-generated tech news report for a selected date
- Rich JSX layout rendered using Tailwind and `html-react-parser`
### :small_orange_diamond: Playground Page
- Monaco editor where users can input code
- Ask questions about code (e.g., "What does this function do?")
- AI returns JSX-styled explanation
---
## :art: Styling
- Uses **Tailwind CSS** for layout and component styling
- Responsive and mobile-friendly
- Utility classes for dynamic rendering from AI
---
## :test_tube: Development
```bash
# Install dependencies
npm install
# Start development server
npm run dev
# Build for production
npm run build
```
---
## :gear: Environment
Update `.env` as needed:
```
VITE_BACKEND_URL=http://127.0.0.1:8000
```
---
