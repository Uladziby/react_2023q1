/** @format */

export const base_url = "https://fakestoreapi.com/";

export async function getAllProducts() {
  let response;
  try {
    response = await fetch(`${base_url}?limit=${10}`);
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error);
      return Promise.reject(error.message);
    }
  }
}
