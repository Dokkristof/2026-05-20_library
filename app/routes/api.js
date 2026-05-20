import Router from 'express'
const router = Router()

import AuthController from '../controllers/authController.js';
import UserController from '../controllers/userController.js';
import verifyToken from '../middleware/authjwt.js';
import BooksController from '../controllers/booksController.js';
import PatronsController from '../controllers/patronsController.js';
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)
router.get('/users/:id', [verifyToken], UserController.show)
router.put('/users/:id/password', [verifyToken], UserController.updatePassword)
router.delete('/users/:id', [verifyToken], UserController.destroy)

router.get('/books', BooksController.index);
router.get('/books/:id', BooksController.show);
router.post('/books', BooksController.store);
router.put('/books/:id', BooksController.update);
router.delete('/books/:id', BooksController.destroy);

router.get('/patrons', PatronsController.index);
router.get('/patrons/:id', PatronsController.show);
router.post('/patrons', PatronsController.store);
router.put('/patrons/:id', PatronsController.update);
router.delete('/patrons/:id', PatronsController.destroy);

export default router
