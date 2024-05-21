import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../utils";
import { FC } from "react";
import Link from "next/link";

const buttonVariants = cva(
  "rounded-full w-full md:w-auto w-full md:w-[200px] h-12 md:h-11 mb-4 md:mb-0 font-medium",
  {
    variants: {
      variant: {
        orange:
          "bg-orange text-purple-dark hover:bg-purple-dark hover:text-orange border-transparent hover:border hover:border-2 hover:border-[#FFA289] transition duration-200",
        orange2:
        "bg-orange text-purple-dark hover:bg-purple-medium hover:text-purple-dark border-transparent hover:border hover:border-2 hover:border-[#362B4F] transition duration-200",
        white:
          "bg-purple-light text-purple-dark hover:bg-purple-dark hover:text-purple-light border-transparent hover:border hover:border-2 hover:border-[#362B4F] transition duration-200",
        whiteStroke:
          "border border-2 border-[#F7F3FF] hover:border-transparent hover:bg-purple-light hover:text-purple-dark transition duration-200",
        purpleStroke:
          "border border-2 border-[#362B4F] hover:border-transparent hover:bg-purple-light hover:text-purple-dark transition duration-200",
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
