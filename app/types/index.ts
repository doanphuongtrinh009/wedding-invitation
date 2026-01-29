// Wedding invitation types

export interface WeddingConfig {
    meta: {
        title: string;
        description: string;
        themeColor: string;
        theme?: string;
        musicUrl: string;
        seoKeywords: string;
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

export interface BankAccount {
    id: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    branch?: string;
    qrImage: string;
    template?: "compact" | "full";
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

export interface RSVPFormData {
    name: string;
    attending: "yes" | "no" | "maybe";
    guests: number;
}
