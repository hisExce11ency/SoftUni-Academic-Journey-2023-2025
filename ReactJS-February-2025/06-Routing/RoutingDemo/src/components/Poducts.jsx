import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import Product from "./Product";
import SortOrFilter from "./SortOrFilter";

// const products = [
//     {
//         id: 1,
//         name: "Earthen Bottle",

//         price: "$48",
//         imageSrc:
//             "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
//         imageAlt:
//             "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
//     },
//     {
//         id: 2,
//         name: "Nomad Tumbler",

//         price: "$35",
//         imageSrc:
//             "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
//         imageAlt:
//             "Olive drab green insulated bottle with flared screw lid and flat top.",
//     },
//     {
//         id: 3,
//         name: "Focus Paper Refill",

//         price: "$89",
//         imageSrc:
//             "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
//         imageAlt:
//             "Person using a pen to cross a task off a productivity paper card.",
//     },
//     {
//         id: 4,
//         name: "Machined Mechanical Pencil",

//         price: "$35",
//         imageSrc:
//             "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
//         imageAlt:
//             "Hand holding black machined steel mechanical pencil with brass tip and top.",
//     },
//     // More products...
// ];

export default function Catalog() {
    const [search, setSearch] = useSearchParams();
    // console.log(Object.fromEntries(search));

    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    // console.log(displayProducts);

    useEffect(() => {
        const abortController = new AbortController();
        fetch("https://fakestoreapi.com/products", {
            signal: abortController.signal,
        })
            .then((res) => res.json())
            .then((result) => {
                setProducts(result);
            });
        return () => {
            abortController.abort();
        };
    }, []);

    useEffect(() => {
        const filter = Object.fromEntries(search);

        if (filter.sortBy) {
            setDisplayProducts(
                [...products].sort((p1, p2) =>
                    filter.dir === "asc"
                        ? p1.price - p2.price
                        : p2.price - p1.price
                )
            );
        } else if (filter.top) {
            setDisplayProducts(products.filter((el) => el.rating?.rate > 4));
        } else if (filter.popular) {
            setDisplayProducts(
                products.filter((el) => el.rating?.count >= 100)
            );
        } else {
            setDisplayProducts([...products]);
        }
    }, [products, search]);

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <SortOrFilter />
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1% )",
                    }}
                    className="relative left-1/3 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/4 rotate-[40deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(60%-40rem)] sm:w-[85.1875rem]"
                />
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl text-center">
                Products
            </h2>

            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-center">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {displayProducts.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
