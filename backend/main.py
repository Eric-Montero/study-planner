from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

# CORS (permite que Next.js pueda hacer llamadas al backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Entrada esperada desde el frontend
class Subject(BaseModel):
    name: str
    priority: str  # "low", "medium", "high"

class ScheduleRequest(BaseModel):
    subjects: List[Subject]
    study_days: int  # por ejemplo, 5 días a la semana

@app.post("/generate_schedule")
def generate_schedule(data: ScheduleRequest) -> Dict:
    # Separar materias por prioridad
    high = [s.name for s in data.subjects if s.priority == "high"]
    medium = [s.name for s in data.subjects if s.priority == "medium"]
    low = [s.name for s in data.subjects if s.priority == "low"]

    # Crear estructura de días
    schedule = {f"Día {i+1}": [] for i in range(data.study_days)}

    # Función auxiliar para repartir materias
    def distribute(subjects, slots):
        random.shuffle(subjects)
        i = 0
        for subject in subjects:
            schedule[f"Día {i % slots + 1}"].append(subject)
            i += 1

    distribute(high, data.study_days)
    distribute(medium, data.study_days)
    distribute(low, data.study_days)

    return schedule
