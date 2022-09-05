export const formatString = (string: string) => 
  string.toLowerCase().replace(/\s/g, '_');

export const isValidString = (string: string | null) =>
  string !== null && /[A-Za-z\d]/g.test(string)