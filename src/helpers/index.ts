export const encryptPassword = (password: string): string => {
  return btoa(password);
};

export const decryptPassword = (encryptedPassword: string): string => {
  return atob(encryptedPassword);
};
