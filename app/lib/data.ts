// Wedding data configuration - ADAPTER
import { WeddingEvent, Photo, GuestMessage, WeddingConfig } from "@/app/types";
import configData from '../../config.json'; // Importing directly ensures build-time availability

// Type assertion to ensure config matches interface
const config = configData as unknown as WeddingConfig;

export const WEDDING_DATE = config.weddingDate;

export const QUOTES = config.quotes || [];

export const COUPLE = config.couple;

export const EVENTS: WeddingEvent[] = config.events;

export const PHOTOS: Photo[] = config.gallery;

export const INITIAL_MESSAGES: GuestMessage[] = config.guestbook.initialMessages.map(msg => ({
    ...msg,
    timestamp: new Date(msg.timestamp) // Parse string to Date object
}));

export const VENUE_MAP_EMBED = config.venue.mapEmbedUrl;

export const LOVE_STORY = config.loveStory || [];
export const DRESS_CODE = config.dressCode;
export const BANK_INFO = config.bankInfo || [];

export const CONFIG = config; // Export full config for other uses
