import express from 'express';


const app = express();
app.use(express.json());

//app.use('/api/boxplot', boxPlotRoutes)


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log('Server running'))