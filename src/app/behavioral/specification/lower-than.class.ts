import { Spec } from './specs.class';

export class LessThan extends Spec {
  constructor(private value: number) {
    super();
  }

  public isSatisfiedBy(value: number): boolean {
    return value < this.value;
  }
}
