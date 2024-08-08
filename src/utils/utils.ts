export const validateEmail = (email: string): string |null => {
  let regexp = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);

  return regexp.test(email) ? null : "Неверно указана почта"
}

export const validatePassword = (password: string): string|null => {
  let regexp = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm);

  return regexp.test(password) ? null : "Неверный тип пароля"
}