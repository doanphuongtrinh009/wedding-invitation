// Wedding data configuration - ADAPTER
import { WeddingEvent, Photo, GuestMessage } from "@/app/types";
import { weddingConfig } from "@/app/config/wedding.config";

export const WEDDING_DATE = weddingConfig.weddingDate;

export const QUOTES = weddingConfig.quotes ?? [];

export const COUPLE = weddingConfig.couple;

export const EVENTS: WeddingEvent[] = weddingConfig.events;

export const PHOTOS: Photo[] = weddingConfig.gallery;

export const INITIAL_MESSAGES: GuestMessage[] = weddingConfig.guestbook.initialMessages.map((msg) => ({
    ...msg,
    timestamp: new Date(msg.timestamp), // Parse string to Date object
}));

export const VENUE_MAP_EMBED = weddingConfig.venue.mapEmbedUrl;

export const LOVE_STORY = weddingConfig.loveStory ?? [];
export const DRESS_CODE = weddingConfig.dressCode;
export const BANK_INFO = weddingConfig.bankInfo ?? [];

export const CONFIG = weddingConfig; // Export full config for other uses
