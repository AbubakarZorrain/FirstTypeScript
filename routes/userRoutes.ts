import express from 'express'
import UserController from '../controllers/userController';
const userRoutes = express.Router();
const controller = new UserController();

userRoutes.get('/getUser',controller.getAllUsers)
userRoutes.post('/createUser',controller.createUser)
userRoutes.put('/updateUser',controller.updateUser)
class routes{
    routes = userRoutes
}

export default routes;