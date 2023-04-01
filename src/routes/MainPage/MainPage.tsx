/** @format */
import { ACard } from "../../components/ACard/ACard";
import { ICard } from "../../components/ACard/type";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { StyledContainer } from "./MainPage.styles";
import { getAllProducts } from "./api";
import { useEffect, useState } from "react";

export const MainPage = () => {
	const [products, setProducts] = useState<ICard[]>();
	const [filteredProducts, setFilteredProducts] = useState<ICard[]>();

	useEffect(() => {
		getAllProducts(10).then((response) => {
			setProducts(response);
		});
	}, []);

	const filterByTitle = (title: string) => {
		if (products) {
			setFilteredProducts(
				products.filter((product) =>
					product.title.toLowerCase().includes(title.toLocaleLowerCase())
				)
			);
		}
	};

	return (
		<>
			<SearchBar onSearch={filterByTitle} />
			<StyledContainer>
				{filteredProducts?.length !== 0
					? filteredProducts!.map((item) => <ACard key={item.id} item={item} />)
					: products!.map((item) => <ACard key={item.id} item={item} />)}
			</StyledContainer>
		</>
	);
};
