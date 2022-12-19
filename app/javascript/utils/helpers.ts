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
