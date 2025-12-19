# Backend - FastAPI Application

## Setup

1. Create virtual environment:
```bash
python -m venv venv
```

2. Activate virtual environment:
```bash
# Windows
.\venv\Scripts\activate

# Unix/MacOS
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create `.env` file from `.env.example` and update with your PostgreSQL credentials:
```bash
cp .env.example .env
```

5. Run the application:
```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

## API Documentation

- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Project Structure

- `models/` - SQLAlchemy database models
- `routes/` - API route handlers
- `schemas/` - Pydantic schemas for request/response validation
- `database.py` - Database configuration
- `main.py` - FastAPI application entry point
