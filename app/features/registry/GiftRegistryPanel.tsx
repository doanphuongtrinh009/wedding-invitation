"use client";

import Image from "next/image";
import { memo, useCallback, useState } from "react";
import { Check, Copy } from "lucide-react";

import { BANK_INFO } from "@/app/utils/data";
import type { BankAccount } from "@/app/types";

function GiftRegistryPanelComponent() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = useCallback(async (bank: BankAccount) => {
    try {
      await navigator.clipboard.writeText(bank.accountNumber);
      setCopiedId(bank.id);
      setTimeout(() => setCopiedId(null), 1400);
    } catch {
      setCopiedId(null);
    }
  }, []);

  if (!BANK_INFO?.length) {
    return null;
  }

  return (
    <div className="lux-registry-grid">
      {BANK_INFO.map((bank) => (
        <article className="lux-registry-card" key={bank.id}>
          <div className="lux-registry-card-inner">
            <h3 className="lux-registry-type">{bank.id === "groom" ? "Mừng cưới chú rể" : "Mừng cưới cô dâu"}</h3>

            <div className="lux-registry-main">
              <figure className="lux-registry-qr">
                <Image src={bank.qrImage} alt={`Mã QR ${bank.bankName}`} fill sizes="(max-width: 900px) 24vw, 120px" />
              </figure>

              <div className="lux-registry-info">
                <p className="lux-registry-bank">{bank.bankName}</p>
                <p className="lux-registry-label">Số tài khoản</p>

                <div className="lux-registry-account">
                  <span className="lux-registry-number">{bank.accountNumber}</span>
                  <button
                    type="button"
                    className="lux-copy-button"
                    onClick={() => handleCopy(bank)}
                    aria-label="Sao chép số tài khoản"
                  >
                    {copiedId === bank.id ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>

                <p className="lux-registry-name">{bank.accountName}</p>
                {bank.branch ? <p className="lux-registry-branch">{bank.branch}</p> : null}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export const GiftRegistryPanel = memo(GiftRegistryPanelComponent);
