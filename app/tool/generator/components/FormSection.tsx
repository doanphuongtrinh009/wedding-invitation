
"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FormSectionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export default function FormSection({ title, children, defaultOpen = false }: FormSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-gray-200 rounded-lg mb-4 bg-white shadow-sm overflow-hidden">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
            >
                <span className="font-semibold text-lg text-gray-800">{title}</span>
                {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>

            {isOpen && (
                <div className="p-6 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-200">
                    {children}
                </div>
            )}
        </div>
    );
}
