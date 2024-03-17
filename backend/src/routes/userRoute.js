import  express  from "express";
import * as UserController from '../controllers/userController.js'
import * as authMiddleware from '../helpers/middlewares/authMiddleware.js'

const route = express.Router();

route.route("/register").post( UserController.createUser)
route.route("/login").post(UserController.loginUser)



export default route;