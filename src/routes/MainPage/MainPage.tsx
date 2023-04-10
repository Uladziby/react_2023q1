/** @format */
import { ACard } from "../../components/ACard/ACard";
import { ICard } from "../../components/ACard/type";
import { ModalWindow } from "../../components/ModalWindow/ModalWindow";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { DetailInfoModal } from "./DetailInfoModal/DetailInfoModal";
import { StyledContainer } from "./MainPage.styles";
import { getAllProducts } from "./api";
import { useEffect, useState } from "react";

export const MainPage = () => {
	const [products, setProducts] = useState<ICard[]>();
	const [filteredProducts, setFilteredProducts] = useState<ICard[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [isShowModal, setIsShowModal] = useState(false);
	const [choosedProduct, setChoosedProduct] = useState<ICard>();
	const [isPending, setIsPending] = useState<boolean>(true);

	const handlerToggleModal = (id?: number) => {
		setIsShowModal(!isShowModal);
		setChoosedProduct(products?.find((el) => el.id === id));
	};

	useEffect(() => {
		setSearchTerm(localStorage.getItem("searchTerm") || "");
		getAllProducts(10).then((response) => {
			setTimeout(() => {
				setIsPending(false);
			}, 1000);
			setProducts(response);
		});
	}, []);

	useEffect(() => {
		setTimeout(() => {
			filterByTitle(searchTerm);
			setIsPending(false);
		}, 1000);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [products, isPending]);

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value;
		if (event.key === "Enter") {
			setSearchTerm(value);
			setIsPending(true);
		}
	};

	const filterByTitle = (title: string) => {
		console.log("filterByTitle", title);

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
			{!isPending ? (
				<StyledContainer>
					<SearchBar onSearch={filterByTitle} onKeyPress={handleKeyPress} />
					{filteredProducts.map((item) => (
						<ACard key={item.id} item={item} onShowModal={handlerToggleModal} />
					))}
				</StyledContainer>
			) : (
				<ProgressBar />
			)}
			{isShowModal && (
				<ModalWindow withBackground onCloseHandler={handlerToggleModal} isShowModal={isShowModal}>
					{choosedProduct ? <DetailInfoModal product={choosedProduct} /> : null}
				</ModalWindow>
			)}
		</>
	);
};
