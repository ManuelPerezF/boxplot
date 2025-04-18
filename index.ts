import express from 'express';
import boxRoutes from './src/routes/boxRoutes';


const app = express();
app.use(express.json());

//app.use('/api', boxRoutes)


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log('Server running'))