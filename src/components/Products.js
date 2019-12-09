import React, { useContext } from 'react';
import { ProductContext } from "../contexts/ProductContext";

const { products, addItem } = useContext(ProductContext);

// Components
import Product from './Product';

const Products = () => {
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
					// without props this component is getting its data soley from Context API!
				/>
			))}
		</div>
	);
};

export default Products;
