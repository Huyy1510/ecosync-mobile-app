# EcoSync Mobile App

EcoSync is a cross-platform mobile app (iOS & Android) built with React Native, focused on tracking environmental impact and managing personal carbon emissions.

## Core Features
- **Offline-First Architecture**: Data is stored locally and intelligently synced with Supabase/Airtable when a network connection is available.
- **Carbon Impact Dashboard**: Displays real-time carbon savings metrics.
- **Activity Logging**: Records daily eco-friendly activities.
- **Environmental Tips**: Integrates weather and environmental-impact APIs to provide personalized recommendations.

## Tech Stack
- **Framework**: React Native (0.7x)
- **State Management**: Redux Toolkit / Zustand (with persistence support for offline-first)
- **Database/Backend**: Supabase / Airtable
- **UI Library**: React Native Paper / Tailwind CSS (NativeWind)
- **CI/CD & Monitoring**: GitHub Actions & Slack Notifications

## Performance Rules
This project strictly follows the **Mobile App Builder Agent** standards:
1. **Startup Time**: < 3 seconds.
2. **Crash-free Rate**: > 99.5%.
3. **Memory Usage**: Always kept under 100MB for core tasks.
4. **Battery Optimization**: Optimize API calls and background processes.

## Project Structure
```text
src/
 ├── assets/          # Images, fonts, icons
 ├── components/      # Shared UI components (Atom/Molecule)
 ├── database/        # Offline-sync & local storage configuration
 ├── hooks/           # Custom hooks for business logic
 ├── navigation/      # React Navigation setup (Stack/Tabs)
 ├── services/        # API calls & integrations with a headless CMS
 └── screens/         # Main screens (Dashboard, Activity, Profile)
```
