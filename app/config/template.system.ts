/**
 * TEMPLATE SYSTEM CONFIGURATION
 * 
 * This is the commercial template system that allows creating
 * multiple wedding website variants from reusable sections.
 */

export type TemplateVariant = "luxury" | "minimal" | "romantic" | "modern" | "traditional";
export type SectionType = "hero" | "story" | "gallery" | "rsvp" | "registry" | "guestbook" | "events" | "dresscode" | "faq";

export interface TemplateSection {
    id: string;
    type: SectionType;
    variant: string;
    name: string;
    description: string;
    component: string; // Component path
    enabled: boolean;
    order: number;
    settings?: Record<string, any>;
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

/**
 * AVAILABLE TEMPLATE VARIANTS
 */
export const templateVariants: Record<TemplateVariant, TemplateConfig> = {
    luxury: {
        id: "luxury-gold",
        name: "Luxury Gold",
        variant: "luxury",
        description: "Elegant gold accents with premium typography",
        preview: "/templates/luxury-preview.jpg",
        sections: [
            {
                id: "hero-luxury",
                type: "hero",
                variant: "collage",
                name: "Hero with Photo Collage",
                description: "Large hero section with 3-photo collage",
                component: "sections/HeroCollage",
                enabled: true,
                order: 1,
            },
            {
                id: "story-luxury",
                type: "story",
                variant: "timeline",
                name: "Love Story Timeline",
                description: "Vertical timeline with story moments",
                component: "sections/StoryTimeline",
                enabled: true,
                order: 2,
            },
            {
                id: "events-luxury",
                type: "events",
                variant: "schedule",
                name: "Event Schedule",
                description: "Numbered event list with map",
                component: "sections/EventSchedule",
                enabled: true,
                order: 3,
            },
            {
                id: "gallery-luxury",
                type: "gallery",
                variant: "masonry",
                name: "Masonry Gallery",
                description: "Responsive masonry photo grid",
                component: "sections/GalleryMasonry",
                enabled: true,
                order: 4,
            },
            {
                id: "dresscode-luxury",
                type: "dresscode",
                variant: "palette",
                name: "Dress Code Palette",
                description: "Color palette with FAQ",
                component: "sections/DressCodePalette",
                enabled: true,
                order: 5,
            },
            {
                id: "registry-luxury",
                type: "registry",
                variant: "qr",
                name: "Gift Registry with QR",
                description: "Bank info with QR codes",
                component: "features/registry/GiftRegistryPanel",
                enabled: true,
                order: 6,
            },
            {
                id: "rsvp-luxury",
                type: "rsvp",
                variant: "form",
                name: "RSVP Form",
                description: "Detailed RSVP form with event selection",
                component: "features/rsvp/RSVPForm",
                enabled: true,
                order: 7,
            },
            {
                id: "guestbook-luxury",
                type: "guestbook",
                variant: "wall",
                name: "Guestbook Wall",
                description: "Interactive message wall",
                component: "features/guestbook/GuestbookWall",
                enabled: true,
                order: 8,
            },
        ],
        theme: {
            colors: {
                primary: "#2f2922",
                accent: "#b58a57",
                text: "#4d4338",
                background: "#f7f1e7",
            },
            fonts: {
                display: "Playfair Display",
                body: "Manrope",
                script: "Great Vibes",
            },
        },
    },

    minimal: {
        id: "minimal-clean",
        name: "Minimal Clean",
        variant: "minimal",
        description: "Clean and simple with focus on content",
        preview: "/templates/minimal-preview.jpg",
        sections: [
            {
                id: "hero-minimal",
                type: "hero",
                variant: "centered",
                name: "Centered Hero",
                description: "Simple centered hero with single photo",
                component: "sections/HeroCentered",
                enabled: true,
                order: 1,
            },
            {
                id: "story-minimal",
                type: "story",
                variant: "cards",
                name: "Story Cards",
                description: "Clean story cards layout",
                component: "sections/StoryCards",
                enabled: true,
                order: 2,
            },
            {
                id: "gallery-minimal",
                type: "gallery",
                variant: "grid",
                name: "Simple Grid Gallery",
                description: "Clean grid photo layout",
                component: "sections/GalleryGrid",
                enabled: true,
                order: 3,
            },
            {
                id: "rsvp-minimal",
                type: "rsvp",
                variant: "simple",
                name: "Simple RSVP",
                description: "Minimal RSVP form",
                component: "features/rsvp/RSVPSimple",
                enabled: true,
                order: 4,
            },
        ],
        theme: {
            colors: {
                primary: "#1a1a1a",
                accent: "#666666",
                text: "#333333",
                background: "#ffffff",
            },
            fonts: {
                display: "Inter",
                body: "Inter",
                script: "Dancing Script",
            },
        },
    },

    romantic: {
        id: "romantic-pastel",
        name: "Romantic Pastel",
        variant: "romantic",
        description: "Soft pastels with romantic vibes",
        preview: "/templates/romantic-preview.jpg",
        sections: [
            {
                id: "hero-romantic",
                type: "hero",
                variant: "floral",
                name: "Floral Hero",
                description: "Hero with floral decorations",
                component: "sections/HeroFloral",
                enabled: true,
                order: 1,
            },
            {
                id: "story-romantic",
                type: "story",
                variant: "carousel",
                name: "Story Carousel",
                description: "Carousel-style story presentation",
                component: "sections/StoryCarousel",
                enabled: true,
                order: 2,
            },
            {
                id: "gallery-romantic",
                type: "gallery",
                variant: "polaroid",
                name: "Polaroid Gallery",
                description: "Polaroid-style photo display",
                component: "sections/GalleryPolaroid",
                enabled: true,
                order: 3,
            },
        ],
        theme: {
            colors: {
                primary: "#5e4b35",
                accent: "#d48c95",
                text: "#5e4b35",
                background: "#fef8f3",
            },
            fonts: {
                display: "Cormorant Garamond",
                body: "Lora",
                script: "Allura",
            },
        },
    },

    modern: {
        id: "modern-bold",
        name: "Modern Bold",
        variant: "modern",
        description: "Bold typography with modern aesthetics",
        preview: "/templates/modern-preview.jpg",
        sections: [
            {
                id: "hero-modern",
                type: "hero",
                variant: "fullscreen",
                name: "Fullscreen Hero",
                description: "Full viewport hero section",
                component: "sections/HeroFullscreen",
                enabled: true,
                order: 1,
            },
            {
                id: "story-modern",
                type: "story",
                variant: "split",
                name: "Split Story",
                description: "Split-screen story layout",
                component: "sections/StorySplit",
                enabled: true,
                order: 2,
            },
        ],
        theme: {
            colors: {
                primary: "#000000",
                accent: "#ff6b6b",
                text: "#2c2c2c",
                background: "#f5f5f5",
            },
            fonts: {
                display: "Montserrat",
                body: "Open Sans",
                script: "Parisienne",
            },
        },
    },

    traditional: {
        id: "traditional-red",
        name: "Traditional Red & Gold",
        variant: "traditional",
        description: "Classic red and gold traditional design",
        preview: "/templates/traditional-preview.jpg",
        sections: [
            {
                id: "hero-traditional",
                type: "hero",
                variant: "ornate",
                name: "Ornate Hero",
                description: "Traditional ornate hero section",
                component: "sections/HeroOrnate",
                enabled: true,
                order: 1,
            },
            {
                id: "story-traditional",
                type: "story",
                variant: "classic",
                name: "Classic Story",
                description: "Traditional story layout",
                component: "sections/StoryClassic",
                enabled: true,
                order: 2,
            },
        ],
        theme: {
            colors: {
                primary: "#8B0000",
                accent: "#D4AF37",
                text: "#5a0a0a",
                background: "#fffdf5",
            },
            fonts: {
                display: "Cinzel",
                body: "Crimson Text",
                script: "Tangerine",
            },
        },
    },
};

/**
 * SECTION LIBRARY
 * All available sections that can be mixed and matched
 */
export const sectionLibrary: Record<string, TemplateSection> = {
    // Hero Variants
    "hero-collage": {
        id: "hero-collage",
        type: "hero",
        variant: "collage",
        name: "Photo Collage Hero",
        description: "Hero with 3-photo collage layout",
        component: "sections/HeroCollage",
        enabled: true,
        order: 1,
    },
    "hero-centered": {
        id: "hero-centered",
        type: "hero",
        variant: "centered",
        name: "Centered Hero",
        description: "Simple centered hero",
        component: "sections/HeroCentered",
        enabled: true,
        order: 1,
    },
    "hero-fullscreen": {
        id: "hero-fullscreen",
        type: "hero",
        variant: "fullscreen",
        name: "Fullscreen Hero",
        description: "Full viewport hero",
        component: "sections/HeroFullscreen",
        enabled: true,
        order: 1,
    },

    // Story Variants
    "story-timeline": {
        id: "story-timeline",
        type: "story",
        variant: "timeline",
        name: "Timeline Story",
        description: "Vertical timeline layout",
        component: "sections/StoryTimeline",
        enabled: true,
        order: 2,
    },
    "story-cards": {
        id: "story-cards",
        type: "story",
        variant: "cards",
        name: "Story Cards",
        description: "Card-based story layout",
        component: "sections/StoryCards",
        enabled: true,
        order: 2,
    },

    // Gallery Variants
    "gallery-masonry": {
        id: "gallery-masonry",
        type: "gallery",
        variant: "masonry",
        name: "Masonry Gallery",
        description: "Masonry grid layout",
        component: "sections/GalleryMasonry",
        enabled: true,
        order: 4,
    },
    "gallery-grid": {
        id: "gallery-grid",
        type: "gallery",
        variant: "grid",
        name: "Grid Gallery",
        description: "Simple grid layout",
        component: "sections/GalleryGrid",
        enabled: true,
        order: 4,
    },
    "gallery-carousel": {
        id: "gallery-carousel",
        type: "gallery",
        variant: "carousel",
        name: "Carousel Gallery",
        description: "Carousel slider layout",
        component: "sections/GalleryCarousel",
        enabled: true,
        order: 4,
    },
};

/**
 * Get template configuration by variant
 */
export function getTemplate(variant: TemplateVariant): TemplateConfig {
    return templateVariants[variant];
}

/**
 * Get all available templates
 */
export function getAllTemplates(): TemplateConfig[] {
    return Object.values(templateVariants);
}

/**
 * Create custom template from sections
 */
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
