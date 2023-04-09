/** @format */
import { ACard } from "../../components/ACard/ACard";
import { ICard } from "../../components/ACard/type";
import { ModalWindow } from "../../components/ModalWindow/ModalWindow";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { DetailInfoModal } from "./DetailInfoModal/DetailInfoModal";
import { StyledContainer } from "./MainPage.styles";
import { getAllProducts } from "./api";
import { useEffect, useState } from "react";

export const MainPage = () => {
	const [products, setProducts] = useState<ICard[]>();
	const [filteredProducts, setFilteredProducts] = useState<ICard[]>([]);
	const [searchTerm] = useState(localStorage.getItem("searchTerm") || "");
	const [isShowModal, setIsShowModal] = useState(false);
	const [choosedProduct, setChoosedProduct] = useState<ICard>();

	const handlerToggleModal = (id?: number) => {
		setIsShowModal(!isShowModal);
		setChoosedProduct(products?.find((el) => el.id === id));
	};

	useEffect(() => {
		getAllProducts(10).then((response) => {
			setProducts(response);
		});
	}, []);

	useEffect(() => {
		filterByTitle(searchTerm);
		console.log(products);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [products]);

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			filterByTitle(event.currentTarget.value);
		}
	};

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
			<SearchBar onSearch={filterByTitle} onKeyPress={handleKeyPress} />
			<StyledContainer>
				{filteredProducts.map((item) => (
					<ACard key={item.id} item={item} onShowModal={handlerToggleModal} />
				))}
			</StyledContainer>
			{isShowModal && (
				<ModalWindow withBackground onCloseHandler={handlerToggleModal} isShowModal={isShowModal}>
					{choosedProduct ? <DetailInfoModal product={choosedProduct} /> : null}
				</ModalWindow>
			)}
		</>
	);
};
