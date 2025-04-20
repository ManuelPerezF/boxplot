import express from 'express';
import boxRoutes from './src/routes/boxRoutes';


const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use('/api', boxRoutes)  

app.listen(PORT, () => console.log('Server running'))