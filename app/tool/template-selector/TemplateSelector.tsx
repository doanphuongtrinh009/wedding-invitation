"use client";

import { useState } from "react";
import { getAllTemplates, getTemplate, type TemplateVariant, type TemplateConfig } from "@/app/config/template.system";

/**
 * TEMPLATE PREVIEW & SELECTOR
 * 
 * This component allows users to preview and select different
 * wedding template variants for their website.
 */

export function TemplateSelector() {
    const [selectedVariant, setSelectedVariant] = useState<TemplateVariant>("luxury");
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateConfig>(getTemplate("luxury"));

    const templates = getAllTemplates();

    const handleSelectTemplate = (variant: TemplateVariant) => {
        setSelectedVariant(variant);
        setSelectedTemplate(getTemplate(variant));
    };

    return (
        <div className="template-selector">
            <div className="template-selector-header">
                <h1>Choose Your Wedding Template</h1>
                <p>Select a template variant that matches your wedding style</p>
            </div>

            <div className="template-grid">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className={`template-card ${selectedVariant === template.variant ? "selected" : ""}`}
                        onClick={() => handleSelectTemplate(template.variant)}
                    >
                        <div className="template-preview">
                            <img src={template.preview} alt={template.name} />
                        </div>
                        <div className="template-info">
                            <h3>{template.name}</h3>
                            <p>{template.description}</p>
                            <div className="template-meta">
                                <span>{template.sections.length} sections</span>
                                <span className="template-badge">{template.variant}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="template-details">
                <h2>Template Details: {selectedTemplate.name}</h2>

                <div className="template-sections">
                    <h3>Included Sections</h3>
                    <ul>
                        {selectedTemplate.sections.map((section) => (
                            <li key={section.id}>
                                <strong>{section.name}</strong> - {section.description}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="template-theme">
                    <h3>Theme Colors</h3>
                    <div className="color-palette">
                        <div className="color-swatch" style={{ backgroundColor: selectedTemplate.theme.colors.primary }}>
                            <span>Primary</span>
                        </div>
                        <div className="color-swatch" style={{ backgroundColor: selectedTemplate.theme.colors.accent }}>
                            <span>Accent</span>
                        </div>
                        <div className="color-swatch" style={{ backgroundColor: selectedTemplate.theme.colors.text }}>
                            <span>Text</span>
                        </div>
                        <div className="color-swatch" style={{ backgroundColor: selectedTemplate.theme.colors.background }}>
                            <span>Background</span>
                        </div>
                    </div>
                </div>

                <div className="template-actions">
                    <button className="btn-primary">Use This Template</button>
                    <button className="btn-secondary">Customize Sections</button>
                </div>
            </div>
        </div>
    );
}
