# Dashboard App

## Overview
This is a simple dashboard application built with Next.js (latest stable version) and Tailwind CSS. It features Google OAuth authentication using NextAuth.js, protected routes, and a pizza orders page displaying mock data in a responsive table.

## Features
- Google OAuth sign-in and sign-out
- Protected dashboard page with personalized welcome message
- Protected pizza orders page with mock data table and status badges
- Responsive UI with Tailwind CSS
- Navigation bar with links and logout button

## Setup and Running Locally

### Prerequisites
- Node.js (v16 or later)
- npm

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd dashboard-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the root of the project with the following environment variables:
   ```
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   NEXTAUTH_SECRET=your-nextauth-secret
   ```

   - To obtain Google OAuth credentials, create a project in the [Google Cloud Console](https://console.cloud.google.com/), enable OAuth consent screen, and create OAuth 2.0 Client IDs for Web application.
   - `NEXTAUTH_SECRET` can be any random string. You can generate one using `openssl rand -base64 32`.

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment
The app can be deployed on Vercel or Railway. Ensure environment variables are set in the deployment platform.

## Assumptions and Challenges
- No backend database is used; pizza orders are hardcoded mock data.
- Authentication is handled entirely by NextAuth.js with Google OAuth.
- Basic error handling and loading states are implemented.
- UI is designed to be clean and responsive using Tailwind CSS.

## Third-party Libraries
- Next.js
- NextAuth.js
- Tailwind CSS
# FoundryAI
