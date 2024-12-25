import { useEffect, useState } from "react";
import Footer from "../components/Footer";

function ProductPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div className="bg-[#E2F1E7] fade-in-up">
            <h1 className="text-2xl mb-6 pl-10 pt-4 font-bold text-[#243642]"> Product Page</h1>
            <div className="grid grid-cols-4 gap-4 mx-10 pb-6 fade-in-up">
                {products.map((product) => {
                    return (
                        <div key={product.id} className="bg-[#16423C] bg-opacity-70 rounded-lg shadow-2xl">
                            <img src={product.image} className="rounded-t-lg h-[280px] w-full" alt={product.title} />
                            <div className="truncate p-3 text-white text-md">{product.title}</div>

                            <div className="flex justify-between px-4 pb-3 text-white text-lg">
                                <div className="font-bold">${product.price}</div>
                                <div className="text-md">
                                    <a href="#" className="text-[#FCF596] font-bold rounded-full pl-4 mr-3">
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </a>
                                    <a href="#" className="text-[#FF4545] font-bold rounded-full">
                                        <i className="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Footer Component */}
            <Footer />
        </div>
    );
}

export default ProductPage;
