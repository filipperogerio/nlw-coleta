
import express, { request, response } from "express";
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';


const pointsContoller = new PointsController();
const itemsController = new ItemsController();

const routes = express.Router();

routes.get('/items', itemsController.index);

routes.get('/points/:id', pointsContoller.show);

routes.get('/points', pointsContoller.index);

routes.post('/points', pointsContoller.create);

export default routes;