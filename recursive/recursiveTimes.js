//Recursive Replication
const replicate = (times, number) => {
  if (times <= 0) return [];
  return [number, ...replicate(times - 1, number)];
};
console.log(replicate(2, 8));
