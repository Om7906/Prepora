import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "pressable inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-[colors,transform,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:opacity-95",
        secondary: "bg-muted text-foreground border border-border hover:bg-muted/80",
        ghost: "hover:bg-muted/70",
        outline: "border border-border bg-transparent hover:bg-muted/60",
        soft: "bg-muted text-foreground border border-border hover:bg-muted/80"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3",
        lg: "h-11 rounded-md px-6",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: { variant: "soft", size: "default" }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
