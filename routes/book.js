import express from "express"
import createBook from "../controllers/create.js"
import getAllController from '../controllers/get_all.js'
import destroyController from "../controllers/destroy.js"

const { get_all } = getAllController
const { destroy } = destroyController

let router = express.Router();

router.post('/create', createBook);
router.get('/', get_all)
router.delete("/delete/:id", destroy)

export default router