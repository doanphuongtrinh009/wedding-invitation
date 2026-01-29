"use client";

import { memo, useState } from "react";
import Image from "next/image";
import { Copy, Check } from "lucide-react";
import { BANK_INFO } from "@/app/lib/data";

const BankCard = memo(function BankCard({ bank }: { bank: any }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(bank.accountNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-[var(--color-primary)]/10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#f8f5f0] rounded-full flex items-center justify-center mb-4 text-2xl">
                🏦
            </div>
            <h3 className="font-display text-xl text-[var(--color-primary)] mb-1">{bank.id === 'groom' ? 'Mừng Cưới Chú Rể' : 'Mừng Cưới Cô Dâu'}</h3>
            <p className="text-sm text-[var(--color-text)] opacity-60 uppercase tracking-widest mb-4">{bank.bankName}</p>

            {/* QR Code Placeholder */}
            <div className="relative w-40 h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden border border-[var(--color-primary)]/10">
                {/* Normally we would use bank.qrImage here */}
                <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text)] opacity-20 text-xs">
                    MÃ QR
                </div>
                {/* Uncomment when real image is available
                <Image src={bank.qrImage} alt="QR Code" fill style={{ objectFit: 'contain' }} /> 
                */}
            </div>

            <div className="w-full bg-[#f8f5f0] rounded-lg p-3 mb-4">
                <p className="text-xs text-[var(--color-text)] opacity-50 uppercase mb-1">Số Tài Khoản</p>
                <div className="flex items-center justify-center gap-2">
                    <span className="font-mono text-lg text-[var(--color-text)] tracking-wider">{bank.accountNumber}</span>
                    <button
                        onClick={handleCopy}
                        className="p-1.5 hover:bg-[var(--color-primary)]/10 rounded-full transition-colors text-[var(--color-text)] opacity-60"
                        title="Sao chép số tài khoản"
                    >
                        {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                    </button>
                </div>
            </div>

            <p className="font-medium text-[var(--color-text)]">{bank.accountName}</p>
            {bank.branch && <p className="text-xs text-[var(--color-text)] opacity-50 mt-1">{bank.branch}</p>}
        </div>
    );
});

function BankInfoComponent() {
    if (!BANK_INFO || BANK_INFO.length === 0) return null;

    return (
        <section className="py-20 bg-[#faf8f5]">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase font-semibold mb-3">
                        Hộp Mừng Cưới
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl text-[var(--color-primary)]">
                        Gửi Lời Chúc Mừng
                    </h2>
                    <p className="mt-4 text-[var(--color-text)] opacity-60 max-w-lg mx-auto text-sm italic">
                        Nếu không thể tham dự, bạn vẫn có thể gửi những lời chúc tốt đẹp và món quà ý nghĩa đến chúng mình qua mã QR dưới đây.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                    {BANK_INFO.map((bank: any) => (
                        <BankCard key={bank.id} bank={bank} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export const BankInfo = memo(BankInfoComponent);
