
"use client";

import { AppConfig, LoveStoryEvent } from "@/app/types/config";
import { Plus, Trash2 } from "lucide-react";
import type { UpdateConfig } from "./types";

interface LoveStoryFormProps {
    config: AppConfig;
    updateConfig: UpdateConfig;
}

export default function LoveStoryForm({ config, updateConfig }: LoveStoryFormProps) {
    const stories = config.loveStory || [];

    const handleAddStory = () => {
        const newStory: LoveStoryEvent = {
            date: "2024",
            title: "Kỷ niệm mới",
            description: "Mô tả câu chuyện...",
            image: "/couple-photo.png"
        };
        updateConfig("loveStory", [...stories, newStory]);
    };

    const handleRemoveStory = (index: number) => {
        const newStories = stories.filter((_, i) => i !== index);
        updateConfig("loveStory", newStories);
    };

    const handleChange = (index: number, field: keyof LoveStoryEvent, value: string) => {
        const newStories = [...stories];
        newStories[index] = { ...newStories[index], [field]: value };
        updateConfig("loveStory", newStories);
    };

    return (
        <div className="space-y-4">
            {stories.map((story, index) => (
                <div key={index} className="relative p-4 border rounded-lg bg-gray-50 border-gray-200">
                    <button
                        onClick={() => handleRemoveStory(index)}
                        className="absolute top-2 right-2 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                        title="Xóa kỷ niệm"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>

                    <h4 className="font-medium text-gray-700 mb-3 text-sm uppercase tracking-wide">Kỷ niệm #{index + 1}</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="md:col-span-2">
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Tiêu đề (Cột mốc)</label>
                            <input
                                type="text"
                                value={story.title}
                                onChange={(e) => handleChange(index, 'title', e.target.value)}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                                placeholder="Lần đầu gặp gỡ"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Thời gian (Năm/Ngày)</label>
                            <input
                                type="text"
                                value={story.date}
                                onChange={(e) => handleChange(index, 'date', e.target.value)}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                                placeholder="2020"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Ảnh (URL)</label>
                            <input
                                type="text"
                                value={story.image}
                                onChange={(e) => handleChange(index, 'image', e.target.value)}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                                placeholder="/images/story-1.jpg"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Nội dung câu chuyện</label>
                            <textarea
                                value={story.description}
                                onChange={(e) => handleChange(index, 'description', e.target.value)}
                                rows={3}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                            />
                        </div>
                    </div>
                </div>
            ))}

            <button
                type="button"
                onClick={handleAddStory}
                className="w-full py-2 flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
                <Plus className="w-5 h-5" />
                <span>Thêm cột mốc tình yêu</span>
            </button>
        </div>
    );
}
