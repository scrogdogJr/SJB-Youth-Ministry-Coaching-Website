# SJB Youth Ministry Coaching Website

Full-stack web application with FastAPI backend and React Bootstrap frontend.

## Project Structure

```
├── backend/                # FastAPI application
│   ├── models/            # SQLAlchemy database models
│   ├── routes/            # API route handlers
│   ├── schemas/           # Pydantic schemas
│   ├── venv/              # Python virtual environment
│   ├── database.py        # Database configuration
│   ├── main.py            # FastAPI application entry
│   └── requirements.txt   # Python dependencies
│
└── frontend/              # React application
    ├── src/
    │   ├── components/    # React components
    │   ├── styles/        # Custom CSS files
    │   ├── services/      # API service layer
    │   ├── App.js         # Main app component
    │   └── index.js       # App entry point
    └── package.json       # Node dependencies
```

## Quick Start

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Activate virtual environment:
```bash
# Windows
.\venv\Scripts\activate

# Unix/MacOS
source venv/bin/activate
```

3. Create `.env` file from `.env.example` and configure PostgreSQL:
```bash
DATABASE_URL=postgresql://username:password@localhost:5432/dbname
```

4. Run the FastAPI server:
```bash
uvicorn main:app --reload
```

API will be available at `http://localhost:8000`
- Swagger docs: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies (if not already done):
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

Application will open at `http://localhost:3000`

## Technologies Used

### Backend
- **FastAPI** - Modern Python web framework
- **SQLAlchemy** - ORM for database operations
- **PostgreSQL** - Database
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server

### Frontend
- **React** - JavaScript library for UI
- **React Bootstrap** - Bootstrap components for React
- **Bootstrap 5** - CSS framework
- **Custom CSS** - Additional styling

## API Endpoints

### Users
- `GET /api/users/` - Get all users
- `GET /api/users/{id}` - Get user by ID
- `POST /api/users/` - Create new user
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user

## Development Notes

- Backend runs on port 8000
- Frontend runs on port 3000
- CORS is configured to allow requests from localhost:3000
- Models, routes, and schemas are separated into different folders for better organization
- Custom CSS files are available in `frontend/src/styles/`

## Next Steps

1. Set up PostgreSQL database
2. Configure `.env` file with database credentials
3. Run database migrations (if needed)
4. Customize the models, routes, and schemas for your specific needs
5. Add authentication and authorization
6. Deploy to production

## License

All rights reserved.
