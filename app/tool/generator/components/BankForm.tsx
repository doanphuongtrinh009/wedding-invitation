
"use client";

import { AppConfig, BankAccount } from "@/app/types/config";
import { Plus, Trash2 } from "lucide-react";

interface BankFormProps {
    config: AppConfig;
    updateConfig: (key: keyof AppConfig, value: any) => void;
}

export default function BankForm({ config, updateConfig }: BankFormProps) {
    const bankInfo = config.bankInfo || [];

    const handleAddBank = () => {
        const newBank: BankAccount = {
            id: `bank_${Date.now()}`,
            bankName: "",
            accountNumber: "",
            accountName: "",
            branch: "",
            qrImage: "/qr-placeholder.png",
            template: "compact"
        };
        updateConfig("bankInfo", [...bankInfo, newBank]);
    };

    const handleRemoveBank = (index: number) => {
        const newBanks = bankInfo.filter((_, i) => i !== index);
        updateConfig("bankInfo", newBanks);
    };

    const handleChange = (index: number, field: keyof BankAccount, value: string) => {
        const newBanks = [...bankInfo];
        newBanks[index] = { ...newBanks[index], [field]: value };
        updateConfig("bankInfo", newBanks);
    };

    return (
        <div className="space-y-4">
            {bankInfo.map((bank, index) => (
                <div key={index} className="relative p-4 border rounded-lg bg-gray-50 border-gray-200">
                    <button
                        onClick={() => handleRemoveBank(index)}
                        className="absolute top-2 right-2 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                        title="Xóa tài khoản"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>

                    <h4 className="font-medium text-gray-700 mb-3 text-sm uppercase tracking-wide">Tài khoản #{index + 1}</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Ngân hàng</label>
                            <input
                                type="text"
                                value={bank.bankName}
                                onChange={(e) => handleChange(index, 'bankName', e.target.value)}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                                placeholder="VD: Vietcombank"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Số tài khoản</label>
                            <input
                                type="text"
                                value={bank.accountNumber}
                                onChange={(e) => handleChange(index, 'accountNumber', e.target.value)}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Chủ tài khoản (Viết hoa không dấu)</label>
                            <input
                                type="text"
                                value={bank.accountName}
                                onChange={(e) => handleChange(index, 'accountName', e.target.value.toUpperCase())}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                                placeholder="NGUYEN VAN A"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Chi nhánh</label>
                            <input
                                type="text"
                                value={bank.branch}
                                onChange={(e) => handleChange(index, 'branch', e.target.value)}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                                placeholder="CN Hồ Chí Minh"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Template QR</label>
                            <select
                                value={bank.template}
                                onChange={(e) => handleChange(index, 'template', e.target.value as any)}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm"
                            >
                                <option value="compact">Compact (Gọn)</option>
                                <option value="qr_only">QR Only (Chỉ hiện QR)</option>
                            </select>
                        </div>
                    </div>
                </div>
            ))}

            <button
                type="button"
                onClick={handleAddBank}
                className="w-full py-2 flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
                <Plus className="w-5 h-5" />
                <span>Thêm tài khoản ngân hàng</span>
            </button>
        </div>
    );
}
