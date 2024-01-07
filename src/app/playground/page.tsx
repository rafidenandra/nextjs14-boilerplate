"use client";

import { Button, IButtonProps } from "@/components/ui/Button";
import { ChangeEvent, useState } from "react";

export default function Playground() {
  const [buttonProps, setButtonProps] = useState<IButtonProps>({
    variant: "default",
    size: "default",
  });

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setButtonProps({ ...buttonProps, [name]: value });
  };

  return (
    <div>
      <div className="flex flex-col">
        {/* Variants */}
        <select
          name="variant"
          id="variant"
          defaultValue="default"
          onChange={(e) => handleOnChange(e)}
        >
          <option value="default">default</option>
          <option value="destructive">destructive</option>
          <option value="outline">outline</option>
          <option value="subtle">subtle</option>
          <option value="ghost">ghost</option>
          <option value="link">link</option>
        </select>

        {/* Sizes */}
        <select name="size" id="size" defaultValue="default" onChange={(e) => handleOnChange(e)}>
          <option value="default">default</option>
          <option value="lg">large</option>
          <option value="sm">small</option>
        </select>
      </div>

      <Button variant={buttonProps?.variant} size={buttonProps?.size}>
        Testing
      </Button>
    </div>
  );
}
