import { useState } from "react";
import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router";

const searchParams = [
    {
        id: 1,
        name: "All",
        param: "/catalog",
    },
    {
        id: 2,
        name: "Best Rating",
        param: "/catalog?top=true",
    },
    {
        id: 3,
        name: "Popular",
        param: "/catalog?popular=true",
    },
    {
        id: 4,
        name: "Price: Low to High",
        param: "/catalog?sortBy=price&dir=asc",
    },
    {
        id: 5,
        name: "Price: High to Low",
        param: "/catalog?sortBy=price&dir=desc",
    },
];

export default function SortOrFilter() {
    const [selected, setSelected] = useState(searchParams[0]);

    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-2 mb-5 w-50">
                <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                        <span className="block truncate">{selected.name}</span>
                    </span>
                    <ChevronUpDownIcon
                        aria-hidden="true"
                        className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                </ListboxButton>

                <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                >
                    {searchParams.map((searchParam) => (
                        <ListboxOption
                            key={searchParam.id}
                            value={searchParam}
                            className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                        >
                            <div className="flex items-center">
                                <Link
                                    to={searchParam.param}
                                    className="ml-3 w-full block truncate font-normal group-data-selected:font-semibold"
                                >
                                    {searchParam.name}
                                </Link>
                            </div>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    );
}
