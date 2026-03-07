// Các kiểu dữ liệu dùng cho website thiệp cưới

export interface WeddingConfig {
    meta: {
        title: string;
        description: string;
        themeColor: string;
        theme?: string;
        musicUrl: string;
        seoKeywords: string;
        siteUrl?: string;
        musicAutoplay?: boolean;
    };
    couple: {
        groom: Person;
        bride: Person;
        coverImage: string;
    };
    weddingDate: string;
    venue: {
        mapEmbedUrl: string;
    };
    events: WeddingEvent[];
    gallery: Photo[];
    guestbook: {
        initialMessages: Array<GuestMessage & { timestamp: string | Date }>;
    };
    loveStory?: LoveStoryEvent[];
    dressCode?: DressCodeConfig;
    bankInfo?: BankAccount[];
    quotes?: Quote[];
    content?: InvitationContent;
    family?: {
        groom: {
            title: string;
            father: string;
            mother: string;
        };
        bride: {
            title: string;
            father: string;
            mother: string;
        };
    };
    timeline?: TimelineItem[];
}

export interface TimelineItem {
    time: string;
    title: string;
    icon: string;
    description?: string;
}

export interface Quote {
    content: string;
    author: string;
}

export interface LoveStoryEvent {
    date: string;
    title: string;
    description: string;
    image: string;
}

export interface DressCodeConfig {
    description: string;
    note?: string;
    palette: Array<{ color: string; name: string }>;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface InvitationContent {
    heroKicker?: string;
    heroHeadline?: string;
    heroDescription?: string;
    storyIntro?: string;
    timelineIntro?: string;
    scheduleIntro?: string;
    galleryIntro?: string;
    registryIntro?: string;
    faqTitle?: string;
    faqItems?: FaqItem[];
    footerMessage?: string;
}

export interface BankAccount {
    id: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    branch?: string;
    qrImage: string;
    template?: "compact" | "full" | "qr_only";
}

export interface Person {
    name: string;
    shortName: string;
    image: string;
    description: string;
}

export interface GuestMessage {
    id: number;
    name: string;
    message: string;
    timestamp: Date | string;
}

export interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export interface WeddingEvent {
    title: string;
    icon: string;
    time: string;
    date: string;
    location: string;
    mapLink: string;
}

export interface Photo {
    id: number;
    src: string;
    alt: string;
}
