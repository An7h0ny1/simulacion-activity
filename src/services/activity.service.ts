import prisma from '../lib/prisma';

interface EventInput {
  userId: string;
  event: string;
  detail?: string;
  teamId?: string;
  simulationId?: string;
}

// Crea y guarda un nuevo evento de actividad en la base de datos.
// Recibe los datos del evento y los persiste mediante Prisma.
export const createActivityEvent = async ({ userId, event, detail, teamId, simulationId }: EventInput) => {
  return prisma.activityEvent.create({
    data: { userId, event, detail, teamId, simulationId },
  });
};

// Busca todos los eventos registrados por un usuario.
// Ordenados por timestamp descendente.
export const findEventsByUser = async (userId: string) => {
  return prisma.activityEvent.findMany({
    where: { userId },
    orderBy: { timestamp: 'desc' },
  });
};

// Busca todos los eventos asociados a un equipo.
export const findEventsByTeam = async (teamId: string) => {
  return prisma.activityEvent.findMany({
    where: { teamId },
    orderBy: { timestamp: 'desc' },
  });
};

// Busca todos los eventos relacionados con una simulación.
export const findEventsBySimulation = async (simulationId: string) => {
  return prisma.activityEvent.findMany({
    where: { simulationId },
    orderBy: { timestamp: 'desc' },
  });
};