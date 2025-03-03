import { getProducts } from "../api/endpoints/products";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";

function Products() {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    const { data, isFetching, isError, error, refetch } = useQuery({
        queryFn: getProducts,
        queryKey: ["products"],
    });
    const navigate = useNavigate();

    const products = data.data.data;
    /*  useEffect(() => {
        async function fetchProduct() {
            // setLoading(true);
            try {
                // const response = await getProducts();
                // setProducts(response.data.data);
            } catch (error) {
                console.Error("Fetching products failed", error);
            }
            // setLoading(false);
        }

        fetchProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); */

    if (isFetching) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    return (
        <section>
            <h2>Products</h2>
            <button onClick={() => refetch()}>🔁</button>
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
