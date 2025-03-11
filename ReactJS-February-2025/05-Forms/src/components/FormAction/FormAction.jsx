// import { useState } from "react";
import SubmitButton from "./SubmitButton";

const wait = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Wait is over");
        }, time);
    });
};

export default function FormAction() {
    // const [pending, setPending] = useState(false);
    const submitAction = async (formData) => {
        // //set pending status
        // setPending(true);
        // //prevent default behaviour  - refresh
        // e.preventDefault();
        // //get form data drom DOM
        // const formData = new FormData(e.currentTarget);
        //get form values
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");
        //call rest api
        await wait(1500);
        // //Remove pending status
        // setPending(false);
        //Result
        console.log({ username, email, password });
    };

    // const formActionHandler = (formData) => {
    //     console.log(formData.get("username"));
    //     console.log("form action executed");
    // };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                    Form Action
                </h2>

                <form action={submitAction} className="space-y-6">
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
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
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <SubmitButton />
                </form>
            </div>
        </div>
    );
}
