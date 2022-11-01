import express from 'express';
import { Router } from 'express';
import AppController from './controller';

const app = express();
const router = Router();
const appController = AppController;

app.use(express.json());

router.get('/fizzbuzz', appController.fizzBuzz);
router.get('/fizz', appController.fizz);
router.get('/buzz', appController.buzz);
router.get('/other', appController.other);

export { app, router };
