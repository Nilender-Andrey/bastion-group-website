export class Validation {
  static numbers = (str: string, decimals: number = 2) => {
    const index = str.indexOf('.') === -1 ? str.length : str.indexOf('.');
    return str.slice(0, index + decimals);
  };

  static quantity = (num: number) => {
    if (num < 1) return 1;

    return num;
  };
}
