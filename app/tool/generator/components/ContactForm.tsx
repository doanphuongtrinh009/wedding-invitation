"use client";

import { User } from "lucide-react";

export interface ContactInfo {
    name: string;
    phone: string;
    zalo: string;
    email: string;
    driveLink?: string;
}

interface ContactFormProps {
    contact: ContactInfo;
    setContact: (contact: ContactInfo) => void;
}

export default function ContactForm({ contact, setContact }: ContactFormProps) {
    const handleChange = (field: keyof ContactInfo, value: string) => {
        setContact({ ...contact, [field]: value });
    };

    return (
        <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                <div className="flex gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    <div className="text-sm text-blue-800 space-y-1">
                        <p>Thông tin này để Admin liên hệ lại với bạn.</p>
                        <p>Vui lòng upload toàn bộ ảnh cưới (Ảnh Album, Ảnh Bìa, Ảnh Cổng...) lên <strong>Google Drive</strong> và dán link vào bên dưới.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tên của bạn <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        required
                        value={contact.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        autoComplete="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Nguyễn Văn A"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại / Zalo <span className="text-red-500">*</span></label>
                    <input
                        type="tel"
                        required
                        value={contact.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        autoComplete="tel"
                        inputMode="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0912345678"
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email (để nhận backup file) <span className="text-red-500">*</span></label>
                    <input
                        type="email"
                        required
                        value={contact.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        autoComplete="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="example@gmail.com"
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Link Google Drive ảnh cưới</label>
                    <input
                        type="text"
                        value={contact.driveLink || ''}
                        onChange={(e) => handleChange('driveLink', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="https://drive.google.com/..."
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        Nếu chưa có link, bạn có thể gửi ảnh qua Zalo cho Admin sau.
                    </p>
                </div>
            </div>
        </div>
    );
}
