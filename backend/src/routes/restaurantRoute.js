import  express  from "express";
import * as RestaurantController from '../controllers/restaurantController.js'
 
const route = express.Router();

route.route("/create").post(RestaurantController.createRestaurant)
route.route("/").get(RestaurantController.getRestaurant)
route.route("/delete/:id").delete(RestaurantController.DeleteActivity)
route.route("/update/:id").put(RestaurantController.updateRestaurant)


  

export default route;