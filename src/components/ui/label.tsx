// Label component from shadcn/ui, fixed version without "* as" syntax

"use client";
import React from "react";
import { Root as LabelRoot } from "@radix-ui/react-label"; // ✅ Clean named import

import { cn } from "@/app/aceternity/lib/utils";

const Label = React.forwardRef<
  React.ElementRef<typeof LabelRoot>,
  React.ComponentPropsWithoutRef<typeof LabelRoot>
>(({ className, ...props }, ref) => (
  <LabelRoot
    ref={ref}
    className={cn(
      "text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
));

Label.displayName = "Label";

export { Label };
