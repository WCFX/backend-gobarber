import { Router } from 'express';

const AppointmentsRouter = Router();

AppointmentsRouter.post('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

export default AppointmentsRouter;
