import express from 'express';
const router = express.Router();

router.get('/', (_req, res) => {
    console.log('someone pinged here');
    res.send('<h1>Pong</h1>');
});

export default router;