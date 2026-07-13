# Ironvest

Ironvest is a premium investment platform designed to embody security, strength, and modern financial management. The application features a high-end, industrial UI aesthetic with a robust backend architecture, providing users with a secure and visually striking environment for their financial activities.

## Tech Stack

The project is structured as a monorepo utilizing `pnpm` and is divided into a frontend and a backend application.

### Frontend
- **Framework**: React with Vite
- **Styling**: TailwindCSS (Industrial, glassmorphic aesthetic)
- **State Management**: Zustand
- **Validation**: Zod
- **Routing**: React Router DOM
- **Icons**: Lucide React

### Backend
- **Framework**: NestJS
- **Database ORM**: Prisma 7
- **Database Driver**: pg adapter for PostgreSQL (Neon Serverless Postgres)
- **Authentication**: JWT & Passport

---

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/installation) (v10+ recommended)
- A PostgreSQL database (e.g., [Neon](https://neon.tech/))

---

## Installation & Setup

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd ironvest
   ```

2. **Install dependencies**:
   Run the following command in the root directory to install dependencies for both the frontend and backend:
   ```bash
   pnpm install
   ```

3. **Environment Variables Configuration**:
   You will need to set up environment variables for both the backend and frontend.

   - **Backend (`/backend/.env`)**:
     Create a `.env` file in the `backend` directory and provide the necessary variables (e.g., Database URL, JWT Secret).
     ```env
     # backend/.env example
     DATABASE_URL="postgresql://user:password@host:port/database?sslmode=require"
     JWT_SECRET="your_super_secret_key"
     ```

   - **Frontend (`/frontend/.env`)**:
     Create a `.env` file in the `frontend` directory if required by your API base URL configuration.

4. **Database Migration**:
   Navigate to the `backend` directory and run Prisma migrations to set up your database schema:
   ```bash
   cd backend
   npx prisma migrate dev
   # or, to push the schema without tracking migrations (e.g., during rapid prototyping):
   npx prisma db push
   ```

---

## Kickstart the Project (Development)

To run the project locally, you will need to start both the frontend and backend development servers. You can do this by running two separate terminal windows or tabs.

### Start the Backend
```bash
cd backend
pnpm run start:dev
```
The backend API should now be running (typically on `http://localhost:3000`).

### Start the Frontend
```bash
cd frontend
pnpm run dev
```
The frontend should now be running (typically on `http://localhost:5173`).

---

## Code Quality and Formatting

Both the frontend and backend are equipped with ESLint and Prettier for code quality and formatting. Husky and lint-staged are configured at the root to ensure code meets quality standards before committing.

- Format code across the project:
  ```bash
  pnpm --filter frontend exec prettier --write
  pnpm --filter backend exec prettier --write
  ```
