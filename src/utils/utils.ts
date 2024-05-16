export const toSnakeCase = (string: string) =>
  string.toLowerCase().replace(/\s/g, '_');

export const reverseSnakeCase = (string: string) => {
  return string.replace(/_/g, " ");
}

export const formatCount = (count: number, singular: string, plural: string) => {
  const word = count === 1 ? singular : plural;
  return `${count} ${word}`;
}

export const isValidString = (string: string | null) =>
  string !== null && /[A-Za-z\d]/g.test(string)