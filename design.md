# Design — BusyBuy

Locked design system. Future Hallmark runs read this file first; pages defer
to it. Amend intentionally — the file is the rule.

## Provenance
- Source mode · image (user screenshot)
- Source · Grovemade.com (public reference for design inspiration)
- Date · 2026-06-03
- Attestation · Public reference for brand inspiration
- Confidence · High — visual DNA extracted from screenshot

## System
- Genre · modern-minimal
- Macrostructure · Long Document
- Theme · custom (vibe: "warm-friendly e-commerce with inviting tones")
- Axes · light >85 / neutral grotesque / warm orange

## Tokens (canonical · `tokens.css` is the source of truth)
```css
:root {
  --color-paper:      oklch(98% 0.008 70);
  --color-paper-2:    oklch(94% 0.012 70);
  --color-ink:        oklch(20% 0.025 45);
  --color-ink-2:      oklch(35% 0.02 45);
  --color-rule:       oklch(85% 0.015 70);
  --color-accent:     oklch(55% 0.12 35);
  --color-accent-ink: oklch(98% 0.008 70);
  --color-focus:      oklch(55% 0.18 35);

  --font-display: "Inter", system-ui, sans-serif;
  --font-body:    "Inter", system-ui, sans-serif;
  --font-mono:    "SF Mono", "Menlo", monospace;

  /* 4-pt spacing scale, named: --space-3xs … --space-4xl. See tokens.css.   */
  /* Type scale, 1.25 (major-third) ratio: --text-xs … --text-display.       */

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-fast: 180ms;  --dur-base: 240ms;  --dur-slow: 320ms;

  --radius-card: 8px;  --radius-pill: 9999px;  --radius-input: 6px;
}
```

## CTA voice
- Primary · warm orange fill · 6px radius · 0.75rem 1.5rem padding
- Secondary · outline · same radius

## Motion stance
- silent (default reveals)
- Reduced-motion fallback · ≤150 ms opacity crossfade.

## Notes
Anti-patterns to NOT carry over from the reference:
- None — the Grovemade reference is clean and intentional. No anti-patterns detected.

## Exports
`tokens.css` (in this project) is the source of truth. For Tailwind v4
`@theme`, DTCG `tokens.json`, or shadcn/ui CSS variables, ask *"extend
design.md with Tailwind exports"* (or the format you want) — Hallmark will
append them per `export-formats.md`.
