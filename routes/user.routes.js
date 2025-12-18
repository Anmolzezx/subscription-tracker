import { Router } from "express";   

const userRouter = Router();

userRouter.get('/', (req, res) => res.send({ title: "User Profile" }));
userRouter.get('/:id', (req, res) => res.send({title: `User Profile for ID: ${req.params.id}`}));
userRouter.post('/', (req, res) => res.send({ title: "Create new User" }));
userRouter.put('/:id', (req, res) => res.send({ title: `Update User with ID: ${req.params.id}` }));
userRouter.delete('/:id', (req, res) => res.send({ title: `Delete User with ID: ${req.params.id}` }));

export default userRouter;