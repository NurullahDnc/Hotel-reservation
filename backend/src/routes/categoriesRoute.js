import  express  from "express";
import * as categoriesController from '../controllers/categoriesController.js'
 
const route = express.Router();

route.route("/create").post(categoriesController.createCategories)
route.route("/").get(categoriesController.getCategories)
  

export default route;