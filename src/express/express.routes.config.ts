import { Application } from 'express';

export abstract class ExpressRoutesConfig {
  app: Application;
  routeName: string;

  constructor(app: Application, routeName: string) {
    this.app = app;
    this.routeName = routeName;
    this.configure();
  }

  getName() {
    return this.routeName;
  }

  abstract configure(): void;
}
