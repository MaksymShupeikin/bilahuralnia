---
name: Біла Гуральня / Bila Huralnia
description: Dark spirits-house shop where every bottle sits in a lit grey niche and gold is spent only on rules, small labels and the buy action.
colors:
  ground: "#0e0c0a"
  raised: "#17130f"
  raised-2: "#201a14"
  ink: "#ede4d3"
  ink-2: "#b5a893"
  ink-3: "#8a7f6e"
  gold: "#c9a45c"
  gold-hi: "#e0bf7d"
  on-gold: "#15110c"
  line: "rgb(237 228 211 / 0.14)"
  line-gold: "rgb(201 164 92 / 0.45)"
  niche: "#d7d5d9"
  danger: "#e58a6f"
typography:
  display:
    fontFamily: "Spectral, 'Times New Roman', serif"
    fontSize: "clamp(2.75rem, 1.6rem + 4.6vw, 5.75rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Spectral, 'Times New Roman', serif"
    fontSize: "clamp(2rem, 1.4rem + 2.4vw, 3.25rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Spectral, 'Times New Roman', serif"
    fontSize: "1.625rem"
    fontWeight: 300
    lineHeight: 1.1
  figure:
    fontFamily: "Spectral, 'Times New Roman', serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "'tnum', 'lnum'"
  body:
    fontFamily: "Arsenal, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Arsenal, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.18em"
rounded:
  none: "0"
spacing:
  gutter: "clamp(1rem, 0.4rem + 2.6vw, 3.5rem)"
  section: "clamp(5rem, 3.5rem + 6vw, 9.5rem)"
  max: "90rem"
  header: "4.75rem"
  target: "2.75rem"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.on-gold}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1.75rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.gold-hi}"
    textColor: "{colors.on-gold}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1.75rem"
    height: "3.25rem"
  button-small:
    padding: "0 1.1rem"
    height: "2.75rem"
  add-line:
    backgroundColor: "transparent"
    textColor: "{colors.gold}"
    typography: "{typography.label}"
    padding: "0 0 0 0.9rem"
    height: "2.75rem"
  add-line-added:
    textColor: "{colors.ink}"
  add-icon:
    backgroundColor: "transparent"
    textColor: "{colors.gold}"
    rounded: "{rounded.none}"
    size: "2.75rem"
  input:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
    height: "3.25rem"
  tile-niche:
    backgroundColor: "{colors.niche}"
    rounded: "{rounded.none}"
  checkout-panel:
    backgroundColor: "{colors.raised}"
    padding: "clamp(1.5rem, 1rem + 2vw, 2.5rem)"
  cart-count:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.on-gold}"
    size: "1.25rem"
  dialog:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
    padding: "clamp(2rem, 1rem + 4vw, 3.5rem)"
  toast:
    backgroundColor: "{colors.raised-2}"
    textColor: "{colors.ink}"
    padding: "0.9rem 1.25rem"
---

# Design System: Біла Гуральня / Bila Huralnia

## Overview

**Creative North Star: "The Lit Vitrine"**

A warm near-black house where the only bright things are the bottles. Each bottle stands in a pale grey studio niche like an object in a display case; everything around it is dark, quiet and ruled with fine hairlines. The brand film carries the opening, a light high-contrast serif carries the names, and a Cyrillic-native semi-grotesque carries everything practical. Gold is antique and scarce: it marks rules, small tracked labels, prices of note and the single action that buys.

Density is low and unhurried. Sections breathe on a large fluid rhythm, corners are square everywhere, and depth comes from tone and photography rather than from cards. Motion is slow and decelerating (one long out-expo curve), used for a film push-in, a headline that settles once, a hairline that draws under hovered navigation, a filter crossfade and an add button that confirms itself.

**Key Characteristics:**
- Warm near-black ground with one lifted surface; ivory ink in three steps.
- Bottles always on the grey niche or as alpha cut-outs with a soft drop shadow; never on the dark ground as a flat rectangle.
- Light serif (Spectral 300) for names and headings; Arsenal for body, labels and controls.
- Square corners, 1px hairlines, gold reserved for rules, labels and the buy action.
- Authored 1.5px square-cap line icons on a 24 grid.
- One easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`), long durations (0.3s to 1.6s, film 14s).

## Colors

A warm brown-black palette with ivory ink and one antique gold accent; the only cool colour is the grey of the bottle niche.

### Primary
- **Antique Gold** (gold): the primary button fill, the add-to-cart text and outline, gold hairlines, active filter underline, cart count, selection, focus ring, caret, list markers and contact icons. Text on it is always On-Gold.
- **Lit Gold** (gold-hi): hover state of every gold fill and gold text. Never a resting colour.
- **On-Gold** (on-gold): the dark ink used on gold fills (buttons, cart count, selection, skip link).

### Neutral
- **Cellar Black** (ground): page ground, header when solid, footer, mobile menu sheet.
- **Cask Brown** (raised): the one lifted surface: gifts section band, checkout panel, age-gate dialog, inputs, checkbox wells.
- **Deep Cask** (raised-2): floating notices only (the add-to-cart toast).
- **Ivory** (ink): headings, names, body on raised surfaces, primary readable text.
- **Parchment** (ink-2): secondary text: leads, descriptions, meta lines, field captions, footer.
- **Faded Parchment** (ink-3): tertiary text: placeholders, spec keys, back link, legal and notes.
- **Ivory Hairline** (line, ivory at 14%): default 1px dividers between rows, columns and blocks.
- **Gold Hairline** (line-gold, gold at 45%): the leading rule of a list or block, link underlines, add-button outlines, dialog and toast borders.
- **Studio Grey** (niche): background of every product photo niche; matches the studio sweep of the photography so padded photos read edge-to-edge.
- **Ember** (danger): invalid field border, error text, remove-line hover.

### Named Rules
**The Spent Gold Rule.** Gold appears as a fill only on the single buy or proceed action in view and the cart count; elsewhere it is a 1px line, a small label or an icon stroke. A second gold-filled button on one screen is a mistake.

**The One Lift Rule.** There is one lifted surface (raised). Floating notices may use raised-2; nothing stacks a third tone.

## Typography

**Display Font:** Spectral (with Times New Roman, serif), weights 300, 300 italic, 400
**Body Font:** Arsenal (with Helvetica Neue, Arial, sans-serif), weights 400, 700

**Character:** A light, slightly sharp book serif set large and tight for names, against a Ukrainian humanist semi-grotesque that keeps Cyrillic text plain and legible. Both are loaded with Cyrillic and Latin subsets; both languages are first-class.

### Hierarchy
- **Display** (Spectral 300, `clamp(2.75rem, 1.6rem + 4.6vw, 5.75rem)`, 1.05): hero headline, product name, page titles (cart, info). One per page.
- **Headline** (Spectral 300, `clamp(2rem, 1.4rem + 2.4vw, 3.25rem)`, 1.05): section heads, gift feature name, mobile menu links, dialog title. Closing quote uses the same size in 300 italic at 1.15.
- **Title** (Spectral 300, 1.625rem, 1.1): product tile and gift-row names, cart line names, checkout and info block headings.
- **Figure** (Spectral 400, 1.25rem, 1, tabular lining numerals): prices, spec values, line sums, fact terms. Product kind line uses Spectral 300 italic at this size in gold.
- **Body** (Arsenal 400, 1.0625rem, 1.6): running text, capped at 46 to 62ch.
- **Label** (Arsenal 700, 0.8125rem, 0.18em tracking, uppercase): buttons, navigation, filters, add-to-cart, list titles. Spec keys use the same treatment at 0.6875rem in Faded Parchment.
- **Small** (Arsenal 400, 0.8125rem): meta lines, field captions, notes, legal.

### Named Rules
**The Light Serif Rule.** Headings are Spectral at weight 300 and never bolded; emphasis inside the serif comes from size or italic, not weight.

**The Tabular Price Rule.** Every price, volume, ABV and quantity is set with tabular lining numerals.

**The Label Is Not a Kicker Rule.** Tracked caps name a control, a list or a spec key. They never sit above a heading as an eyebrow.

## Layout

Content sits in a centred container capped at 90rem with a fluid side gutter (`clamp(1rem, 0.4rem + 2.6vw, 3.5rem)`); full-bleed is reserved for the hero film, the closing barrel photograph and the product photo half of the product page. Sections are separated by a large fluid vertical rhythm (`clamp(5rem, 3.5rem + 6vw, 9.5rem)`), section heads sit on a flex row with the heading left and controls right.

- **Home hero:** full viewport height (100svh) film with the header overlaid; headline centred; a band of four classics pinned to the bottom edge (4 columns, 2 below 1100px, horizontal snap scroller below 600px).
- **Collection:** 4-column grid, 3 below 1100px, 2 below 760px; filters become a horizontal scroller on phones.
- **Product page:** split 1.05fr photo to 1fr info at full remaining viewport height; stacks below 900px with the photo capped at 70svh.
- **Editorial blocks** (house, delivery) use a 12-column grid with gutter gaps; text columns cap at 52 to 60ch.
- **Breakpoints in use:** 1100px, 900px, 760px, 600px, 520px (plus local 1000/960/700/560/420 adjustments).
- **Touch targets:** interactive controls are at least 2.75rem tall.

## Elevation & Depth

Flat by default. Depth comes from the tone step between ground and raised, from gradient scrims over photography and from the lit niche itself. Shadows exist in exactly three places: floating overlays (age-gate dialog, toast), and alpha cut-out bottles, which carry a soft drop shadow so they sit on the dark ground. The header becomes a 94% ground with a 10px backdrop blur once scrolled or opened.

### Shadow Vocabulary
- **Dialog** (`box-shadow: 0 40px 80px -20px rgb(0 0 0 / 0.7)`): the age-gate dialog over a blurred 82% backdrop.
- **Notice** (`box-shadow: 0 18px 40px -12px rgb(0 0 0 / 0.6)`): the add-to-cart toast.
- **Bottle cut-out** (`filter: drop-shadow(0 8px 14px rgb(0 0 0 / 0.55))`, smaller `0 6px 10px / 0.5` in the hero band): cut-out bottles in rows and cart lines.

### Named Rules
**The Flat Surface Rule.** Panels, tiles and sections never carry a shadow; only things that float above the page (dialog, toast) or a cut-out bottle do.

**The Scrim Rule.** Text over photography or film sits on a ground-coloured gradient scrim (and, in the hero, a soft radial shade behind the copy); never place ivory text on an unshaded image.

## Shapes

Square everywhere: buttons, inputs, steppers, tiles, niches, dialog, toast, cart count and checkboxes have no radius. The only round forms are radio inputs, kept circular so they read as radios. Edges are drawn with 1px hairlines; a gold hairline marks the top of a list or block, an ivory hairline divides its rows. The section rule is a 1px gold line fading to transparent. Product niches are 4:5 portrait; the gift feature is 1.28:1.

## Components

### Buttons
Square, tracked, quietly heavy.
- **Shape:** square (0), minimum height 3.25rem, label type.
- **Primary:** Antique Gold fill and border, On-Gold text, 0 1.75rem padding; optional trailing arrow icon at 1rem.
- **Hover / Focus:** fill shifts to Lit Gold over 0.4s on the house easing; focus is a 2px gold outline offset 3px.
- **Ghost:** transparent, Ivory text, ivory border at 50%; hover adds an 8% ivory wash and a full Ivory border. Over film it takes a 62% ground fill for legibility.
- **Small:** 2.75rem tall, 0 1.1rem padding. Disabled is 50% opacity with a progress cursor.

### Add to Cart (signature)
A quiet line button that confirms itself.
- **Line (in tiles):** gold label with plus icon, separated from the price by a gold-hairline left rule; hover to Lit Gold. On add it swaps to an Ivory check and "added" label, and the header count bumps (scale 1.35 over 0.6s).
- **Icon (hero band):** 2.75rem square with gold-hairline border, icon only; hover gives a gold border and 12% gold wash.
- **Filled (product page):** sits beside a three-cell quantity stepper and takes the primary-button look; once added it goes transparent with gold text.

### Product Tile
- **Niche:** 4:5 Studio Grey well with the padded studio photo cover-fit; on hover the photo scales to 1.035 over 1.2s.
- **Text:** Title-size serif name (the whole tile is the link), Parchment meta line (kind, volume, ABV) in small tracked type.
- **Buy row:** ivory hairline above, Figure-size price left, line add button right; wraps on phones.

### Inputs / Fields
- **Style:** Cask Brown fill, 1px ivory hairline, square, 3.25rem minimum, 0.75rem 1rem padding; caption above in small Parchment with 0.08em tracking.
- **Focus:** border turns gold, no glow; hover lifts the border to 30% ivory.
- **Error:** Ember border and Ember small text below.
- **Check / radio:** 1.25rem square well (radio round) with a gold inner square that scales in on check.

### Navigation
- **Header:** 4.75rem bar, logo left, label-type links centred, language and cart right. Over the hero it is transparent and fixed; on scroll it becomes 94% ground with blur and a hairline. Hover draws a 1px gold underline from the left over 0.5s.
- **Filters:** label-type buttons in Parchment; active is Ivory with the same gold underline drawn by scaleX; a gold superscript count.
- **Mobile:** below 900px a menu icon opens a full-height ground sheet of Headline-size serif links divided by hairlines.

### Lists and Rows
Gift rows, cart lines and the hero band are hairline lists: a gold rule on top, ivory rules between rows, a cut-out bottle at left, serif name, figure price, add or stepper at right.

### Age Gate
A native dialog on Cask Brown with a gold-hairline border, the ivory monogram, a Headline title, Parchment copy and two buttons; it rises 0.75rem and fades in over 0.7s over a blurred backdrop.

### Icons
Authored line icons on a 24 grid: 1.5px stroke, square caps, mitre joins, `currentColor`. Set 1 to 1.5rem; gold when they mark contact details or actions, inheriting otherwise.

### Imagery
Only the brand's own photographs and film. Studio bottle shots are padded to 4:5 on the matching grey and live in niches; alpha cut-outs are used in dark-ground rows; barrel and cellar photos are dimmed and desaturated (`brightness(0.78) saturate(0.8) contrast(1.08)`) and sit under ground-coloured scrims; logos are the supplied marks recoloured ivory.

## Do's and Don'ts

### Do:
- **Do** keep every bottle on the Studio Grey niche or as a cut-out with the bottle drop shadow.
- **Do** spend gold on one filled action per view and otherwise as 1px rules, labels and icon strokes.
- **Do** set headings in Spectral 300 and prices in tabular lining numerals.
- **Do** use the house easing `cubic-bezier(0.16, 1, 0.3, 1)` for every transition, and switch the film push-in and headline settle off under reduced motion.
- **Do** keep corners square and edges as 1px hairlines; a gold rule leads a list, ivory rules divide it.
- **Do** keep controls at least 2.75rem tall and focus visible as a 2px gold outline.

### Don't:
- **Don't** put a shadow on a tile, panel or section; shadows belong to the dialog, the toast and cut-out bottles.
- **Don't** introduce a radius other than the round radio.
- **Don't** set tracked caps above a heading as an eyebrow.
- **Don't** add a third surface tone or a second accent hue; Ember is for errors only.
- **Don't** use stock or generated imagery, or redraw the logo; use the supplied photos, film and marks.
- **Don't** set ivory text directly on photography without a ground scrim.
