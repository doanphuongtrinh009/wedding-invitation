
"use client";

import { AppConfig } from "@/app/types/config";
import type { UpdateConfig } from "@/app/tool/generator/components/types";

interface MetaFormProps {
    config: AppConfig;
    updateConfig: UpdateConfig;
}

export default function MetaForm({ config, updateConfig }: MetaFormProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        updateConfig("meta", {
            ...config.meta,
            [name]: value,
        });
    };

    return (
        <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề Website</label>
                    <input
                        type="text"
                        name="title"
                        value={config.meta.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Thiệp Cưới | Tên & Tên"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả ngắn</label>
                    <input
                        type="text"
                        name="description"
                        value={config.meta.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Theme (Chủ đề)</label>
                    <select
                        name="theme"
                        value={config.meta.theme}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <option value="luxury">Luxury (Sang trọng)</option>
                        <option value="pastel">Pastel (Nhẹ nhàng)</option>
                        <option value="traditional">Traditional (Truyền thống)</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Màu chủ đạo (Hex)</label>
                    <div className="flex gap-2">
                        <input
                            type="color"
                            name="themeColor"
                            value={config.meta.themeColor}
                            onChange={handleChange}
                            className="h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"
                        />
                        <input
                            type="text"
                            name="themeColor"
                            value={config.meta.themeColor}
                            onChange={handleChange}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Link Nhạc nền (URL)</label>
                <input
                    type="text"
                    name="musicUrl"
                    value={config.meta.musicUrl}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="/music/wedding-song.mp3"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Domain website</label>
                    <input
                        type="url"
                        name="siteUrl"
                        value={config.meta.siteUrl || ""}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="https://your-domain.com"
                    />
                </div>

                <label className="flex items-center gap-3 self-end rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700">
                    <input
                        type="checkbox"
                        checked={Boolean(config.meta.musicAutoplay)}
                        onChange={(e) =>
                            updateConfig("meta", {
                                ...config.meta,
                                musicAutoplay: e.target.checked,
                            })
                        }
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <span>Tự phát nhạc khi người dùng bật trình phát</span>
                </label>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Keywords</label>
                <input
                    type="text"
                    name="seoKeywords"
                    value={config.meta.seoKeywords}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ngày cưới chính (Dùng cho đếm ngược)</label>
                <input
                    type="datetime-local"
                    value={config.weddingDate.slice(0, 16)}
                    onChange={(e) => updateConfig('weddingDate', new Date(e.target.value).toISOString())}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>
        </div>
    );
}
