import  express  from "express";
import * as RoomController from '../controllers/roomController.js'
 
const route = express.Router();

route.route("/create").post(RoomController.createRoom)
route.route("/").get(RoomController.getRoom)

route.route("/delete/:id").post(RoomController.deleteRoom)
route.route("/update/:id").put(RoomController.updateRoom)



 



 


export default route;