# White inputs and Phosphor icons

## Goal
Make every form field visibly white and replace the current Lucide icon set with the official Phosphor React library referenced by the shared repository.

## Changes
1. **Light-neutral form fields**
   - Reuse the existing light-neutral token `--kayene-stone-25` (`#F2F2F2`) for input backgrounds; do not create an input-background token.
   - Keep this background consistent in light and dark themes, with existing neutral foreground values providing readable text and placeholder contrast.
   - Apply these tokens to text, email, password, search, date, textarea, and radio controls without changing their existing size, radius, focus, error, or disabled behavior.

2. **Phosphor icon migration**
   - Install `@phosphor-icons/react` and remove `lucide-react`.
   - Replace every icon used by the design-system components and preview with the closest Phosphor equivalent.
   - Use the current `Icon`-suffixed Phosphor exports and a consistent regular weight; preserve accessible labels and decorative `aria-hidden` behavior.

3. **Library guidance and preview**
   - Update the Kayene guidance so connected projects use Phosphor icons rather than Lucide.
   - Keep the public component API unchanged; icon slots will continue accepting React content.
   - Show the updated light-neutral fields and Phosphor icons in the existing component preview.

4. **Validation**
   - Verify the component preview in light and dark themes.
   - Confirm all form fields use the existing `#F2F2F2` light-neutral token, text stays legible, password/search/date controls work, and no Lucide imports remain.
   - Check desktop and narrow layouts for visual regressions and runtime errors.

## Technical details
- The shared GitHub repository is the Phosphor website, not the package to install. Its official React package is `@phosphor-icons/react`.
- No new input-background token will be introduced; the existing light-neutral token is the canonical field surface.
