import  express  from "express";
import * as UserController from '../controllers/userController.js'
import * as dd from '../middlewares/authMiddleware.js'

const route = express.Router();

route.route("/register").post( UserController.createUser)
route.route("/login").post( dd.authenticateToken, UserController.loginUser)



export default route;