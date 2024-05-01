import app from '../app';

app.get('/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

export default app;