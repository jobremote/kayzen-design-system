# Kayzen - Design System — Guidelines

## Components

The design system exports these components — import them from `@ws-4vskzvxpuy4bqmrwusz5/75f7bc7c-4eea-492a-801f-9556d36219ff` and compose them before building anything from scratch:

`AppHeader`, `Badge`, `Banner`, `BottomNavBar`, `Button`, `CalendarDayCell`, `Calendar`, `DateInput`, `EmailInput`, `FormGroup`, `KayeneLogo`, `KayeneMark`, `LoginTemplate`, `Modal`, `PasswordInput`, `ProfessionalCard`, `RadioButton`, `SearchInput`, `ServiceListItem`, `Skeleton`, `TabItem`, `TextInput`, `Textarea`, `TimeSlotChip`

Per-component details (import stanzas, props, variants, examples) live in `.lovable/rules/libraries/{slug}/components.md` — on disk, not auto-loaded. Read that file or the component source when the name alone isn't enough.

## Rules

These rules apply at all times when working in this project:

- Use semantic tokens instead of raw values.
- Use Lotus, never generic red, for error feedback.
- Preserve official bicolor brand artwork.

## Theme Files

The design system's theme is delivered through the following files. The author's original source files carry the full wiring the design system needs — variable declarations, framework-specific directives, provider objects, etc. — and are the canonical import target.

- `@ws-4vskzvxpuy4bqmrwusz5/75f7bc7c-4eea-492a-801f-9556d36219ff/design-system/kayene/styles/theme.css` (source — preferred import)
- `@ws-4vskzvxpuy4bqmrwusz5/75f7bc7c-4eea-492a-801f-9556d36219ff/dist/tokens.css` (auto-generated flat list of CSS custom properties — a raw-values fallback only; does NOT carry framework-specific wiring that the source files above provide)

