
"use client";

import { AppConfig, GalleryImage } from "@/app/types/config";
import { Plus, Trash2 } from "lucide-react";
import type { UpdateConfig } from "@/app/tool/generator/components/types";

interface GalleryFormProps {
    config: AppConfig;
    updateConfig: UpdateConfig;
}

export default function GalleryForm({ config, updateConfig }: GalleryFormProps) {
    const gallery = config.gallery || [];

    const handleAddImage = () => {
        const newImage: GalleryImage = {
            id: Date.now(),
            src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
            alt: "Ảnh cưới"
        };
        updateConfig("gallery", [...gallery, newImage]);
    };

    const handleRemoveImage = (index: number) => {
        const newGallery = gallery.filter((_, i) => i !== index);
        updateConfig("gallery", newGallery);
    };

    const handleChange = (index: number, value: string) => {
        const newGallery = [...gallery];
        newGallery[index] = { ...newGallery[index], src: value };
        updateConfig("gallery", newGallery);
    };

    return (
        <div className="space-y-4">
            <div className="bg-yellow-50 p-3 rounded-md border border-yellow-200 text-sm text-yellow-800 mb-2">
                💡 <strong>Mẹo:</strong> Nếu bạn đã dán Link Google Drive ở phần 0, bạn có thể bỏ qua phần này hoặc chỉ cần nhập tên ảnh tượng trưng.
            </div>
            <div className="grid grid-cols-1 gap-4">
                {gallery.map((image, index) => (
                    <div key={index} className="flex gap-2 items-center">
                        <span className="text-sm font-medium text-gray-500 w-8">{index + 1}.</span>
                        <input
                            type="text"
                            value={image.src}
                            onChange={(e) => handleChange(index, e.target.value)}
                            className="flex-1 px-3 py-1.5 border border-gray-300 rounded text-sm"
                            placeholder="https://..."
                        />
                        <button
                            type="button"
                            aria-label={`Xóa ảnh ${index + 1}`}
                            onClick={() => handleRemoveImage(index)}
                            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                            title="Xóa ảnh"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={handleAddImage}
                className="w-full py-2 flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
                <Plus className="w-5 h-5" />
                <span>Thêm ảnh vào Album</span>
            </button>
        </div>
    );
}
