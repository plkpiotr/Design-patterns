import { Chair } from './chair.interface';

export class RetroChair implements Chair {
  public showOffer(): string {
    return 'retro chair itself costs $199';
  }
}
