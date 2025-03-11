import { useState, useEffect, useRef } from "react";

export default function UserRef() {
    const [count, setCount] = useState(0);
    const refMounted = useRef(false);
    useEffect(() => {
        if (refMounted.current) {
            console.log(count, "Updated");
        }
        refMounted.current = true;
    }, [count]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800">
                    useRef-Counter
                </h2>
                <p className="text-lg text-gray-700">Count: {count}</p>
                <button
                    onClick={() => setCount((s) => s + 1)}
                    className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    +
                </button>
            </div>
        </div>
    );
}
