# Implementation Plan: Legal Compliance & Accessibility for Casa de La Abuela Irene

## 1. Objectives
The goal is to transform the 'Casa de La Abuela Irene' website into a legally compliant and accessible platform while maintaining its cozy, welcoming "heirloom" aesthetic.

## 2. Implementation Steps

### Phase 1: Legal Infrastructure (Pages & Routing)
**Goal:** Establish the necessary legal foundations.

- **Create Legal Page Components:**
  - `src/pages/PrivacyPolicy.jsx`: Privacy Policy.
  - `src/pages/TermsConditions.jsx`: Terms & Conditions.
  - `src/pages/CookiePolicy.jsx`: Cookie Policy.
  - `src/pages/RefundPolicy.jsx`: Refund Policy.
  - *Design Note:* These pages should use a clean, readable layout (e.g., `AuthLayout` or a new `LegalLayout`) that maintains the site's fonts and colors but prioritizes legibility.
- **Update Routing:**
  - Modify `src/App.jsx` to include routes for these four new pages.
- **Footer Integration:**
  - Update `src/components/landing/FooterSection.jsx` to add links to these pages in the bottom bar.

### Phase 2: Consent & Data Privacy
**Goal:** Ensure users are informed and agree to data collection.

- **Form Updates:**
  - Add a required "I agree to the Privacy Policy and Terms & Conditions" checkbox to:
    - `src/pages/Register.jsx`
    - `src/pages/Login.jsx`
    - `src/pages/ForgotPassword.jsx`
    - `src/pages/ResetPassword.jsx`
    - `src/components/landing/BookingBar.jsx`
- **Cookie Consent Banner:**
  - Create `src/components/ui/CookieBanner.jsx`: A non-intrusive banner that appears on first load, explaining the use of Google Maps/Fonts and providing an "Accept" button.
  - Integrate the banner in `src/App.jsx` so it persists across routes.
- **Google Maps Review:**
  - In `src/components/landing/LocationSection.jsx`, ensure the iframe uses `loading="lazy"` (already present) and consider a "Click to load map" placeholder to prevent automatic third-party tracking before consent.

### Phase 3: Accessibility (A11y)
**Goal:** Make the site usable for everyone.

- **Image Alt Texts:**
  - Audit and update `alt` attributes in:
    - `src/components\landing\GallerySection.jsx`
    - `src/components\landing\RoomsGrid.jsx`
    - `src/components\landing\AttractionsSection.jsx`
    - `src/components\landing\TestimonialsSlider.jsx`
    - `src/components\WhatsAppFloat.jsx`
    - `src/components\GoogleIcon.jsx`
  - *Requirement:* Descriptive text (e.g., "Cozy bedroom with oak furniture and warm lighting" instead of "room1.jpg").
- **Color Contrast Audit:**
  - Verify the current palette against WCAG 2.1 AA standards:
    - Bone (`#F8F5F0` approx) vs Foreground (`#262626` approx)
    - Terracotta (`#8C3B24`) vs Bone
    - Moss (`#4B5332` approx) vs Bone
  - Adjust CSS variables in `src/index.css` if contrast ratios are below 4.5:1 for normal text.
- **Keyboard Navigation:**
  - Test all forms and buttons (especially the custom `Button` and `Input` components in `src/components/ui/`) for focus rings and tab order.

### Phase 4: Content Honesty & Polish
**Goal:** Ensure transparency and accuracy.

- **Testimonial Audit:**
  - Review `src/components/landing/TestimonialsSlider.jsx`.
  - Remove any testimonials that cannot be verified or appear generic/fake.
- **Business Details:**
  - Ensure address in `LocationSection.jsx` and contact info in `FooterSection.jsx` are 100% accurate.
- **Microcopy Improvements:**
  - Change generic buttons to more descriptive ones (e.g., "Create account" $\rightarrow$ "Join our family").
- **Copyright Notice:**
  - Add `© {currentYear} Casa de La Abuela Irene. All rights reserved.` to `src/components/landing/FooterSection.jsx`.

## 3. Suggested Content Templates (The 'Cozy' Vibe)

### Privacy Policy Template (Simplified)
*"At Casa de La Abuela Irene, we treat your information like we treat our guests: with love and respect. We only collect your email and name to manage your stay. We promise never to sell your data—it stays safe in our digital attic."*

### Terms & Conditions Template (Simplified)
*"Our home is your home, but we ask for a few rules to keep the peace: [Insert rules about noise, pets, and check-in times]. By booking, you agree to treat our space with the same care you would your own grandmother's house."*

### Refund Policy Template (Simplified)
*"We understand that plans change. If you need to cancel, please let us know [X] days in advance for a full refund. Otherwise, we'll keep a small fee to cover the preparations we made for your arrival."*

## 4. Verification Strategy

- **Automated Testing:**
  - Run `axe-core` or Lighthouse accessibility audit on all main pages.
  - Use a contrast checker tool on the final CSS variables.
- **Manual Testing:**
  - **Tab Test:** Navigate the entire site using only the `Tab` and `Enter` keys.
  - **Consent Flow:** Verify that forms cannot be submitted without checking the consent box.
  - **Link Check:** Ensure all legal links in the footer lead to the correct pages.
- **Legal Review:** (Simulated) Cross-reference the final pages with local Colombian data protection laws (Ley 1581 de 2012).

## 5. Critical Files for Implementation
- `src/App.jsx` (Routing & Banner integration)
- `src/index.css` (Contrast adjustments)
- `src/components/landing/FooterSection.jsx` (Links & Copyright)
- `src/pages/Register.jsx` (Consent checkboxes)
- `src/components/landing/TestimonialsSlider.jsx` (Content audit)
