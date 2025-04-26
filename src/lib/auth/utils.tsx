export type TokenType = {
  access: string;
  refresh: string;
};

// Auth token functions are not used in this project
export const getToken = () => null;
export const removeToken = () => {};
export const setToken = (_value: TokenType) => {};
