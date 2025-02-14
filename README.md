# Country Information Mobile Application

[![Appetize Demo](https://img.shields.io/badge/Live%20Demo-Try%20on%20Appetize.io-blue?logo=android)](YOUR_APPETIZE_DEMO_LINK)
[![Figma Design](https://img.shields.io/badge/UI%20Design-Figma%20Reference-purple?logo=figma)](YOUR_FIGMA_LINK)

A React Native application that displays comprehensive country information with theme customization, powered by CountryAPI.io.

<img src="./assets/screenshots/preview-light.png" width="200" alt="Light Theme"> <img src="./assets/screenshots/preview-dark.png" width="200" alt="Dark Theme">

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [API Setup](#api-setup)
- [Theme Customization](#theme-customization)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

### Country Browser

- 📋 Scrollable list of all countries
- 🔍 Search functionality with real-time filtering
- 🌐 Responsive grid layout for various screen sizes

### Detailed Country View

- 🏳️ High-resolution national flags
- 📊 Key details: Population, Capital, Country Code
- 🗺️ Geographical data: States/Provinces, Continent
- 🏛️ Leadership information (when available)

### Theme System

- 🌓 Light/Dark mode toggle
- 🎨 Consistent theme application across all components
- 💾 Persistent theme preference storage

### Deployment

- 🚀 One-click Appetize.io deployment
- 📱 Cross-platform compatibility (iOS/Android)
- 🔄 Automatic API caching

## Requirements

- Node.js v18.x+
- npm v9.x+ or yarn 1.22.x+
- Expo CLI v7.x+
- CountryAPI.io account (free tier)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/country-info-app.git
cd country-info-app
```

2. Install dependencies:

```bash
npm install --legacy-peer-deps
```

3. Create environment file:

```bash
echo "COUNTRY_API_KEY=your_api_key_here" > .env
```

4. Start development server:

```bash
npm start
```

## API Setup

- Visit [(https://countryAPI.io)] and sign up
- Get your API key from the dashboard
- Add to .env file:

## Deployment

1. Build production version
   ```bash
   eas build --platform android,ios --profile production
   ```
2. Deploy to Appetize.io:

   - Create account at appetize.io
   - Upload generated build files
   - Configure device settings:
   - Platform: Android/iOS
   - OS Version: Latest stable
   - Device Type: Phone/Table

3. https://appetize.io/app/YOUR_APP_ID

## Project structure
country_info_app/
├── app/
│ ├── details/[countryId].tsx
│ ├── layout.tsx
│ ├── +not-found.tsx
│ └── index.tsx
├── assets/
│ ├── fonts/
│ └── images/
├── components/
│ ├── ui/
│ ├── countries.tsx
│ ├── filter_modal.tsx
│ ├── loading_screen.tsx
│ ├── Navbar.tsx
│ ├── ThemedText.tsx
│ └── ThemedView.tsx
├── context/
│ ├── ApiContext.tsx
│ ├── ApiProvider.tsx
│ ├── ThemeContext.tsx
│ └── ThemeProvider.tsx
├── node_modules/
├── scripts/
│ └── reset-project.js
└── ....

## Contributing

1. Fork the repository
2. Create feature branch:

```bash
git checkout -b feat/new-feature
```

3. Commit changes:

```bash
git commit -m "feat: add new search filters"
```

4. Push to branch:

```bash
git push origin feat/new-feature
```

5. Open a Pull Request.


## Run the App
npx react-native run-ios
- **Android**:
  ```bash
  npx react-native run-android

- **ios**:
    ```bash
    npx react-native run-android

## Live Demos
Test the app on different platforms:
- **Android**: [Appetize Demo](https://appetize.io/embed/b_47tjzhcq3fdtacknevf37awf54)
- **iOS**: [Appetize Demo](https://appetize.io/embed/b_nw4riqhrkvzcqecirkuws3enwe)