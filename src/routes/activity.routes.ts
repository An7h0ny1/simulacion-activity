import { Router } from 'express';
import { 
    createEvent, 
    getEventsByUser,
    getEventsByTeam,
    getEventsBySimulation 

} from '../controllers/activity.controller';
import { validateRequest } from '../middlewares/validateRequest';
import { createActivitySchema } from '../schemas/activity.schema';

const router = Router();

// Ruta para registrar un nuevo evento de actividad
// Valida la estructura del body antes de ejecutar el controlador.
router.post(
  '/',
  validateRequest(createActivitySchema),
  createEvent
);      

// Ruta para consultar actividades por usuario
router.get('/user/:userId', getEventsByUser); 

// Ruta para consultar actividades por equipo
router.get('/team/:teamId', getEventsByTeam);

// Ruta para consultar actividades por simulación
router.get('/simulation/:simulationId', getEventsBySimulation); 

export default router;
