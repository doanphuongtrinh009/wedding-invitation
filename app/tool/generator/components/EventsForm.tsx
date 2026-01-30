
"use client";

import { AppConfig, WeddingEvent } from "@/app/types/config";
import { Plus, Trash2 } from "lucide-react";

interface EventsFormProps {
    config: AppConfig;
    updateConfig: (key: keyof AppConfig, value: any) => void;
}

export default function EventsForm({ config, updateConfig }: EventsFormProps) {
    const events = config.events || [];

    const handleAddEvent = () => {
        const newEvent: WeddingEvent = {
            title: "Tên sự kiện mới",
            icon: "🎊",
            time: "00:00 - 00:00",
            date: "dd/mm/yyyy",
            location: "Địa chỉ...",
            mapLink: ""
        };
        updateConfig("events", [...events, newEvent]);
    };

    const handleRemoveEvent = (index: number) => {
        const newEvents = events.filter((_, i) => i !== index);
        updateConfig("events", newEvents);
    };

    const handleChange = (index: number, field: keyof WeddingEvent, value: string) => {
        const newEvents = [...events];
        newEvents[index] = { ...newEvents[index], [field]: value };
        updateConfig("events", newEvents);
    };

    return (
        <div className="space-y-4">
            {events.map((event, index) => (
                <div key={index} className="relative p-4 border rounded-lg bg-gray-50 border-gray-200">
                    <button
                        onClick={() => handleRemoveEvent(index)}
                        className="absolute top-2 right-2 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                        title="Xóa sự kiện"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>

                    <h4 className="font-medium text-gray-700 mb-3 text-sm uppercase tracking-wide">Sự kiện #{index + 1}</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Tên sự kiện</label>
                            <input
                                type="text"
                                value={event.title}
                                onChange={(e) => handleChange(index, 'title', e.target.value)}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                                placeholder="VD: Tiệc Cưới"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Icon (Emoji)</label>
                            <input
                                type="text"
                                value={event.icon}
                                onChange={(e) => handleChange(index, 'icon', e.target.value)}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                                placeholder="VD: 🎊"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Thời gian</label>
                            <input
                                type="text"
                                value={event.time}
                                onChange={(e) => handleChange(index, 'time', e.target.value)}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                                placeholder="VD: 17:30"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Ngày (Text hiển thị)</label>
                            <input
                                type="text"
                                value={event.date}
                                onChange={(e) => handleChange(index, 'date', e.target.value)}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                                placeholder="VD: 10/04/2026"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Địa điểm</label>
                            <input
                                type="text"
                                value={event.location}
                                onChange={(e) => handleChange(index, 'location', e.target.value)}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                                placeholder="Tên nhà hàng, địa chỉ..."
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Link Google Maps</label>
                            <input
                                type="text"
                                value={event.mapLink}
                                onChange={(e) => handleChange(index, 'mapLink', e.target.value)}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                            />
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
                <span>Thêm sự kiện</span>
            </button>
        </div>
    );
}
