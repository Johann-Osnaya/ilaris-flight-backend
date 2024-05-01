import app from "../app";
import diaryRouter from '../routes/diaries';
app.use('/api/diaries', diaryRouter);

export default app;