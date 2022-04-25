import React from "react";

class Prrducts extends React.Component {
    render() {
        return (
            <>
                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product.id}>
                            <div className="product">
                                <a href="#">
                                    <img src={product.image} alt={product.title} />
                                    <p>{product.title}</p>
                                </a>
                                <div className="product-price">
                                    <div>{product.price}</div>
                                    <button className="button primary">Add To Cart</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}
export default Prrducts;