import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const { pending, data: formData } = useFormStatus();
    console.log(pending);
    console.log(formData?.get("username"));
    return (
        <input
            // formAction={submitAction}
            type="submit"
            value="Login"
            disabled={pending}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                pending ? "opacity-50 cursor-wait" : "hoover:bg-indigo-700"
            }`}
        />
    );
}
