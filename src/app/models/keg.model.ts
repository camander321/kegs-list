export class Keg {
  pints: number = 124;
  isEmpty: boolean = false;

  constructor(public name: string, public price: number, public abv: number) {}

  sellPint() {
    if (this.pints >= 1)
      this.pints -= 1;
    this.isEmpty = this.pints == 0;
  }
}
