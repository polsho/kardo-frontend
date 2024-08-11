export const validateEmail = (email: string): string |null => {
  let regexp = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);

  return regexp.test(email) ? null : "Неверно указана почта"
}

export const validatePassword = (password: string): string|null => {
  let regexp = new RegExp(/^(?=.*\d)\w{4,}$/g);

  return regexp.test(password) ? null : "Пароль должен содержать не менее 6 символов"
}