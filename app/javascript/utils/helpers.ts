export const arrayElement = <T>(items: T[]): T => {
  return items[Math.floor(Math.random() * items.length)];
};

export const loremSentence = () => {
  return 'lorem';
};

export const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export const deepEqual = function (x: any, y: any) {
  if (x === y) {
    return true;
  } else if (typeof x == 'object' && x != null && typeof y == 'object' && y != null) {
    if (Object.keys(x).length != Object.keys(y).length) return false;

    for (const prop in x) {
      if (y[prop]) {
        if (!deepEqual(x[prop], y[prop])) return false;
      } else return false;
    }

    return true;
  } else return false;
};
