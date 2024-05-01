import app from '../app';
import pingRouter from '../routes/ping';

app.use('/api/ping', pingRouter);

export default app;