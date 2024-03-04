import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../utils";
import { FC } from "react";
import Link from "next/link";

const buttonVariants = cva(
  "rounded-full w-full md:w-auto px-6 py-4 md:py-2 mb-4 md:mb-0",
  {
    variants: {
      variant: {
        orange:
          "bg-orange text-purple-dark hover:bg-purple-dark hover:text-orange border-transparent hover:border hover:border-2 hover:border-[#FFA289]",
        white:
          "bg-purple-light text-purple-dark hover:bg-purple-dark hover:text-purple-light border-transparent hover:border hover:border-2 hover:border-[#362B4F]",
        whiteStroke:
          "border border-2 border-[#F7F3FF] hover:border-transparent hover:bg-purple-light hover:text-purple-dark",
        purpleStroke:
          "border border-2 border-[#362B4F] hover:border-transparent hover:bg-purple-light hover:text-purple-dark",
      },
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg",
      },
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text?: string;
  href?: string | any;
}

const Button: FC<ButtonProps> = ({ variant, size, href, text }) => {
  return (
    <Link href={href}>
      <button className={cn(buttonVariants({ variant, size }))}>{text}</button>
    </Link>
  );
};
export { Button, buttonVariants };
