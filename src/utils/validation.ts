export class Validation {
  static numbers = (str: string, decimals: number = 2) => {
    const index = str.indexOf('.') === -1 ? str.length : str.indexOf('.');
    return str.slice(0, index + decimals);
  };

  static quantity = (num: number) => {
    if (num < 1) return 1;

    return num;
  };

  static isEmpty = (value: string) => {
    return value.length ? '' : 'Поле не заполнено';
  };

  static isRepeat<T, K extends keyof T>(
    name: K,
    value: T[K],
    arr: T[] | T[],
  ): string {
    const result = arr.find((item) => item[name] === value);

    return result ? 'Повторяющееся значение' : '';
  }
}
