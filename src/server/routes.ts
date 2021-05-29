import { Application } from 'express';
import { debuglog } from 'util';
import { BMICalculatorRoute } from '../bmicalculator/bmicalculator.route';
import { ExpressRoutesConfig } from '../express/express.routes.config';

export class Router {
  static routes: ExpressRoutesConfig[] = [];

  static init(app: Application) {
    debuglog('Registering routes & controllers ...');
    this.routes.push(new BMICalculatorRoute(app));
    this.routes.forEach((route: ExpressRoutesConfig) => {
      debuglog(`Routes initialized for ${route.getName()}`);
    });
  }
}
