# Kayene Design System

Build calm, welcoming wellness experiences with a precise token hierarchy: primitives feed semantic aliases, and components consume aliases. Kayene should feel gentle and human without becoming ornamental or visually vague.

## Non-negotiable rules

- Import public UI from `@/design-system/kayene`; import the canonical theme once from `@/design-system/kayene/styles/theme.css`.
- Use semantic token utilities such as `bg-primary`, `text-content`, and `border-primary-border`. Never paste raw color values into feature code.
- Error is deliberately represented by the Lotus family. Never introduce generic red for validation or feedback.
- Lora is reserved for emotionally expressive display moments. Use Albert Sans for all controls, body copy, labels, navigation, and titles.
- Use the nearest existing typography and spacing token. Do not invent a new size to imitate an outside reference.
- Small interactive elements use the pill radius; inputs use control, cards use card, and broad surfaces use surface.
- Keep neumorphic elevation on neutral surfaces. Do not place gray elevation shadows directly over saturated brand backgrounds.
- Use `@phosphor-icons/react` icons with the regular weight or the component's icon slots. Prefer current `Icon`-suffixed exports and never draw replacement icons by hand.
- Preserve the official bicolor mark. Do not recolor, flatten, redraw, or regenerate it.
- Use semantic HTML, keyboard-reachable controls, visible focus rings, meaningful labels, and sufficient contrast.

## Preferred patterns

```tsx
import { Button, TextInput } from "@/design-system/kayene";

<form className="grid gap-4">
  <TextInput label="Nome completo" name="name" />
  <Button type="submit" variant="primary">Continuar</Button>
</form>
```

Expose visual variation through the documented `variant`, `size`, `status`, and `state` props. Extend existing components before creating near-duplicates. Accept and merge `className`, forward refs where the underlying element supports one, and preserve native element props.

See the generated design-token and component references for the complete catalog.