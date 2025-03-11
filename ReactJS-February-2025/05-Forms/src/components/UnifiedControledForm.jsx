import { useState } from "react";

const wait = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Wait is over");
        }, time);
    });
};

export default function UnifiedControledForm() {
    const [pending, setPending] = useState(false);
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        rememberMe: false,
    });
    const submitHendler = async (e) => {
        //set pending status
        setPending(true);

        //prevent default behaviour  - refresh
        e.preventDefault();

        //call rest api
        await wait(1500);

        //Remove pending status
        setPending(false);

        //Result
        console.log({
            username: values.username,
            emaile: values.email,
            password: values.password,
        });
    };
    const changeVluesHandler = (e) => {
        console.log(e.target.name, e.target.value);
        setValues((values) => ({
            ...values,
            [e.target.name]:
                e.target.type === "checkbox"
                    ? e.target.checked
                    : e.target.value,
        }));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                    Unified Controled Form
                </h2>

                <form action="" onSubmit={submitHendler} className="space-y-6">
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        {/* If you are using value you need to use OnChange */}
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={values.username}
                            onChange={changeVluesHandler}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={changeVluesHandler}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={values.password}
                            onChange={changeVluesHandler}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="rememberMe"
                            id="rememberMe"
                            checked={values.rememberMe}
                            onChange={changeVluesHandler}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                            htmlFor="rememberMe"
                            className="ml-2 block text-sm text-gray-900"
                        >
                            Remember me
                        </label>
                    </div>
                    <input
                        type="submit"
                        value="Login"
                        disabled={pending}
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
