export class Validation {
  static numbers = (str: string, decimals: number = 3) => {
    str = Math.abs(+str).toString();

    const index = str.indexOf('.') === -1 ? str.length : str.indexOf('.');
    return str.slice(0, index + decimals);
  };

  static quantity = (num: number) => {
    if (num < 1) return 1;

    return Math.round(num);
  };

  static isEmpty = (value: string) => {
    return value.length ? '' : 'Поле не заполнено';
  };

  static isRepeat<T, K extends keyof T>(
    name: K,
    value: T[K],
    arr: T[],
  ): string {
    const result = arr.find((item) => item[name] === value);

    return result ? 'Повторяющееся значение' : '';
  }
}
