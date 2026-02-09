/**
 * Template registry for commercial demo variants.
 */

export type TemplateVariant = "editorial" | "romantic" | "minimal" | "luxury" | "story";

export type SectionType =
  | "hero"
  | "story"
  | "gallery"
  | "rsvp"
  | "registry"
  | "guestbook"
  | "events"
  | "dresscode"
  | "faq";

export interface TemplateSection {
  id: string;
  type: SectionType;
  variant: string;
  name: string;
  description: string;
  component: string;
  enabled: boolean;
  order: number;
  settings?: Record<string, unknown>;
}

export interface TemplateConfig {
  id: string;
  name: string;
  variant: TemplateVariant;
  description: string;
  preview: string;
  sections: TemplateSection[];
  theme: {
    colors: {
      primary: string;
      accent: string;
      text: string;
      background: string;
    };
    fonts: {
      display: string;
      body: string;
      script: string;
    };
  };
}

export const templateVariants: Record<TemplateVariant, TemplateConfig> = {
  editorial: {
    id: "editorial-premium",
    name: "Editorial Premium",
    variant: "editorial",
    description: "Magazine-inspired composition with asymmetrical image and text rhythm.",
    preview: "/templates/editorial-preview.jpg",
    sections: [
      {
        id: "hero-editorial",
        type: "hero",
        variant: "asymmetrical",
        name: "Asymmetrical Hero",
        description: "Large image with offset editorial text stack",
        component: "demo/editorial/hero",
        enabled: true,
        order: 1,
      },
      {
        id: "story-editorial",
        type: "story",
        variant: "magazine-columns",
        name: "Magazine Story",
        description: "Two-column editorial narrative with pull quote",
        component: "demo/editorial/story",
        enabled: true,
        order: 2,
      },
      {
        id: "events-editorial",
        type: "events",
        variant: "runway-list",
        name: "Runway Schedule",
        description: "Numbered event lineup in editorial format",
        component: "demo/editorial/events",
        enabled: true,
        order: 3,
      },
    ],
    theme: {
      colors: {
        primary: "#171310",
        accent: "#9a6a3f",
        text: "#261f18",
        background: "#f4ede6",
      },
      fonts: {
        display: "Playfair Display",
        body: "Manrope",
        script: "Great Vibes",
      },
    },
  },
  romantic: {
    id: "romantic-floral",
    name: "Romantic Floral",
    variant: "romantic",
    description: "Soft invitation-style layout with floral motion and rounded decorative blocks.",
    preview: "/templates/romantic-preview.jpg",
    sections: [
      {
        id: "hero-romantic",
        type: "hero",
        variant: "invitation-card",
        name: "Invitation Hero",
        description: "Rounded invitation card with floral ornaments",
        component: "demo/romantic/hero",
        enabled: true,
        order: 1,
      },
      {
        id: "story-romantic",
        type: "story",
        variant: "petal-timeline",
        name: "Petal Timeline",
        description: "Gentle emotional timeline in soft cards",
        component: "demo/romantic/story",
        enabled: true,
        order: 2,
      },
      {
        id: "gallery-romantic",
        type: "gallery",
        variant: "postcard-grid",
        name: "Postcard Gallery",
        description: "Photo cards with handwritten notes",
        component: "demo/romantic/gallery",
        enabled: true,
        order: 3,
      },
    ],
    theme: {
      colors: {
        primary: "#694d4b",
        accent: "#d98ca3",
        text: "#5f4745",
        background: "#fff6f5",
      },
      fonts: {
        display: "Playfair Display",
        body: "Manrope",
        script: "Dancing Script",
      },
    },
  },
  minimal: {
    id: "modern-minimal",
    name: "Modern Minimal",
    variant: "minimal",
    description: "Korean-inspired minimal composition with strict spacing and subtle micro motion.",
    preview: "/templates/minimal-preview.jpg",
    sections: [
      {
        id: "hero-minimal",
        type: "hero",
        variant: "centered-silence",
        name: "Centered Hero",
        description: "Whitespace-first centered announcement",
        component: "demo/minimal/hero",
        enabled: true,
        order: 1,
      },
      {
        id: "events-minimal",
        type: "events",
        variant: "line-schedule",
        name: "Line Schedule",
        description: "Minimal timeline with typography emphasis",
        component: "demo/minimal/events",
        enabled: true,
        order: 2,
      },
      {
        id: "gallery-minimal",
        type: "gallery",
        variant: "mono-grid",
        name: "Monochrome Gallery",
        description: "Quiet gallery with restrained interactions",
        component: "demo/minimal/gallery",
        enabled: true,
        order: 3,
      },
    ],
    theme: {
      colors: {
        primary: "#101010",
        accent: "#585858",
        text: "#1c1c1c",
        background: "#f7f7f5",
      },
      fonts: {
        display: "Cormorant Garamond",
        body: "Manrope",
        script: "Great Vibes",
      },
    },
  },
  luxury: {
    id: "dark-luxury",
    name: "Dark Luxury",
    variant: "luxury",
    description: "Cinematic black-and-gold luxury experience inspired by fashion branding.",
    preview: "/templates/luxury-preview.jpg",
    sections: [
      {
        id: "hero-luxury",
        type: "hero",
        variant: "cinematic",
        name: "Cinematic Hero",
        description: "Fullscreen hero with strong visual framing",
        component: "demo/luxury/hero",
        enabled: true,
        order: 1,
      },
      {
        id: "story-luxury",
        type: "story",
        variant: "brand-editorial",
        name: "Brand Story",
        description: "Dark editorial narrative with statement typography",
        component: "demo/luxury/story",
        enabled: true,
        order: 2,
      },
      {
        id: "rsvp-luxury",
        type: "rsvp",
        variant: "club-entry",
        name: "Private RSVP",
        description: "Premium RSVP card with gold accents",
        component: "demo/luxury/rsvp",
        enabled: true,
        order: 3,
      },
    ],
    theme: {
      colors: {
        primary: "#e1bf86",
        accent: "#b88d52",
        text: "#f3e0bd",
        background: "#0b0a0a",
      },
      fonts: {
        display: "Playfair Display",
        body: "Manrope",
        script: "Great Vibes",
      },
    },
  },
  story: {
    id: "interactive-story",
    name: "Interactive Story",
    variant: "story",
    description: "Immersive chapter-based scrolling journey with timeline motion and parallax imagery.",
    preview: "/templates/story-preview.jpg",
    sections: [
      {
        id: "hero-story",
        type: "hero",
        variant: "chapter-cover",
        name: "Chapter Cover",
        description: "Immersive opening chapter",
        component: "demo/story/hero",
        enabled: true,
        order: 1,
      },
      {
        id: "story-story",
        type: "story",
        variant: "scroll-chapters",
        name: "Scroll Chapters",
        description: "Interactive chapter progression with timeline rail",
        component: "demo/story/chapters",
        enabled: true,
        order: 2,
      },
      {
        id: "events-story",
        type: "events",
        variant: "timeline-finale",
        name: "Finale Timeline",
        description: "Story ending with ceremony timeline",
        component: "demo/story/events",
        enabled: true,
        order: 3,
      },
    ],
    theme: {
      colors: {
        primary: "#1b2333",
        accent: "#7588ff",
        text: "#1f2a3d",
        background: "#f0f3ff",
      },
      fonts: {
        display: "Playfair Display",
        body: "Manrope",
        script: "Dancing Script",
      },
    },
  },
};

export const sectionLibrary: Record<string, TemplateSection> = {
  "hero-asymmetrical": {
    id: "hero-asymmetrical",
    type: "hero",
    variant: "asymmetrical",
    name: "Asymmetrical Editorial Hero",
    description: "Large image with offset typography composition",
    component: "demo/editorial/hero",
    enabled: true,
    order: 1,
  },
  "hero-invitation": {
    id: "hero-invitation",
    type: "hero",
    variant: "invitation-card",
    name: "Invitation Hero",
    description: "Rounded invitation card with floral decoration",
    component: "demo/romantic/hero",
    enabled: true,
    order: 1,
  },
  "hero-centered": {
    id: "hero-centered",
    type: "hero",
    variant: "centered-silence",
    name: "Minimal Center Hero",
    description: "Whitespace-focused centered hero",
    component: "demo/minimal/hero",
    enabled: true,
    order: 1,
  },
  "hero-cinematic": {
    id: "hero-cinematic",
    type: "hero",
    variant: "cinematic",
    name: "Cinematic Hero",
    description: "Fullscreen dark hero with filmic framing",
    component: "demo/luxury/hero",
    enabled: true,
    order: 1,
  },
  "hero-chapter": {
    id: "hero-chapter",
    type: "hero",
    variant: "chapter-cover",
    name: "Story Chapter Cover",
    description: "Narrative intro with chapter framing",
    component: "demo/story/hero",
    enabled: true,
    order: 1,
  },
};

export function getTemplate(variant: TemplateVariant): TemplateConfig {
  return templateVariants[variant];
}

export function getAllTemplates(): TemplateConfig[] {
  return Object.values(templateVariants);
}

export function createCustomTemplate(
  name: string,
  variant: TemplateVariant,
  sections: TemplateSection[]
): TemplateConfig {
  const baseTemplate = templateVariants[variant];

  return {
    ...baseTemplate,
    id: `custom-${Date.now()}`,
    name,
    sections,
  };
}
