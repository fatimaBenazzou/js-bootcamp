import { getProductById } from "../api/endpoints/products";
import { useParams } from "react-router";
import useCart from "../hooks/useCart";
import { useQuery } from "@tanstack/react-query";

function ProductDetails() {
    const { productId } = useParams();
    const { data, isFetching, isError, error } = useQuery({
        queryKey: ["products", productId],
        queryFn: () => getProductById(productId),
    });
    const { addToCart } = useCart();

    if (isFetching) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    const product = data.data.data || {};

    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p> Price :{product.price.current}DZD</p>
            <button
                onClick={() => {
                    addToCart(product);
                    alert("Item added to cart successfully");
                }}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default ProductDetails;
