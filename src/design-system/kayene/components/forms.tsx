import { forwardRef, useState, type FieldsetHTMLAttributes, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { CalendarDays, Eye, EyeOff, Search } from "lucide-react";
import { cn } from "../lib/utils";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { label: string; error?: string; hint?: string; }
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput({ className, label, error, hint, id, ...props }, ref) { const inputId = id ?? props.name; return <label className="grid gap-2 text-sm font-medium" htmlFor={inputId}><span>{label}</span><input ref={ref} id={inputId} className={cn("h-12 rounded-control border bg-primary-soft px-4 text-content shadow-inset outline-none placeholder:text-content-muted focus:border-primary-border focus:ring-1 focus:ring-primary-border", error ? "border-error-stroke" : "border-transparent", className)} aria-invalid={Boolean(error)} aria-describedby={error || hint ? `${inputId}-message` : undefined} {...props} />{(error || hint) && <span id={`${inputId}-message`} className={cn("text-xs", error ? "text-error" : "text-content-muted")}>{error || hint}</span>}</label>; });

export interface EmailInputProps extends TextInputProps {}
export const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(function EmailInput(props, ref) { return <TextInput ref={ref} type="email" autoComplete="email" {...props} />; });

export interface PasswordInputProps extends Omit<TextInputProps, "type"> {}
export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(function PasswordInput({ className, label, ...props }, ref) { const [visible, setVisible] = useState(false); return <div className="relative"><TextInput ref={ref} label={label} type={visible ? "text" : "password"} className={cn("pr-12", className)} {...props} /><button type="button" aria-label={visible ? "Ocultar senha" : "Mostrar senha"} onClick={() => setVisible((value) => !value)} className="absolute right-3 top-10 grid size-8 place-items-center rounded-pill text-content-muted focus-visible:outline-2 focus-visible:outline-ring">{visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}</button></div>; });

export interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> { label?: string; }
export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(function SearchInput({ className, label = "Buscar", ...props }, ref) { return <label className="relative block"><span className="sr-only">{label}</span><Search aria-hidden="true" className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-content-muted"/><input ref={ref} type="search" className={cn("h-11 w-full rounded-pill border border-transparent bg-primary-soft pl-11 pr-4 text-sm shadow-inset outline-none focus:border-primary-border", className)} {...props}/></label>; });

export interface DateInputProps extends Omit<TextInputProps, "type"> {}
export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(function DateInput({ className, ...props }, ref) { return <div className="relative"><TextInput ref={ref} type="date" className={cn("pr-12", className)} {...props}/><CalendarDays aria-hidden="true" className="pointer-events-none absolute right-4 top-10 size-4 text-content-muted"/></div>; });

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { label: string; error?: string; }
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ className, label, error, id, ...props }, ref) { const inputId = id ?? props.name; return <label className="grid gap-2 text-sm font-medium" htmlFor={inputId}><span>{label}</span><textarea ref={ref} id={inputId} className={cn("min-h-28 resize-y rounded-control border bg-primary-soft p-4 shadow-inset outline-none focus:border-primary-border", error ? "border-error-stroke" : "border-transparent", className)} aria-invalid={Boolean(error)} {...props}/>{error && <span className="text-xs text-error">{error}</span>}</label>; });

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> { label: string; }
export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(function RadioButton({ className, label, ...props }, ref) { return <label className={cn("inline-flex cursor-pointer items-center gap-3 text-sm has-disabled:cursor-not-allowed has-disabled:opacity-45", className)}><input ref={ref} type="radio" className="size-5 appearance-none rounded-full border-4 border-primary-border bg-surface checked:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring" {...props}/><span>{label}</span></label>; });

export interface FormGroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> { legend: string; }
export const FormGroup = forwardRef<HTMLFieldSetElement, FormGroupProps>(function FormGroup({ className, legend, children, ...props }, ref) { return <fieldset ref={ref} className={cn("grid gap-4", className)} {...props}><legend className="mb-3 font-semibold">{legend}</legend>{children}</fieldset>; });