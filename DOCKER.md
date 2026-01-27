# Docker Setup Guide

## Prerequisites
- Docker Desktop installed and running
- Docker Compose installed (included with Docker Desktop)

## Getting Started

### 1. Build and Start All Services
```bash
docker-compose up --build
```

This will start:
- PostgreSQL database on port 5432
- FastAPI backend on port 8000
- React frontend on port 3000

### 2. Run in Detached Mode
```bash
docker-compose up -d
```

### 3. Stop All Services
```bash
docker-compose down
```

### 4. Stop and Remove Volumes (removes database data)
```bash
docker-compose down -v
```

## Accessing the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **Database**: localhost:5432
  - Database: `sjb_youth_ministry`
  - User: `postgres`
  - Password: `postgres`

## Development Workflow

The backend is configured with hot-reload, so changes to Python files will automatically restart the server.

For frontend changes in development, you can modify the docker-compose.yml to use a development server instead of the production build.

## Useful Commands

### View logs
```bash
docker-compose logs -f
```

### View logs for specific service
```bash
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f db
```

### Rebuild a specific service
```bash
docker-compose up --build backend
```

### Access backend container shell
```bash
docker exec -it sjb_backend bash
```

### Access database
```bash
docker exec -it sjb_database psql -U postgres -d sjb_youth_ministry
```

## Environment Variables

To customize database credentials, create a `.env` file in the root directory:

```env
POSTGRES_DB=sjb_youth_ministry
POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
```

Then update the docker-compose.yml to use these variables.
