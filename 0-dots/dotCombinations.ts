export function dotCombinations(input: string): string[] {
  if (typeof input !== 'string') throw new TypeError('input must be a string');
  const n = input.length;
  if (n === 0) return [''];
  const slots = n - 1;
  const total = 1 << slots;
  const res: string[] = [];
  for (let mask = 0; mask < total; mask++) {
    let out = '';
    for (let i = 0; i < n; i++) {
      out += input[i];
      if (i < n - 1 && (mask & (1 << i))) out += '.';
    }
    res.push(out);
  }
  return res;
}

export default dotCombinations;
