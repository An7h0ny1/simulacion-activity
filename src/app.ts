import express from 'express';
import activityRoutes from './routes/activity.routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
app.use(express.json());

app.use('/api/activities', activityRoutes);

app.use(errorHandler);

export default app;

