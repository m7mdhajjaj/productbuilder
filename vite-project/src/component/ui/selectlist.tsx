"use client";

import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
import { categories } from "../data";
import { ICategory } from "../interfaces/IProduct";

interface SelectProps {
  selectedCategory?: ICategory;
  onCategoryChange?: (category: ICategory) => void;
}

const select = ({ selectedCategory, onCategoryChange }: SelectProps) => {
  const [selected, setSelected] = useState(selectedCategory || categories[3]);

  const handleChange = (category: ICategory) => {
    setSelected(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };  return (
    <Listbox value={selected} onChange={handleChange}>
      {({ open }) => (
        <>
          <Label className="block text-md font-sm text-black-900 my-0">
            Category
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2 text-left shadow-sm my-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <div className="flex items-center gap-3">
                <img
                  alt=""
                  src={selected.imageURL || ""}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="block truncate">{selected.name}</span>
              </div>
              <ChevronUpDownIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              />
            </ListboxButton>
            
            {open && (
              <ListboxOptions className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {categories.map((category) => (
                  <ListboxOption
                    key={category.id}
                    value={category}
                    className={({ active }) => 
                      `relative cursor-pointer select-none py-2 pl-3 pr-9 ${
                        active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'
                      }`
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            alt=""
                            src={category.imageURL}
                            className="h-8 w-8 rounded-full object-cover"
                          />
                          <span className="ml-3 block truncate">{category.name}</span>
                        </div>

                        {selected && (
                          <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                            <CheckIcon aria-hidden="true" className="h-5 w-5" />
                          </span>
                        )}
                      </>
                    )}                  
                  </ListboxOption>
                ))}
              </ListboxOptions>
            )}
          </div>
        </>
      )}
    </Listbox>
  );
};
export default select;
