import  express  from "express";
import * as UserController from '../controllers/userController.js'
import * as authMiddleware from '../helpers/middlewares/authMiddleware.js'

const route = express.Router();

route.route("/register").post( UserController.createUser)
route.route("/login").post(UserController.loginUser)
route.route("/google").post(UserController.googleAuth)

route.route("/").get(UserController.getuser)

//authenticateToken, token dogrulaması yapıyor.
route.route("/profile").get(authMiddleware.authenticateToken, UserController.getInfo)




export default route;