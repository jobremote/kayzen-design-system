import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { LoaderCircle } from "lucide-react";
import { cn } from "../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ className, variant = "primary", size = "md", loading = false, leadingIcon, trailingIcon, children, disabled, ...props }, ref) {
  const variants = { primary: "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active", secondary: "border border-primary bg-transparent text-primary hover:bg-primary-soft active:bg-primary-soft", tertiary: "bg-transparent text-primary hover:bg-primary-soft active:bg-primary-soft" };
  const sizes = { sm: "h-9 px-4 text-xs", md: "h-11 px-5 text-base", lg: "h-14 px-7 text-xl" };
  return <button ref={ref} disabled={disabled || loading} className={cn("inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-45", variants[variant], sizes[size], className)} {...props}>{loading ? <LoaderCircle aria-hidden="true" className="size-4 animate-spin" /> : leadingIcon}{children}{!loading && trailingIcon}</button>;
});

export interface CTAProps extends Omit<ButtonProps, "variant"> {}
export const CTA = forwardRef<HTMLButtonElement, CTAProps>(function CTA({ className, ...props }, ref) {
  return <Button ref={ref} className={cn("bg-linear-to-b from-[var(--kayene-cornflower-500)] to-[var(--kayene-cornflower-950)] text-white hover:brightness-110 active:brightness-125", className)} {...props} />;
});

export interface BadgeProps { children: ReactNode; status?: "success" | "info" | "error" | "alert" | "neutral"; variant?: "filled" | "outline"; className?: string; }
export function Badge({ children, status = "neutral", variant = "filled", className }: BadgeProps) {
  const colors = { success: "bg-success-soft text-success border-[var(--kayene-leaf-200)]", info: "bg-info-soft text-info border-[var(--kayene-iris-200)]", error: "bg-error-soft text-error border-error-stroke", alert: "bg-alert-soft text-alert border-[var(--kayene-sunflower-200)]", neutral: "bg-[var(--kayene-stone-100)] text-[var(--kayene-stone-950)] border-[var(--kayene-stone-200)]" };
  return <span className={cn("inline-flex items-center rounded-pill border px-3 py-1 text-xs font-medium", colors[status], variant === "outline" && "bg-transparent", className)}>{children}</span>;
}