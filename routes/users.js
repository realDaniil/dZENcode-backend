import { Router } from 'express';
import { deleteAllUsers, getUser, getUsers, updateUser } from '../controllers/users.js';

const router = Router();

router.get('/user', getUser);
router.get('/users', getUsers);
router.delete('/users', deleteAllUsers);

router.put('/user', updateUser);

export default router;
