
"use client";

import { AppConfig } from "@/app/types/config";
import type { UpdateConfig } from "./types";

interface CoupleFormProps {
    config: AppConfig;
    updateConfig: UpdateConfig;
}

export default function CoupleForm({ config, updateConfig }: CoupleFormProps) {
    const handlePersonChange = (role: 'groom' | 'bride', field: string, value: string) => {
        updateConfig("couple", {
            ...config.couple,
            [role]: {
                ...config.couple[role],
                [field]: value
            }
        });
    };

    const handleFamilyChange = (role: 'groom' | 'bride', field: string, value: string) => {
        updateConfig("family", {
            ...config.family,
            [role]: {
                ...config.family[role],
                [field]: value
            }
        })
    }

    return (
        <div className="grid gap-8">
            {/* Groom Section */}
            <div className="space-y-4">
                <h3 className="font-semibold text-blue-600 border-b pb-2">Thông tin Chú Rể</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Họ và Tên</label>
                        <input
                            type="text"
                            value={config.couple.groom.name}
                            onChange={(e) => handlePersonChange('groom', 'name', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tên thường gọi (Hiển thị ngắn)</label>
                        <input
                            type="text"
                            value={config.couple.groom.shortName}
                            onChange={(e) => handlePersonChange('groom', 'shortName', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả / Lời giới thiệu</label>
                    <textarea
                        value={config.couple.groom.description}
                        onChange={(e) => handlePersonChange('groom', 'description', e.target.value)}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-3 rounded-md border text-sm">
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Họ tên Bố</label>
                        <input
                            type="text"
                            value={config.family.groom.father}
                            onChange={(e) => handleFamilyChange('groom', 'father', e.target.value)}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Họ tên Mẹ</label>
                        <input
                            type="text"
                            value={config.family.groom.mother}
                            onChange={(e) => handleFamilyChange('groom', 'mother', e.target.value)}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded"
                        />
                    </div>
                </div>
            </div>

            {/* Bride Section */}
            <div className="space-y-4">
                <h3 className="font-semibold text-pink-600 border-b pb-2">Thông tin Cô Dâu</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Họ và Tên</label>
                        <input
                            type="text"
                            value={config.couple.bride.name}
                            onChange={(e) => handlePersonChange('bride', 'name', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tên thường gọi (Hiển thị ngắn)</label>
                        <input
                            type="text"
                            value={config.couple.bride.shortName}
                            onChange={(e) => handlePersonChange('bride', 'shortName', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả / Lời giới thiệu</label>
                    <textarea
                        value={config.couple.bride.description}
                        onChange={(e) => handlePersonChange('bride', 'description', e.target.value)}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-3 rounded-md border text-sm">
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Họ tên Bố</label>
                        <input
                            type="text"
                            value={config.family.bride.father}
                            onChange={(e) => handleFamilyChange('bride', 'father', e.target.value)}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Họ tên Mẹ</label>
                        <input
                            type="text"
                            value={config.family.bride.mother}
                            onChange={(e) => handleFamilyChange('bride', 'mother', e.target.value)}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
