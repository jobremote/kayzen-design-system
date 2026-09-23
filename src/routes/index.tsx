import { createFileRoute } from "@tanstack/react-router";
import { OverviewPage } from "@/showcase/pages";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Kayene Design System" }, { name: "description", content: "Tokens, marca e componentes para experiências de cuidado Kayene." }, { property: "og:title", content: "Kayene Design System" }, { property: "og:description", content: "Tokens, marca e componentes para experiências de cuidado Kayene." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: OverviewPage,
});
