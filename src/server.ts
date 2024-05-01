import app from './app';

console.log('This is the entry');

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});