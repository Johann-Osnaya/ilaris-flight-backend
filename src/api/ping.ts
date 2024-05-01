import app from '../app';
import pingRoute from '../routes/ping';

app.use('/ping', pingRoute);

export default app;