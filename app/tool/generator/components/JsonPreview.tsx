
"use client";

import { AppConfig } from "@/app/types/config";
import { Check, Copy, Download } from "lucide-react";
import { useState } from "react";

interface JsonPreviewProps {
    config: AppConfig;
}

export default function JsonPreview({ config }: JsonPreviewProps) {
    const [copied, setCopied] = useState(false);

    const jsonString = JSON.stringify(config, null, 4);

    const handleCopy = () => {
        navigator.clipboard.writeText(jsonString);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "config.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col h-[calc(100vh-100px)] sticky top-6">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                <span className="text-gray-300 font-medium text-sm">config.json</span>
                <div className="flex gap-2">
                    <button
                        onClick={handleCopy}
                        className="p-1.5 text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded transition-colors"
                        title="Copy to clipboard"
                    >
                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <button
                        onClick={handleDownload}
                        className="p-1.5 text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded transition-colors"
                        title="Download JSON"
                    >
                        <Download className="w-4 h-4" />
                    </button>
                </div>
            </div>
            <div className="flex-1 overflow-auto p-4 custom-scrollbar">
                <pre className="text-xs sm:text-sm text-green-400 font-mono leading-relaxed whitespace-pre-wrap">
                    {jsonString}
                </pre>
            </div>
        </div>
    );
}
