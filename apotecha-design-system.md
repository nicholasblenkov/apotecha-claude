# Apotecha Design System

Extracted from Figma file: `InXQ0U2GbHqUFalfLNYQ0R` (node `76:2` — Desktop Product Page)

---

## Brand Identity

**Brand:** Apotecha
**Tagline:** Clean hair. Fewer ingredients.
**Positioning:** Premium natural haircare — rice protein shampoo bars, botanical extracts, zero-waste philosophy.
**Currency:** DKK (Danish Krone)
**Logo:** "Apotecha" wordmark in Futura PT Book with a horizontal rule underneath and a superscript "©"

---

## Color Palette

### Core Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#445c1f` | Primary text, borders, icons, headings |
| `--color-background` | `#e9ede6` | Page background, card backgrounds |
| `--color-cta-dark` | `#000000` | Add to Cart button background |
| `--color-cta-text` | `#e9ede6` | Button text on dark backgrounds |

### Green Gradient Scale

| Token | Hex | Usage |
|---|---|---|
| `--color-green-light` | `#587c25` | Gradient start (hero/product images) |
| `--color-green-dark` | `#2a3e0d` | Gradient end (hero/product images) |
| `--color-green-shadow` | `#31411a` | Shadow on product imagery |
| `--color-green-muted` | `rgba(65, 93, 25, 0.21)` | Subscription panel, info panels bg |

### Accent / Secondary

| Token | Hex | Usage |
|---|---|---|
| `--color-sage` | `#c6cfbb` | Comparison card background |
| `--color-mint` | `#75a68a` | "Why Apotecha" gradient accent |
| `--color-watermark` | `#969b6d` | Logo watermark on product imagery |

---

## Typography

**Font Family:** Futura PT (all weights)

### Type Scale

| Token | Font | Weight | Size | Line Height | Usage |
|---|---|---|---|---|---|
| `--type-headline` | Futura PT Demi | 500 | 32px | 0.8 | Section headlines, product title |
| `--type-testimonial` | Futura PT Demi | 500 | 26px | 0.8 | Testimonial quotes |
| `--type-section-title` | Futura PT Demi | 500 | 24px | 0.8 | Feature section titles (Amino Acids, etc.) |
| `--type-subhead` | Futura PT Bold | 700 | 16px | 0.8 | Bold callouts within body text |
| `--type-body` | Futura PT Book | 300 | 16px | 0.8 | Body copy, bullet points, descriptions |
| `--type-body-medium` | Futura PT Medium | 400 | 16px | 0.8 | Price, CTA labels, purchase options, FAQ items |
| `--type-small` | Futura PT Book | 300 | 12px | 0.8 | Buy Now Pay Later, Klarna label |
| `--type-small-medium` | Futura PT Medium | 400 | 13px | 0.8 | Bundle item list |
| `--type-logo` | Futura PT Book | 300 | ~30px | normal | Brand wordmark |
| `--type-logo-copyright` | Futura PT Heavy | 800 | ~9px | normal | Copyright symbol |

### Font Weights Available

| Weight Name | CSS Weight | Class |
|---|---|---|
| Book | 300 | `font-book` |
| Medium | 400 | `font-medium` |
| Demi | 500 | `font-demi` |
| Bold | 700 | `font-bold` |
| Heavy | 800 | `font-heavy` |
| Demi Oblique | 500 italic | `font-demi-italic` |

### Text Styling

- Headlines use `text-transform: capitalize`
- CTA text is uppercase on black buttons ("ADD TO CART")
- Leading is tight across the board (0.8 line-height)
- No letter-spacing adjustments detected

---

## Spacing

Based on layout analysis:

| Token | Value | Usage |
|---|---|---|
| `--space-xs` | 5px | FAQ item gaps |
| `--space-sm` | 10px | Bullet list gaps, feature section internal gaps |
| `--space-md` | 18px | Testimonial section gaps |
| `--space-lg` | 27-31px | Comparison checkmark row spacing |
| `--space-xl` | 33px | Feature icon column gaps |
| `--space-section` | ~100px | Between major page sections |

---

## Components

### 1. Logo
- "Apotecha" in Futura PT Book, ~30px
- Horizontal rule beneath the text (~116px wide)
- Superscript "©" in Futura PT Heavy, ~9px
- Color adapts: `#445c1f` on light bg, `#969b6d` on product imagery

### 2. Star Rating
- 5 stars in a row, 22x22px each
- 8px gap between stars (30px center-to-center)
- Total width: 142px
- Used in product info and testimonial sections

### 3. Product Title
- Futura PT Demi, 32px, capitalize
- Two lines: "Shampoo Bar" / "Rice protein & green tea"
- Color: `#445c1f`

### 4. Price Display
- Futura PT Medium, 16px, capitalize
- Format: "DKK 169.00"
- Color: `#445c1f`

### 5. Purchase Options (Radio Selector)
- **One-time purchase:** Dark green bg (`#445c1f`), text `#e9ede6`, 350x40px
- **Subscription:** Muted green bg (`rgba(65,93,25,0.21)`), text `#445c1f`, 350x130px
- Radio circle icon (18x18px) on the left
- Futura PT Medium, 16px

### 6. Quantity Selector
- Border: 1px solid `#445c1f`
- Size: 100x40px
- Layout: `–` | divider | `1` | divider | `+`
- Vertical line dividers between controls
- Text: Futura PT Demi, 16px, `#445c1f`

### 7. Add to Cart Button (CTA)
- Background: `#000000`
- Text: `#e9ede6`, Futura PT Medium, 16px
- Size: 238x40px (main), 193x40px (bundle variant)
- No border-radius (sharp corners)

### 8. Money Back Guarantee Badge
- Background: `rgba(65,93,25,0.21)`
- Size: 350x64px
- Contains: 40px circle with "30 DAY" text inside
- Body: "Not satisfied? Claim our Money Back Guarantee"
- Futura PT Book, 16px

### 9. Product Benefit Bullets
- Bulleted list (`<ul>` with disc markers)
- Futura PT Book, 16px with bold (`Futura PT Bold`) for key phrases
- Color: `#445c1f`
- 10px gap between items
- 24px left margin for bullet indent

### 10. Hero Product Image
- Container: 681x681px square
- Background: linear gradient from `#587c25` to `#2a3e0d`
- Product photo with drop shadow
- Logo watermark overlay in `#969b6d`
- Botanical/leaf imagery at reduced opacity as background elements

### 11. Testimonial Section
- Star rating (centered)
- Quote: Futura PT Demi, 26px, `#e9ede6`
- Attribution: Futura PT Demi Oblique, 22px, capitalize
- Background inherits from product image section

### 12. "4 Reasons" Section
- Heading: "4 reasons / why women are switching to rice protein"
- Numbered items (1-4): Futura PT Demi 32px heading + Futura PT Book 16px body
- Left side: 681x681px green gradient image
- Right side: text content, 345px wide

### 13. "Why Apotecha" Comparison Section
- Full-width card with rounded corners (7px radius)
- Background: gradient from `#e9ede6` to `#75a68a`
- Three columns:
  - Apotecha column: green gradient card (146x526px, 24px radius) with horizontal rule rows and checkmarks
  - Features column: sage bg (`#c6cfbb`), 277x421px, 24px radius, lists 7 features
  - "Others" column: border-only card (1px solid black), 146x526px, 24px radius

### 14. FAQ Accordion
- Title: "Frequently Asked Questions" (Futura PT Demi, 32px, centered)
- Items: 1068px wide, 53px tall
- Border: 1px solid `#445c1f`
- 5px gap between items
- Question text: Futura PT Medium, 16px, capitalize
- Chevron/arrow icon on the right side
- 27px left padding

### 15. Feature Icons Row
- Three columns with 33px gap
- Each: icon (30x~37px) + title (Futura PT Demi, 24px) + description (Futura PT Book, 16px)
- Icons: rice protein, botanical extracts, zero waste
- 10px gap between icon and text block

### 16. Product Bundle / "The Set"
- Background: `rgba(65,93,25,0.21)`
- Size: 350x291px
- Contains: 3 product thumbnails (65x65px with border), product list, total price
- Individual product frames with `#e9ede6` bg and `#445c1f` border (0.918px)
- Includes its own "ADD TO CART" button

### 17. Klarna / Buy Now Pay Later
- Small text: Futura PT Book, 12px
- "Buy Now, Pay Later" label + "KLARNA" text
- Positioned above the product bullets

---

## Layout System

### Page Width
- Design width: 1440px
- Content inset: ~50px from left edge for imagery
- Right content panel starts at ~60% + 40px
- FAQ/comparison sections: ~122px left margin, ~1068-1196px width

### Grid Pattern
- **Product page top:** Split layout
  - Left 60%: Product imagery (681px square blocks)
  - Right 40%: Product info, purchase options, CTAs
- **Full-width sections:** Centered with ~122px side margins
- **Feature sections:** 3-column layout with 33px gaps

### Spacing Between Sections
- Product image blocks stack vertically with minimal gap
- Major content sections have ~100-200px vertical spacing
- Internal component spacing uses 10px as the base unit

---

## Shadows

| Usage | Value |
|---|---|
| Product image (hero) | `19.117px -7.758px 28.453px rgba(0,0,0,0.25)` |
| Product image (alternate) | `80px -12px 74.7px #31411a` |
| Product thumbnails | `0.918px 0px 10.379px rgba(0,0,0,0.13)` |

---

## Border Radius

| Usage | Value |
|---|---|
| Buttons (CTA) | 0px (sharp corners) |
| "Why Apotecha" outer card | 7px |
| Comparison column cards | 24px |
| Product images | 0px |

---

## Iconography

- **Style:** Line/outline icons in `#445c1f`
- **Size:** ~30x30-38px
- **Icons identified:**
  - Rice protein (grain/stalk)
  - Botanical extracts (leaf/plant)
  - Zero waste (circular/recycle)
  - Radio button (circle outline / filled)
  - Chevron/arrow (FAQ expand)
  - Star (rating)
  - Checkmark (comparison table)
  - X mark (comparison "Others" column)

---

## CSS Custom Properties (Ready to Use)

```css
:root {
  /* Colors */
  --color-primary: #445c1f;
  --color-background: #e9ede6;
  --color-cta-dark: #000000;
  --color-cta-text: #e9ede6;
  --color-green-light: #587c25;
  --color-green-dark: #2a3e0d;
  --color-green-muted: rgba(65, 93, 25, 0.21);
  --color-sage: #c6cfbb;
  --color-mint: #75a68a;
  --color-watermark: #969b6d;
  --color-green-shadow: #31411a;

  /* Typography */
  --font-family: 'Futura PT', sans-serif;
  --font-weight-book: 300;
  --font-weight-medium: 400;
  --font-weight-demi: 500;
  --font-weight-bold: 700;
  --font-weight-heavy: 800;

  /* Type Scale */
  --text-headline: 32px;
  --text-testimonial: 26px;
  --text-section-title: 24px;
  --text-body: 16px;
  --text-small: 12px;
  --text-logo: 30px;

  /* Line Height */
  --leading-tight: 0.8;
  --leading-normal: normal;

  /* Spacing */
  --space-xs: 5px;
  --space-sm: 10px;
  --space-md: 18px;
  --space-lg: 30px;
  --space-xl: 33px;

  /* Borders */
  --radius-none: 0px;
  --radius-sm: 7px;
  --radius-lg: 24px;
  --border-color: #445c1f;
}
```

---

## Page Sections (Top to Bottom)

1. **Header** — Logo wordmark, centered
2. **Product Hero** — Split layout: green gradient image (left) + product info (right)
3. **Product Info** — Title, stars, price, purchase options, quantity, ATC
4. **Benefits** — Bullet points with bold highlights
5. **Money Back Guarantee** — 30-day badge
6. **Secondary Image** — Lifestyle/usage photography
7. **Bundle / The Set** — Cross-sell with 3 products
8. **Testimonial** — Star rating + quote + attribution (overlaid on image)
9. **Product Features Image** — Green gradient with botanical annotations
10. **4 Reasons** — Numbered benefits (Volume, Strength, Shine, Balance)
11. **Why Apotecha** — 3-column comparison table
12. **FAQ** — Accordion-style questions
13. **Clean Ingredients** — Headline + 3 icon feature blocks
