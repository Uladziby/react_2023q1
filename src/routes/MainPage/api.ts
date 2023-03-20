/** @format */

export const base_url = "https://fakestoreapi.com/products";

export async function getAllProducts(limit: number) {
	let response;
	try {
		response = await fetch(!limit ? `${base_url}` : `${base_url}?limit=${limit}`);
		const data = await response.json();
		return data;
	} catch (error: any) {
		return error.message;
	}
}
