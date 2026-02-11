
"use client";

import { AppConfig, ColorPalette } from "@/app/types/config";
import { Plus, Trash2 } from "lucide-react";
import type { UpdateConfig } from "@/app/tool/generator/components/types";

interface DressCodeFormProps {
    config: AppConfig;
    updateConfig: UpdateConfig;
}

export default function DressCodeForm({ config, updateConfig }: DressCodeFormProps) {
    const dressCode = config.dressCode || { description: "", note: "", palette: [] };

    const handleTextChange = (field: 'description' | 'note', value: string) => {
        updateConfig("dressCode", { ...dressCode, [field]: value });
    };

    const handleAddColor = () => {
        const newColor: ColorPalette = {
            color: "#000000",
            name: "Màu mới"
        };
        updateConfig("dressCode", { ...dressCode, palette: [...dressCode.palette, newColor] });
    };

    const handleRemoveColor = (index: number) => {
        const newPalette = dressCode.palette.filter((_, i) => i !== index);
        updateConfig("dressCode", { ...dressCode, palette: newPalette });
    };

    const handleColorChange = (index: number, field: keyof ColorPalette, value: string) => {
        const newPalette = [...dressCode.palette];
        newPalette[index] = { ...newPalette[index], [field]: value };
        updateConfig("dressCode", { ...dressCode, palette: newPalette });
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả trang phục</label>
                <textarea
                    value={dressCode.description}
                    onChange={(e) => handleTextChange('description', e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="VD: Để buổi tiệc thêm phần trang trọng..."
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Lưu ý (Note)</label>
                <input
                    type="text"
                    value={dressCode.note}
                    onChange={(e) => handleTextChange('note', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="VD: Xin vui lòng tránh trang phục màu trắng."
                />
            </div>

            <div className="mt-4">
                <h4 className="font-medium text-gray-700 mb-2 text-sm">Bảng màu khuyến khích</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {dressCode.palette.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 border rounded bg-white">
                            <input
                                type="color"
                                value={item.color}
                                onChange={(e) => handleColorChange(index, 'color', e.target.value)}
                                className="h-8 w-8 p-0 border-0 rounded cursor-pointer"
                            />
                            <input
                                type="text"
                                value={item.name}
                                onChange={(e) => handleColorChange(index, 'name', e.target.value)}
                                className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                                placeholder="Tên màu"
                            />
                            <button
                                type="button"
                                aria-label={`Xóa màu trang phục ${index + 1}`}
                                onClick={() => handleRemoveColor(index)}
                                className="text-red-500 hover:text-red-700"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <button
                type="button"
                onClick={handleAddColor}
                className="w-full py-2 flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
                <Plus className="w-5 h-5" />
                <span>Thêm màu trang phục</span>
            </button>
        </div>
    );
}
