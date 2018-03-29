export class Keg {
  pints: number = 124;
  isEmpty: boolean = false;

  constructor(public name: string, public price: number, public abv: number) {}

  sellBeer(pints: string) {
    let pintsSold: number = parseInt(pints)
    if (this.pints >= pintsSold)
      this.pints -= pintsSold;
    this.isEmpty = this.pints == 0;
  }

  getPercent() {
    return Math.floor(this.pints/124*100) + '%';
  }

  static sortKegs(kegs:Keg[], by: string) {
    switch(by) {
    case 'priceAsc':
      return kegs.sort(comparePrice);
    case 'priceDesc':
      return kegs.sort(comparePrice).reverse();
    case 'abvAsc':
      return kegs.sort(compareAbv);
    case 'abvDesc':
      return kegs.sort(compareAbv).reverse();
    }

    function comparePrice(a,b) {
      if (a.price < b.price)
        return -1;
      if (a.price > b.price)
        return 1;
      return 0;
    }

    function compareAbv(a,b) {
      if (a.abv < b.abv)
        return -1;
      if (a.abv > b.abv)
        return 1;
      return 0;
    }
  }
}
