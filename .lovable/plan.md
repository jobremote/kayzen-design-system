# Kayene Design System Starter

## Goal
Turn the supplied storyboard and official artwork into a local React design-system library with a polished, permanent preview.

## Build
- Preserve the uploaded icon and lockup as official source assets, and derive the site favicon from the icon.
- Define the complete primitive color ramps and semantic aliases described in the storyboard, plus typography, spacing, radii, borders, opacity, gradients, and elevation tokens.
- Add typed, reusable starter components for the documented set: actions, badges, form controls, list/card patterns, scheduling controls, feedback, navigation, modal, skeletons, and brand marks.
- Expose the public library through a single barrel while keeping preview-only code out of consumer projects.
- Create the required library metadata, extraction sources, and durable authoring guidance.

## Showcase
- Build separate Overview, Colors, Typography, Brand, and Components views with shared navigation.
- Render every exported component with realistic Portuguese content, variants, important states, and concise usage examples.
- Add component search and a light/dark theme switch so both token modes can be checked.
- Use only Kayene tokens and components in the showcase itself.

## Validation
- Verify the preview at desktop and narrow widths, including navigation, theme switching, component search, and representative interactions.
- Confirm the home page has Kayene-specific metadata and no template placeholder remains.

## Technical details
- React 19 and TanStack Start; Tailwind CSS v4 with a self-contained canonical theme stylesheet.
- Local library source, attach-ready exports, no npm wrapper.
- Uploaded brand binaries remain byte-identical under the design-system asset taxonomy; preview scaffolding is excluded from attach.
