export const encryptPassword = (password: string): string => {
  return btoa(password);
};

export const decryptPassword = (encryptedPassword: string): string => {
  return atob(encryptedPassword);
};

export const shortenText = (text: string, n: number): string => {
  if (text.length > n) {
    const shortenedText = text.substring(0, n).concat("...");
    return shortenedText;
  }
  return text;
};
