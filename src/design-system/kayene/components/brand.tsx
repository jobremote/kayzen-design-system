import { forwardRef, type ImgHTMLAttributes } from "react";
import { cn } from "../lib/utils";
import mark from "../assets/icons/kayene-mark.png";
import lockup from "../assets/logos/kayene-lockup.png";

export interface KayeneMarkProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> { size?: "sm" | "md" | "lg"; }
export const KayeneMark = forwardRef<HTMLImageElement, KayeneMarkProps>(function KayeneMark({ className, size = "md", alt = "Símbolo Kayene Santiago", ...props }, ref) { const sizes = { sm: "w-10", md: "w-20", lg: "w-36" }; return <img ref={ref} src={mark} alt={alt} className={cn("h-auto object-contain", sizes[size], className)} {...props}/>; });

export interface KayeneLogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> { size?: "sm" | "md" | "lg"; }
export const KayeneLogo = forwardRef<HTMLImageElement, KayeneLogoProps>(function KayeneLogo({ className, size = "md", alt = "Kayene Santiago", ...props }, ref) { const sizes = { sm: "w-40", md: "w-64", lg: "w-96" }; return <img ref={ref} src={lockup} alt={alt} className={cn("h-auto object-contain", sizes[size], className)} {...props}/>; });