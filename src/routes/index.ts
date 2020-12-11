import { Router } from 'express';
import AppointmentsRouter from './Appointments.routes';

const routes = Router();

routes.use('/appointments', AppointmentsRouter);

export default routes;
