import React, { useImperativeHandle, forwardRef, useState } from "react";

const Submit = forwardRef((props, ref) => {
    const [disabled, setDisabled] = useState(false);

    // Expose the setDisabled function to the parent component
    useImperativeHandle(ref, () => ({
        setDisabled: (isDisabled) => {
            setDisabled(isDisabled);
        },
    }));

    return (
        <input
            type="submit"
            value="Login"
            disabled={disabled}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                disabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-indigo-700"
            }`}
        />
    );
});

export default Submit;
