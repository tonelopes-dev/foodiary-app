# Overview Documentation

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Foodiary is a React Native food diary app built with Expo. It uses expo-router for navigation with route groups for authentication (public/private routes), React Hook Form for form handling, Zod for validation, and NativeWind (Tailwind CSS) for styling.

## Key Technologies

- **Framework**: React Native with Expo (~53.0.22)
- **Navigation**: expo-router with protected routes using Stack.Protected
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Forms**: React Hook Form with Zod validation (@hookform/resolvers)
- **State Management**: TanStack React Query for server state and caching
- **Storage**: AsyncStorage for local data persistence
- **HTTP Client**: Axios with automatic token management
- **Fonts**: Host Grotesk font family with multiple weights
- **Icons**: Lucide React Native
- **Media**: expo-camera and expo-audio for meal capture
- **File System**: expo-file-system for file uploads

## Development Commands

```bash
# Start development server
npm start

# Run on specific platforms
npm run android
npm run ios
npm run web
```

## Architecture

### Authentication Flow

- Routes are protected using expo-router's `Stack.Protected` component
- `AuthContext` provides authentication state with real API integration
- Token-based authentication with automatic header management
- AsyncStorage for persistent token storage
- Private routes in `src/app/(private)/` require authentication
- Public routes in `src/app/(public)/` for signin/signup
- Automatic token refresh and user data fetching with React Query

### File Structure

- `src/app/` - Expo router pages with route groups
- `src/components/` - Reusable UI components
- `src/contexts/` - React contexts (AuthContext)
- `src/hooks/` - Custom hooks (useAuth)
- `src/styles/` - Global styles and color definitions
- `src/utils/` - Utility functions (cn for class merging)

### Key Components

- **SignUpSteps/**: Multi-step signup flow with form validation
- **AuthLayout**: Layout wrapper for authentication screens
- **Modal components**:
  - `AudioModal`: Voice recording with playback and upload functionality
  - `CameraModal`: Photo capture with preview and upload functionality
- **Meal components**:
  - `MealCard`: Individual meal display with status indicators
  - `MealsList`: Date-filtered meal list with pull-to-refresh
  - `CreateMealBottomBar`: Floating action bar for media capture
- **UI Components**: `Button`, `Input`, `Logo`, `DailyStats`, `DateSwitcher`

### State Management & Caching

- **React Query**: Server state management with automatic caching and synchronization
- **Query Keys**: Structured keys for efficient cache invalidation (e.g., `["meals", dateParam]`)
- **Stale Time**: Configurable cache duration (15s for meals, infinite for completed meals)
- **Auto Refetch**: Automatic data refetching on focus and after mutations
- **Optimistic Updates**: Immediate UI updates with background synchronization

### Form Handling

Forms use React Hook Form with Zod schemas for validation. The signup flow demonstrates this pattern with `signUpSchema.ts` defining form structure.

### Media Capture & Upload

- **Camera Integration**: expo-camera for photo capture with permission handling
- **Audio Recording**: expo-audio for voice recording with high-quality presets
- **File Upload**: expo-file-system for binary file uploads to AWS S3
- **Upload Flow**:
  1. Create meal endpoint returns presigned S3 URL
  2. File uploaded directly to S3 using PUT method
  3. Automatic cache invalidation after successful upload
- **Supported Formats**: JPEG images and M4A audio files

### Styling System

- Uses NativeWind with custom Tailwind config
- Custom font families defined in tailwind.config.js
- Color system in `src/styles/colors.ts`
- Utility function `cn()` for conditional class merging

## API Integration

- **Base URL**: AWS Lambda API Gateway endpoint
- **Authentication**: JWT token-based with automatic header injection
- **Endpoints**:
  - `POST /signin` - User authentication
  - `POST /signup` - User registration with profile data
  - `GET /me` - Current user profile and nutrition goals
  - `GET /meals` - List meals by date with pagination
  - `POST /meals` - Create meal and get S3 upload URL
  - `GET /meals/:id` - Get specific meal details with processing status
- **File Storage**: AWS S3 with presigned URLs for direct uploads

## Configuration Notes

- TypeScript with strict mode enabled
- Expo new architecture enabled
- Prettier plugin for Tailwind CSS class sorting
- No current test setup (no test scripts in package.json)
- No linting configuration in project root
