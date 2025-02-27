import { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "../api/endpoints/products";
import { useNavigate } from "react-router";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProduct() {
            setLoading(true);
            try {
                const response = await getProducts();
                setProducts(response.data.data);
            } catch (error) {
                console.Error("Fetching products failed", error);
            }
            setLoading(false);
        }

        fetchProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) return <p>Loading...</p>;
    return (
        <section>
            <h2>Products</h2>

            {products.map((product) => (
                <div key={product._id} onClick={() => navigate(`${product._id}`)}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>
                        <strong>{product.price.current}DZD</strong>
                        <del>{product.price.origine}DZD</del>
                    </p>
                </div>
            ))}
        </section>
    );
}

export default Products;
