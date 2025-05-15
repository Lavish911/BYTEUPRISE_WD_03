# Time Tools by Lavish

A responsive web-based application with stopwatch and timer functionality, featuring sound alerts and keyboard shortcuts.

## 🌟 Features

### Stopwatch
- ⏱️ Accurate timer with hours, minutes, seconds, and tenths of seconds
- ▶️ Start, stop, pause, and resume functionality
- 🔄 Reset function to clear the stopwatch
- 📝 Lap recording to track intervals
- 🎮 Keyboard shortcuts: 
  - Space: Start/Stop
  - P: Pause/Resume
  - R: Reset
  - L: Record lap

### Timer
- ⏲️ Countdown timer with hours, minutes, and seconds
- 🔔 Sound alert when the timer reaches zero
- ⏯️ Start, pause, resume, and stop functionality
- 🔄 Reset function to clear the timer

### UI Features
- 🎨 Beautiful purple gradient design
- 🔄 Tabbed interface to switch between Stopwatch and Timer
- 📱 Fully responsive design that works on all devices
- 🔊 Sound effects for button clicks and timer completion

## 🚀 Running the Project in GitHub Codespaces

### Prerequisites
- GitHub account
- Internet connection

### Opening in Codespaces
1. Go to your GitHub repository containing this project
2. Click the green "Code" button
3. Select the "Codespaces" tab
4. Click "Create codespace on main"

### Running the Application
Once your Codespace is ready, follow these steps to run the application:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev
   ```

3. **Access the Application:**
   - The application will be available at the URL shown in the terminal (usually on port 5000)
   - Codespaces will provide a "Open in Browser" button or you can click on the "Ports" tab to access the running application

## 📋 Project Structure

```
project-root/
├── client/              # Frontend code
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions
│   │   ├── pages/       # Page components
│   │   ├── App.tsx      # Main application component
│   │   ├── index.css    # Global styles
│   │   └── main.tsx     # Entry point
│   └── index.html       # HTML template
├── server/              # Backend code
├── public/              # Static assets
│   └── sounds/          # Sound files
├── package.json         # Project dependencies
└── README.md            # This file
```

## 🔧 Development Notes

### Adding New Features
1. For new components, create files in the `client/src/components/` directory
2. For new pages, add them to `client/src/pages/` and update the router in `App.tsx`
3. Custom hooks should be placed in `client/src/hooks/`

### Modifying Styles
1. Global styles are in `client/src/index.css`
2. Component-specific styles use Tailwind CSS classes

## 📄 License
Copyright © 2025 Lavish - All Rights Reserved