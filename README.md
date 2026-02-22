🔱 Trinetra
Remote Interview Platform

Trinetra is a modern remote interview platform designed to conduct technical interviews with real-time video calls, scheduling, recordings, and a clean dashboard experience. It focuses on simplicity, speed, and a smooth interviewer–candidate workflow.

This project is built with Next.js App Router and integrates real-time communication, authentication, and a backend-as-a-service setup.

✨ Features

🎥 Instant Video Calls
Start or join interview calls using unique meeting links.

📅 Interview Scheduling
Schedule interviews in advance with a simple UI.

📼 Call Recordings
View and manage past interview recordings.

🔐 Authentication & User Management
Secure sign-in and user sessions using Clerk.

🧠 Role-based Access
Different experiences for interviewers and candidates.

🌗 Dark / Light Mode
Theme toggle for better usability.

⚡ Fast & Modern UI
Built with Tailwind CSS and optimized Next.js layouts.

🧱 Tech Stack

Frontend:
Next.js 14 (App Router), React, TypeScript

Styling:
Tailwind CSS, Shadcn UI

Authentication:
Clerk

Video & Calls:
Stream Video SDK

Backend / Database:
Convex

Deployment:
Vercel

📁 Project Structure (Simplified)
src/
├── app/
│   ├── (root)/
│   │   ├── (home)/
│   │   ├── meetings/[id]/
│   │   ├── schedule/
│   │   ├── recordings/
│   │   └── layout.tsx
│   │
│   ├── (admin)/
│   │   └── dashboard/
│   │
│   └── layout.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── MeetingRoom.tsx
│   ├── MeetingSetup.tsx
│   └── ui/
│
├── hooks/
│   ├── useMeetingActions.ts
│   ├── useGetCalls.ts
│   └── useUserRole.ts
│
├── middleware.ts
└── lib/
🚀 Getting Started (Local Setup)
1️⃣ Clone the repository
git clone https://github.com/deepakpandit31/remote-interview-platform.git
cd remote-interview-platform
2️⃣ Install dependencies
npm install
3️⃣ Set up environment variables

Create a .env.local file and add:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=

CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
4️⃣ Run the development server
npm run dev

Open:
👉 http://localhost:3000

🌍 Deployment

The project is deployed on Vercel.

Key points:

Uses the main branch for production

Requires environment variables to be set in Vercel Project Settings

Middleware runs on the Edge runtime (Clerk configuration is required)

🎯 Why Trinetra?

Most interview platforms are either too complex or too limited.
Trinetra focuses on:

minimal setup for interviewers

fast access to calls

clean separation of concerns in code

real-world production patterns

This project was built as a hands-on learning experience and a production-ready showcase.

🧑‍💻 Author

Deepak Sikhwal
B.Tech CSE Student
Frontend & Full Stack Developer

GitHub: https://github.com/deepakpandit31

📌 Future Improvements

🚨 Tab Switch Detection
Detect when a candidate switches browser tabs during an interview and notify the interviewer in real time to help maintain interview integrity.

📅 Calendar Integrations
Sync interviews with Google Calendar or Outlook for better scheduling.

📊 Admin Analytics Dashboard
Insights into interview duration, interviewer activity, and hiring trends.

🔔 Real-time Interview Alerts
Notifications for join/leave events, connection drops, or suspicious behavior.
