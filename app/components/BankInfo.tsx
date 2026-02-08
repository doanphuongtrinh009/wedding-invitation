"use client";

import { memo, useState } from "react";
import Image from "next/image";
import { Copy, Check } from "lucide-react";
import { BANK_INFO } from "@/app/lib/data";
import type { BankAccount } from "@/app/types";

const BankCard = memo(function BankCard({ bank }: { bank: BankAccount }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(bank.accountNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="card-elegant flex flex-col items-center rounded-3xl p-6 text-center md:p-8">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border-accent)] bg-white/70 text-2xl">
                🏦
            </div>

            <h3 className="mb-1 font-display text-2xl text-[var(--color-primary)]">
                {bank.id === "groom" ? "Mừng Cưới Chú Rể" : "Mừng Cưới Cô Dâu"}
            </h3>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--color-text)]/55">{bank.bankName}</p>

            <div className="relative mb-5 h-56 w-56 overflow-hidden rounded-2xl border border-[var(--border-accent)] bg-white p-2 shadow-[var(--shadow-soft)]">
                <Image src={bank.qrImage} alt="QR Code" fill style={{ objectFit: "contain" }} className="rounded-xl" />
            </div>

            <div className="mb-4 w-full rounded-2xl border border-[var(--border-soft)] bg-white/70 p-4">
                <p className="mb-2 text-xs uppercase tracking-[0.14em] text-[var(--color-text)]/55">Số Tài Khoản</p>
                <div className="flex items-center justify-center gap-2">
                    <span className="font-mono text-lg tracking-[0.08em] text-[var(--color-text)]">{bank.accountNumber}</span>
                    <button
                        onClick={handleCopy}
                        className="rounded-full p-2 text-[var(--color-text)]/70 transition-colors hover:bg-[var(--color-primary)]/10"
                        title="Sao chép số tài khoản"
                        type="button"
                    >
                        {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    </button>
                </div>
            </div>

            <p className="font-medium text-[var(--color-text)]">{bank.accountName}</p>
            {bank.branch && <p className="mt-1 text-xs text-[var(--color-text)]/55">{bank.branch}</p>}
        </div>
    );
});

function BankInfoComponent() {
    if (!BANK_INFO || BANK_INFO.length === 0) return null;

    return (
        <section className="py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mb-12 text-center md:mb-14">
                    <p className="section-heading mb-2">Hộp Mừng Cưới</p>
                    <h2 className="section-title text-4xl md:text-5xl">Gửi Lời Chúc Mừng</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm italic leading-relaxed text-[var(--color-text)]/70 md:text-base">
                        Nếu không thể tham dự, bạn vẫn có thể gửi những lời chúc tốt đẹp và món quà ý nghĩa đến chúng mình qua mã QR dưới đây.
                    </p>
                </div>

                <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
                    {BANK_INFO.map((bank: BankAccount) => (
                        <BankCard key={bank.id} bank={bank} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export const BankInfo = memo(BankInfoComponent);
