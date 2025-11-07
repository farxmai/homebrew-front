export const rand = (n: number) => Math.floor(Math.random() * n) + 1;
export const uid = () => Math.random().toString(36).slice(2, 9);
