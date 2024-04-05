import  express  from "express";
import * as GalleryController from '../controllers/galleryController.js'
 
const route = express.Router();

route.route("/create").post(GalleryController.createGallery)
route.route("/").get(GalleryController.getGallery)
route.route("/:id").delete(GalleryController.galleryDelete)
route.route("/update/:id").put(GalleryController.updateGallery)


export default route;