export abstract class Discount {
  abstract calculate(price: number): number;
}

export class PercentageDiscount extends Discount {
  constructor(private readonly percentage: number) {
    super();
  }

  calculate(price: number): number {
    return price * (1 - this.percentage);
  }
}

export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
