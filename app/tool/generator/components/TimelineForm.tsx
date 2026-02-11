
"use client";

import { AppConfig, TimelineEvent } from "@/app/types/config";
import { Plus, Trash2 } from "lucide-react";
import type { UpdateConfig } from "@/app/tool/generator/components/types";

interface TimelineFormProps {
    config: AppConfig;
    updateConfig: UpdateConfig;
}

export default function TimelineForm({ config, updateConfig }: TimelineFormProps) {
    const timeline = config.timeline || [];

    const handleAddEvent = () => {
        const newEvent: TimelineEvent = {
            time: "18:00",
            title: "Hoạt động mới",
            icon: "camera"
        };
        updateConfig("timeline", [...timeline, newEvent]);
    };

    const handleRemoveEvent = (index: number) => {
        const newTimeline = timeline.filter((_, i) => i !== index);
        updateConfig("timeline", newTimeline);
    };

    const handleChange = (index: number, field: keyof TimelineEvent, value: string) => {
        const newTimeline = [...timeline];
        newTimeline[index] = { ...newTimeline[index], [field]: value };
        updateConfig("timeline", newTimeline);
    };

    return (
        <div className="space-y-4">
            {timeline.map((event, index) => (
                <div key={index} className="relative p-4 border rounded-lg bg-gray-50 border-gray-200">
                    <button
                        type="button"
                        aria-label={`Xóa mốc thời gian ${index + 1}`}
                        onClick={() => handleRemoveEvent(index)}
                        className="absolute top-2 right-2 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                        title="Xóa mốc thời gian"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>

                    <h4 className="font-medium text-gray-700 mb-3 text-sm uppercase tracking-wide">Mốc #{index + 1}</h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Giờ</label>
                            <input
                                type="text"
                                value={event.time}
                                onChange={(e) => handleChange(index, 'time', e.target.value)}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                                placeholder="18:00"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Tên hoạt động</label>
                            <input
                                type="text"
                                value={event.title}
                                onChange={(e) => handleChange(index, 'title', e.target.value)}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                                placeholder="Đón khách"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Icon code (camera, ring, cheers...)</label>
                            <select
                                value={event.icon}
                                onChange={(e) => handleChange(index, 'icon', e.target.value)}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                            >
                                <option value="camera">Camera (Chụp ảnh)</option>
                                <option value="ring">Ring (Lễ lễ)</option>
                                <option value="cheers">Cheers (Khai tiệc)</option>
                                <option value="music">Music (Âm nhạc)</option>
                                <option value="cake">Cake (Cắt bánh)</option>
                                <option value="heart">Heart (Yêu thương)</option>
                            </select>
                        </div>
                    </div>
                </div>
            ))}

            <button
                type="button"
                onClick={handleAddEvent}
                className="w-full py-2 flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
                <Plus className="w-5 h-5" />
                <span>Thêm mốc thời gian</span>
            </button>
        </div>
    );
}
