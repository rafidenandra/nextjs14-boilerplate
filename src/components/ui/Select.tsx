"use client";

import { forwardRef } from "react";
import ReactSelect from "react-select";
import { AsyncPaginate } from "react-select-async-paginate";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";

const selectVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
        destructive: "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
        subtle:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
        ghost:
          "bg-transparent dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-300 hover:bg-transparent dark:hover:bg-transparent",
      },
      sizeVariant: {
        default: "h-10 py-2 px-10",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      sizeVariant: "default",
    },
  }
);

export interface ISelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectVariants> {
  id?: string;
  url?: string;
}

const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ children, className, variant, sizeVariant, url, ...props }, ref) => {
    async function loadOptions() {
      if (!url) {
        return {
          options: [],
          hasMore: false,
        };
      }

      const response = await fetch(url, {
        method: "GET",
      });

      let responseJSON: { createdAt: string; name: string; id: string }[] = await response.json();
      const newResponse = responseJSON?.map((item) => {
        return {
          label: item?.name,
          value: item?.name,
        };
      });

      return {
        options: newResponse,
        hasMore: false,
      };
    }

    if (url) {
      return (
        <AsyncPaginate
          className="w-1/4 bg-slate-50"
          classNames={{
            control: ({ isFocused }) =>
              clsx(
                "pl-4 pr-2 border border-gray-300 rounded-md text-gray-600",
                isFocused ? "border-blue-500" : "border-gray-300"
              ),
          }}
          styles={{
            input: (base) => ({
              ...base,
              "input:focus": {
                boxShadow: "none",
              },
            }),
          }}
          loadOptions={loadOptions}
        />
      );
    }

    return (
      <ReactSelect
        unstyled
        isMulti
        className="w-1/4 bg-slate-50"
        classNames={{
          control: ({ isFocused }) =>
            clsx(
              "pl-4 pr-2 border border-gray-300 rounded-md text-gray-600",
              isFocused ? "border-blue-500" : "border-gray-300"
            ),
        }}
        styles={{
          input: (base) => ({
            ...base,
            "input:focus": {
              boxShadow: "none",
            },
          }),
        }}
        // className={cn(selectVariants({ variant, sizeVariant, className }))}
        options={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" },
        ]}
      />
    );
  }
);

Select.displayName = "Select";

export { Select, selectVariants };
