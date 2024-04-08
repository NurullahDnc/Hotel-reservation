import  express  from "express";
import * as ActivityController from '../controllers/ActivityController.js'
 
const route = express.Router();

route.route("/create").post(ActivityController.createActivity)
route.route("/").get(ActivityController.getActivity)
route.route("/delete/:id").delete(ActivityController.DeleteActivity)
route.route("/update/:id").put(ActivityController.updateActivity)


  

export default route;