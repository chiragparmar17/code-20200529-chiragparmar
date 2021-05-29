import { Application, Request, Response } from 'express';
import { ExpressRoutesConfig } from '../express/express.routes.config';
import { countOverweightResults, fetchAndUpsertResults } from './controller/bmicalculator.controller';

export class BMICalculatorRoute extends ExpressRoutesConfig {
  routeName: string = 'bmi-calculator';

  constructor(app: Application) {
    super(app, '/bmi-calculator');
  }

  configure() {
    this.app.get(`${this.routeName}/`, async (req: Request, res: Response) => {
      try {
        await fetchAndUpsertResults();
        const count = await countOverweightResults();
        res.json({ result: `Total number of overweight person(s) are ${count}.` });
      } catch (err) {
        res.status(500).json(err);
      }
    });
  }
}
