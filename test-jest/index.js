export function sumar(a, b) {
  return a + b;
}

export function emailIsValid(email) {
  return /^[a-zA-Z0-9][^\s@]*@[^\s@]+\.[a-zA-Z]{2,}$/.test(email);
}

