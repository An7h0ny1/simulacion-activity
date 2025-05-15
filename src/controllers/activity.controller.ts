import { Request, Response, NextFunction } from 'express';
import { 
  createActivityEvent, 
  findEventsByUser,
  findEventsByTeam,
  findEventsBySimulation 
} from '../services/activity.service';

// Crea un nuevo evento de actividad (login, joinMeet, etc.)
// Requiere: userId, event, detail, teamId, simulationId en el body.
// Devuelve: el evento creado.
export const createEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, event, detail, teamId, simulationId } = req.body;
    const newEvent = await createActivityEvent({ userId, event, detail, teamId, simulationId });
    res.status(201).json(newEvent);
  } catch (err) {
    next(err);
  }
};

// Obtiene todos los eventos registrados por un usuario específico.
// Parámetro: userId (en la URL).
export const getEventsByUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.userId;
    const events = await findEventsByUser(userId);
    res.json(events);
  } catch (err) {
    next(err);
  }
};

// Obtiene todos los eventos asociados a un equipo.
// Parámetro: teamId (en la URL).
export const getEventsByTeam = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const events = await findEventsByTeam(req.params.teamId);
    res.json(events);
  } catch (err) {
    next(err);
  }
};


// Obtiene todos los eventos relacionados a una simulación.
// Parámetro: simulationId (en la URL).
export const getEventsBySimulation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const events = await findEventsBySimulation(req.params.simulationId);
    res.json(events);
  } catch (err) {
    next(err);
  }
};