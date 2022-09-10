import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pund'
})
export class PundPipe implements PipeTransform {
  private _types = {'kg': 1};
  private _poundPerGram: number = 0.10;

  transform(value: number, type: string, decimals: number): string {
    let grams = this.getGrams(value, type),
      pounds = grams * this._poundPerGram;
  return `${pounds.toFixed(1)} kg`;
  }

  getGrams(value: number, type: string): number {
    let conversion = this._types[type];
    if (conversion == null) {
      throw new Error('Could not find type');
    } else {
      return value * conversion;
    }
  }

}
