export const toSnakeCase = (string: string) =>
  string.toLowerCase().replace(/\s/g, '_');

export const reverseSnakeCase = (string: string) => {
  return string.replace(/_/g, " ");
}

export const formatCount = (count: number, singular: string, plural: string) => {
  const word = count === 1 ? singular : plural;
  return `${count} ${word}`;
}

export const getCountryCode = (countryName: string) => {
  // https://flagcdn.com/w80/${code}.png
  const countryCodeMap: Record<string, string> = {
    "American": "US", "British": "GB", "Canadian": "CA", "Chinese": "CN", "Croatian": "HR",
    "Dutch": "NL", "Egyptian": "EG", "Filipino": "PH", "French": "FR", "Greek": "GR",
    "Indian": "IN", "Irish": "IE", "Italian": "IT", "Jamaican": "JM", "Japanese": "JP",
    "Kenyan": "KE", "Malaysian": "MY", "Mexican": "MX", "Moroccan": "MA", "Polish": "PL",
    "Portuguese": "PT", "Russian": "RU", "Spanish": "ES", "Thai": "TH", "Tunisian": "TN",
    "Turkish": "TR", "Vietnamese": "VN",
  }
  return countryCodeMap[countryName];
}

export const splitSteps: (text: string) => Array<string> = (text) => {
  return text.split("\n");
}

export const isValidString = (string: string | null) =>
  string !== null && /[A-Za-z\d]/g.test(string)