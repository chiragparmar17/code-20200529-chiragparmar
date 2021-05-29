import { Application, Request, Response } from 'express';
import { ExpressRoutesConfig } from '../express/express.routes.config';
import { fetchAndInsertResults, fetchOverweightResults } from './controller/bmicalculator.controller';

export class BMICalculatorRoute extends ExpressRoutesConfig {
  routeName: string = 'bmi-calculator';

  constructor(app: Application) {
    super(app, '/bmi-calculator');
  }

  configure() {
    this.app.get(`${this.routeName}/`, async (req: Request, res: Response) => {
      try {
        const results = await fetchOverweightResults();
        res.json(results);
      } catch (err) {
        res.status(500).json(err);
      }
    });
  }
}
