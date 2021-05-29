import { Application, Request, Response } from 'express';
import { ExpressRoutesConfig } from '../express/express.routes.config';
import { getBMIResults } from './controller/bmicalculator.controller';

export class BMICalculatorRoute extends ExpressRoutesConfig {
  routeName: string = 'bmi-calculator';

  constructor(app: Application) {
    super(app, '/bmi-calculator');
  }

  configure() {
    this.app.get(`${this.routeName}/`, (req: Request, res: Response) => {
      const bmiResults = getBMIResults();
      res.json(bmiResults);
    });
  }
}
