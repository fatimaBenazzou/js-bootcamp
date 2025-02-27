import { useEffect, useState } from "react";
import { getProductById } from "../api/endpoints/products";
import { useParams } from "react-router";
import useCart from "../hooks/useCart";

function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const { addToCart } = useCart();

    useEffect(() => {
        async function fetchProduct() {
            setLoading(true);
            try {
                const response = await getProductById(productId);
                setProduct(response.data.data);
            } catch (error) {
                console.Error("Fetching products failed", error);
            }
            setLoading(false);
        }

        fetchProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) return <p>Loading...</p>;
    if (!product) return <p>Product Not found.</p>;

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
