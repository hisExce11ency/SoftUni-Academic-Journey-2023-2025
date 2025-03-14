import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";

const productTemplate = {
    sizes: [
        { name: "XXS", inStock: false },
        { name: "XS", inStock: true },
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: true },
        { name: "XL", inStock: true },
        { name: "2XL", inStock: true },
        { name: "3XL", inStock: true },
    ],
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
    const { productId } = useParams();

    const [selectedSize, setSelectedSize] = useState(productTemplate.sizes[2]);
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => res.json())
            .then((result) => {
                setProduct(result);
            });
    }, [productId]);

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
            </div>
            <div className="pt-6">
                {/* Product layout */}
                <div className="mx-auto max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    {/* Image gallery */}
                    <div className="lg:col-span-1">
                        <img
                            alt={product.title}
                            src={product.image}
                            className="aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto"
                        />
                    </div>

                    {/* Product details */}
                    <div className="lg:col-span-1 lg:pl-8">
                        {/* Product title */}
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            {product.title}
                        </h1>

                        {/* Price */}
                        <p className="text-3xl tracking-tight text-gray-900 mt-4">
                            ${product.price}
                        </p>

                        {/* Reviews */}
                        <div className="mt-4">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            aria-hidden="true"
                                            className={classNames(
                                                product.rating?.rate > rating
                                                    ? "text-gray-900"
                                                    : "text-gray-200",
                                                "size-5 shrink-0"
                                            )}
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">
                                    {product.rating?.rate} out of 5 stars
                                </p>
                                <a
                                    href="#"
                                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    {product.rating?.count} reviews
                                </a>
                            </div>
                        </div>

                        {/* Size selection */}
                        <form className="mt-6">
                            <div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        Size
                                    </h3>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Size guide
                                    </a>
                                </div>

                                <fieldset
                                    aria-label="Choose a size"
                                    className="mt-4"
                                >
                                    <RadioGroup
                                        value={selectedSize}
                                        onChange={setSelectedSize}
                                        className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                                    >
                                        {productTemplate.sizes.map((size) => (
                                            <Radio
                                                key={size.name}
                                                value={size}
                                                disabled={!size.inStock}
                                                className={classNames(
                                                    size.inStock
                                                        ? "cursor-pointer bg-white text-gray-900 shadow-xs"
                                                        : "cursor-not-allowed bg-gray-50 text-gray-200",
                                                    "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1 sm:py-6"
                                                )}
                                            >
                                                <span>{size.name}</span>
                                                {size.inStock ? (
                                                    <span
                                                        aria-hidden="true"
                                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                                                    />
                                                ) : (
                                                    <span
                                                        aria-hidden="true"
                                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                    >
                                                        <svg
                                                            stroke="currentColor"
                                                            viewBox="0 0 100 100"
                                                            preserveAspectRatio="none"
                                                            className="absolute inset-0 size-full stroke-2 text-gray-200"
                                                        >
                                                            <line
                                                                x1={0}
                                                                x2={100}
                                                                y1={100}
                                                                y2={0}
                                                                vectorEffect="non-scaling-stroke"
                                                            />
                                                        </svg>
                                                    </span>
                                                )}
                                            </Radio>
                                        ))}
                                    </RadioGroup>
                                </fieldset>
                            </div>

                            {/* Add to bag button */}
                            <button
                                type="submit"
                                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                            >
                                Add to bag
                            </button>
                        </form>
                    </div>
                </div>

                {/* Description and details */}
                <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-16 lg:pb-24">
                    <div>
                        <h3 className="sr-only">Description</h3>
                        <div className="space-y-6">
                            <p className="text-base text-gray-900">
                                {product.description}
                            </p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-sm font-medium text-gray-900">
                            Category
                        </h2>
                        <div className="mt-4 space-y-6">
                            <p className="text-sm text-gray-600">
                                {product.category}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
