import  express  from "express";
import * as UserController from '../controllers/userController.js'


const route = express.Router();

route.route("/register").post(UserController.createUser)
route.route("/login").post(UserController.loginUser)



export default route;