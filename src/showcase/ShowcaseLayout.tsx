import { Link, useRouterState } from "@tanstack/react-router";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useEffect, useState, type ReactNode } from "react";
import { Button, KayeneMark } from "@/design-system/kayene";

const navigation = [
  ["/", "Visão geral"], ["/colors", "Cores"], ["/typography", "Tipografia"], ["/brand", "Marca"], ["/components", "Componentes"],
] as const;

export function ShowcaseLayout({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return <div className="min-h-screen bg-background text-content"><header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur"><div className="mx-auto flex min-h-20 max-w-7xl items-center gap-5 px-5"><Link to="/" aria-label="Kayene Design System"><KayeneMark size="sm"/></Link><nav aria-label="Showcase" className="hidden flex-1 items-center gap-1 md:flex">{navigation.map(([to, label]) => <Link key={to} to={to} className={`rounded-pill px-4 py-2 text-sm font-medium transition-colors ${pathname === to ? "bg-primary-soft text-primary" : "text-content-muted hover:bg-primary-soft hover:text-primary"}`}>{label}</Link>)}</nav><Button variant="tertiary" size="sm" aria-label={dark ? "Usar tema claro" : "Usar tema escuro"} onClick={() => setDark((value) => !value)}>{dark ? <SunIcon aria-hidden="true" className="size-4"/> : <MoonIcon aria-hidden="true" className="size-4"/>}</Button></div><nav aria-label="Showcase móvel" className="flex gap-1 overflow-x-auto border-t border-border px-4 py-2 md:hidden">{navigation.map(([to, label]) => <Link key={to} to={to} className={`whitespace-nowrap rounded-pill px-3 py-2 text-xs font-medium ${pathname === to ? "bg-primary-soft text-primary" : "text-content-muted"}`}>{label}</Link>)}</nav></header><main className="mx-auto max-w-7xl px-5 py-12 md:py-16"><section className="mb-12 max-w-3xl"><span className="mb-3 block text-label-sm uppercase text-secondary">{eyebrow}</span><h1 className="text-display text-balance">{title}</h1><p className="mt-4 max-w-2xl text-paragraph-md text-content-muted">{description}</p></section>{children}</main></div>;
}

export function Section({ title, description, children }: { title: string; description?: string; children: ReactNode }) { return <section className="border-t border-border py-10"><div className="mb-7"><h2 className="text-title-sm">{title}</h2>{description && <p className="mt-2 max-w-2xl text-sm text-content-muted">{description}</p>}</div>{children}</section>; }
export function Specimen({ label, children }: { label: string; children: ReactNode }) { return <div className="grid min-w-0 gap-3"><span className="text-label-sm text-content-muted">{label}</span><div>{children}</div></div>; }