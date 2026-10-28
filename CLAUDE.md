# Site brief
Owner: Tomisin Leshi (KING). Lagos, Nigeria. Remote-friendly.
Positioning: I build the systems that move money across African borders.
Primary reader: founders, fintechs and banks who need payments or stablecoin
infrastructure built or reviewed. Secondary: recruiters for remote backend roles.
Third: readers of my writing.
Homepage job: in 5 seconds, a visitor knows what I do, sees proof, and knows how to
reach me. Success metric = share of visits that click "Book a call", "Copy email"
or "Download CV".

Design rules:
- Mobile first. Base styles target 360px wide. Add larger layouts with min-width
  breakpoints only (sm 640, md 768, lg 1024).
- 16px side gutter on mobile, no horizontal scroll at any width.
- Tap targets at least 44x44px. Body text at least 16px. Line length max ~68ch.
- Monotone, calm, editorial. One accent colour only. Keep the existing dark theme,
  support light via prefers-color-scheme. All colours as CSS variables.
- Fluid type with clamp(). No layout shift: every image has width/height.
- Respect prefers-reduced-motion. Motion is subtle (opacity/translate, <200ms).
- Lighthouse mobile target: Performance 90+, Accessibility 100, SEO 100.

Copy rules:
- Plain English. No jargon, no buzzwords, no em dash or double dash characters.
  Use colons, commas or full stops instead.
- Never invent numbers, clients or metrics. If content is missing, leave a
  visible TODO and tell me.
- Do not claim Rust or MySQL anywhere.

Content lives in typed data files under /content (not hard-coded in JSX), so I
can edit copy without touching components.
