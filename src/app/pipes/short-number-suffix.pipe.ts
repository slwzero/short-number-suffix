import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumberSuffix'
})
export class ShortNumberSuffixPipe implements PipeTransform {

  transform(value: any, args: number = 0): any {
    let exp;
    const suffixes = ['K', 'M', 'G', 'T', 'P', 'E'];
    if (Number.isNaN(value)) {
      return null;
    }
    if (value < 1000) {
      return value;
    }
    exp = Math.floor(Math.log(value) / Math.log(1000));
    return (value / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];
  }

}
