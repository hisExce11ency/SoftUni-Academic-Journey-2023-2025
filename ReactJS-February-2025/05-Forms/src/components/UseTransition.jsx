import { useState, useTransition } from "react";

export default function UseTransition() {
    const [name, setName] = useState("");
    const [pending, startTransition] = useTransition();

    const submitHandler = (e) => {
        // Prevent page refresh
        e.preventDefault();

        // Get form data from DOM
        const formData = new FormData(e.currentTarget);

        // Get form values
        const character = formData.get("character");

        startTransition(async () => {
            // Call rest api
            const response = await fetch(
                `https://swapi.dev/api/people/${character}`
            );
            const result = await response.json();

            startTransition(() => setName(result.name));
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                    Use Transition
                </h2>

                <form onSubmit={submitHandler} className="space-y-6">
                    <div>
                        <label
                            htmlFor="character"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Character - {name}
                        </label>
                        <input
                            type="text"
                            id="character"
                            name="character"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <input
                        type="submit"
                        value="Login"
                        // disabled={pending}
                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                            pending
                                ? "opacity-50 cursor-wait"
                                : "hoover:bg-indigo-700"
                        }`}
                    />
                </form>
            </div>
        </div>
    );
}
