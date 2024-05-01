import app from '../app';
import pingRouter from '../routes/ping';

app.use('/ping', pingRouter);

export default app;