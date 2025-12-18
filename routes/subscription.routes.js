import { Router } from "express";

const subscriptionRouter  = Router();

 subscriptionRouter.get('/', (req, res) => res.send({ title: "Create new Subscription" }));

 export default subscriptionRouter;