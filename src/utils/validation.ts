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

  static email = (value: string) => {
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(value).toLowerCase(),
      )
    ) {
      return '';
    } else {
      return 'Не корректный Email';
    }
  };

  static phone = (value: string) => {
    return value.length ? '' : 'Не корректный Email';
  };

  static minLength = (value: string, minLength = 2) => {
    return value.length < minLength ? `Минимум ${minLength} символа` : '';
  };
  static maxLength = (value: string, minLength = 35) => {
    return value.length > minLength ? `Максимум ${minLength} символов` : '';
  };
}
