
export interface MetaConfig {
    title: string;
    description: string;
    themeColor: string;
    theme: 'luxury' | 'pastel' | 'traditional';
    musicUrl: string;
    musicAutoplay?: boolean;
    seoKeywords: string;
    siteUrl?: string;
}

export interface Person {
    name: string;
    shortName: string;
    image: string;
    description: string;
}

export interface Parent {
    father: string;
    mother: string;
}

export interface FamilyInfo {
    title: string;
    father: string;
    mother: string;
}

export interface CoupleConfig {
    groom: Person;
    bride: Person;
    coverImage: string;
}

export interface FamilyConfig {
    groom: FamilyInfo;
    bride: FamilyInfo;
}

export interface TimelineEvent {
    time: string;
    title: string;
    icon: string;
    description?: string;
}

export interface Quote {
    content: string;
    author: string;
}

export interface Venue {
    mapEmbedUrl: string;
}

export interface WeddingEvent {
    title: string;
    icon: string;
    time: string;
    date: string;
    location: string;
    mapLink: string;
}

export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
}

export interface GuestbookMessage {
    id: number;
    name: string;
    message: string;
    timestamp: string;
}

export interface GuestbookConfig {
    initialMessages: GuestbookMessage[];
}

export interface LoveStoryEvent {
    date: string;
    title: string;
    description: string;
    image: string;
}

export interface ColorPalette {
    color: string;
    name: string;
}

export interface DressCodeConfig {
    description: string;
    note: string;
    palette: ColorPalette[];
}

export interface BankAccount {
    id: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    branch: string;
    qrImage: string;
    template: 'compact' | 'qr_only';
}

export interface AppConfig {
    meta: MetaConfig;
    couple: CoupleConfig;
    family: FamilyConfig;
    timeline: TimelineEvent[];
    quotes: Quote[];
    weddingDate: string;
    venue: Venue;
    events: WeddingEvent[];
    gallery: GalleryImage[];
    guestbook: GuestbookConfig;
    loveStory: LoveStoryEvent[];
    dressCode: DressCodeConfig;
    bankInfo: BankAccount[];
}

export const defaultConfig: AppConfig = {
    meta: {
        title: "Thiệp Cưới | Chú Rể & Cô Dâu",
        description: "Trân trọng kính mời bạn đến dự đám cưới của chúng mình",
        themeColor: "#2D3E33",
        theme: "luxury",
        musicUrl: "/music/wedding-song.mp3",
        musicAutoplay: false,
        siteUrl: "",
        seoKeywords: "wedding, invitation"
    },
    couple: {
        groom: {
            name: "Nguyễn Văn A",
            shortName: "Văn A",
            image: "/couple-photo.png",
            description: "Mô tả về chú rể..."
        },
        bride: {
            name: "Trần Thị B",
            shortName: "Thị B",
            image: "/couple-photo.png",
            description: "Mô tả về cô dâu..."
        },
        coverImage: "/couple-photo.png"
    },
    family: {
        groom: {
            title: "Nhà Trai",
            father: "Ông Nguyễn Văn ...",
            mother: "Bà Trần Thị ..."
        },
        bride: {
            title: "Nhà Gái",
            father: "Ông Trần Văn ...",
            mother: "Bà Lê Thị ..."
        }
    },
    timeline: [],
    quotes: [],
    weddingDate: new Date().toISOString(),
    venue: {
        mapEmbedUrl: ""
    },
    events: [],
    gallery: [],
    guestbook: {
        initialMessages: []
    },
    loveStory: [],
    dressCode: {
        description: "",
        note: "",
        palette: []
    },
    bankInfo: []
};
