/** @format */
import { ACard, ICard } from "../../components/ACard/ACard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { StyledContainer } from "./MainPage.styles";
import { getAllProducts } from "./api";
import React from "react";

interface MainPageState {
	products: ICard[];
	filteredProducts: ICard[];
}
type MainPageProps = {};
export class MainPage extends React.Component<MainPageProps, MainPageState> {
	constructor(props: MainPageProps) {
		super(props);
		this.state = {
			products: [],
			filteredProducts: [],
		};
		this.filterByTitle = this.filterByTitle.bind(this);
	}

	componentDidMount(): void {
		getAllProducts(10).then((response) => {
			this.setState({ products: response });
		});
	}

	filterByTitle(title: string) {
		if (this.state.products) {
			this.setState({
				filteredProducts: this.state.products.filter((product) =>
					product.title.toLowerCase().includes(title.toLocaleLowerCase())
				),
			});
		}
	}

	render() {
		return (
			<>
				<SearchBar onSearch={this.filterByTitle} />
				<StyledContainer>
					{this.state.filteredProducts.length !== 0
						? this.state.filteredProducts.map((item) => <ACard key={item.id} item={item} />)
						: this.state.products.map((item) => <ACard key={item.id} item={item} />)}
					{}
				</StyledContainer>
			</>
		);
	}
}
