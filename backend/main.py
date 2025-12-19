from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
from routes import user_routes

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="SJB Youth Ministry Coaching API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(user_routes.router, prefix="/api/users", tags=["users"])

@app.get("/")
async def root():
    return {"message": "Welcome to SJB Youth Ministry Coaching API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
