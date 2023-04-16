/** @format */
import { ACard } from "../../components/ACard/ACard";
import { ModalWindow } from "../../components/ModalWindow/ModalWindow";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { mainSelector } from "../../redux/selectors/selectors";
import { useGetAllProductsQuery } from "../../redux/slices/mainApi";
import {
  filterProducts,
  setSearchTerm,
  setSelectedProduct,
} from "../../redux/slices/mainSlice";
import { AppDispatch } from "../../redux/store";
import { DetailInfoModal } from "./DetailInfoModal/DetailInfoModal";
import { StyledContainer } from "./MainPage.styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data: products } = useGetAllProductsQuery();
  const { selectedProduct, filteredProducts, searchTerm } =
    useSelector(mainSelector);

  const [isShowModal, setIsShowModal] = useState(false);
  const [isPending, setIsPending] = useState<boolean>(true);

  const handlerToggleModal = (id?: number) => {
    setIsShowModal(!isShowModal);
    dispatch(setSelectedProduct(products?.find((el) => el.id === id)));
  };

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
      filterByTitle(value);

      setIsPending(true);
    }
  };

  const filterByTitle = (title: string) => {
    console.log("filterByTitle", title);
    dispatch(setSearchTerm(title));

    if (products) {
      dispatch(
        filterProducts(
          products.filter((product) =>
            product.title.toLowerCase().includes(title.toLocaleLowerCase())
          )
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
        <ModalWindow
          withBackground
          onCloseHandler={handlerToggleModal}
          isShowModal={isShowModal}
        >
          {selectedProduct ? (
            <DetailInfoModal product={selectedProduct} />
          ) : null}
        </ModalWindow>
      )}
    </>
  );
};
