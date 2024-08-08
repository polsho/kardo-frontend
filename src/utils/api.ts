export const urlApi = "http://51.250.32.67:8080";

export default function checkResponse<T>(res: Response): Promise<T> {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((errorData) => {
    throw new Error(`Ошибка ${res.status}: ${errorData.message}`);
  });
}

export async function request<T>(endpoint: string, options: RequestInit = {}) {
  const res = await fetch(`${urlApi}${endpoint}`, options);
  return checkResponse<T>(res);
}