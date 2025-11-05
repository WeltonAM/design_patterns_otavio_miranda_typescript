export abstract class Discount {
  protected discount: number = 0;

  calculate(price: number): number {
    return price * (1 - this.discount);
  }
}

export class PercentageDiscount extends Discount {
  constructor(percentage: number) {
    super();
    this.discount = percentage;
  }
}
