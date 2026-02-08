import type { AppConfig } from "@/app/types/config";

export type UpdateConfig = <K extends keyof AppConfig>(key: K, value: AppConfig[K]) => void;
