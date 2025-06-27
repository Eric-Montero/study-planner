import { useState } from "react";
import axios from "axios";


export default function Home() {
  const [subjects, setSubjects] = useState([{ name: "", priority: "medium" }]);
  const [studyDays, setStudyDays] = useState(5);
  const [schedule, setSchedule] = useState(null);

  const handleSubjectChange = (index, field, value) => {
    const newSubjects = [...subjects];
    newSubjects[index][field] = value;
    setSubjects(newSubjects);
  };

  const addSubject = () => {
    setSubjects([...subjects, { name: "", priority: "medium" }]);
  };

  const generateSchedule = async () => {
    try {
      const res = await axios.post("http://localhost:8000/generate_schedule", {
        subjects,
        study_days: studyDays,
      });
      setSchedule(res.data);
    } catch (error) {
      console.error("Error al generar la rutina:", error);
    }
  };

  return (
    <main>
      <div className="card">
        <h1>
          <span role="img" aria-label="libro">📚</span> Generador de Rutina
        </h1>
        <span className="subtitle">
          Organiza tus materias y días de estudio fácilmente
        </span>

        <div className="input-group">
          <label>
            Días disponibles por semana:
          </label>
          <input
            type="number"
            value={studyDays}
            onChange={(e) => setStudyDays(parseInt(e.target.value))}
            min="1"
            max="7"
          />
        </div>

        <h2 className="section-title">Materias</h2>
        <div>
          {subjects.map((subject, index) => (
            <div key={index} className="input-group row">
              <input
                type="text"
                placeholder="Nombre de la materia"
                value={subject.name}
                onChange={(e) =>
                  handleSubjectChange(index, "name", e.target.value)
                }
              />
              <select
                value={subject.priority}
                onChange={(e) =>
                  handleSubjectChange(index, "priority", e.target.value)
                }
              >
                <option value="high">Alta</option>
                <option value="medium">Media</option>
                <option value="low">Baja</option>
              </select>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addSubject}
          className="button-link"
        >
          <span style={{ fontSize: "1.2rem" }}>➕</span> Agregar otra materia
        </button>

        <button
          type="button"
          onClick={generateSchedule}
          className="button"
        >
          📅 Generar Rutina
        </button>

        {schedule && (
          <div className="result-card">
            <h2 className="result-title">
              <span role="img" aria-label="calendario">🗓️</span> Rutina Generada
            </h2>
            <ul className="result-list">
              {Object.entries(schedule).map(([day, subjects]) => (
                <li key={day}>
                  <strong className="result-day">{day}:</strong>{" "}
                  {subjects.join(", ")}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}