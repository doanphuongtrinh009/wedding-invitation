"use client";

import Link from "next/link";
import { getAllTemplates } from "@/app/config/template.system";

/**
 * DEMO LANDING PAGE
 * 
 * Showcases all available template variants
 */

export default function DemoPage() {
    const templates = getAllTemplates();

    return (
        <main className="demo-landing">
            <header className="demo-header">
                <div className="demo-container">
                    <h1>Wedding Template Showcase</h1>
                    <p className="demo-subtitle">
                        Choose from 5 professionally designed wedding website templates
                    </p>
                </div>
            </header>

            <section className="demo-templates">
                <div className="demo-container">
                    <div className="template-grid">
                        {templates.map((template) => (
                            <Link
                                key={template.id}
                                href={`/demo/${template.variant}`}
                                className="template-card"
                            >
                                <div className="template-preview">
                                    <div
                                        className="template-preview-bg"
                                        style={{ backgroundColor: template.theme.colors.background }}
                                    >
                                        <div className="template-preview-content">
                                            <h2 style={{ color: template.theme.colors.primary }}>
                                                {template.name}
                                            </h2>
                                            <div
                                                className="template-accent-bar"
                                                style={{ backgroundColor: template.theme.colors.accent }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="template-info">
                                    <h3>{template.name}</h3>
                                    <p>{template.description}</p>

                                    <div className="template-meta">
                                        <span className="template-badge">{template.variant}</span>
                                        <span className="template-sections">
                                            {template.sections.length} sections
                                        </span>
                                    </div>

                                    <div className="template-colors">
                                        <div
                                            className="color-dot"
                                            style={{ backgroundColor: template.theme.colors.primary }}
                                            title="Primary"
                                        />
                                        <div
                                            className="color-dot"
                                            style={{ backgroundColor: template.theme.colors.accent }}
                                            title="Accent"
                                        />
                                        <div
                                            className="color-dot"
                                            style={{ backgroundColor: template.theme.colors.text }}
                                            title="Text"
                                        />
                                    </div>

                                    <button className="btn-view-demo">View Live Demo →</button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="demo-features">
                <div className="demo-container">
                    <h2>What's Included</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">🎨</div>
                            <h3>Multiple Themes</h3>
                            <p>5 professionally designed variants to match any wedding style</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">📱</div>
                            <h3>Fully Responsive</h3>
                            <p>Beautiful on all devices - desktop, tablet, and mobile</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">⚡</div>
                            <h3>Blazing Fast</h3>
                            <p>Built with Next.js 16 for optimal performance</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🎵</div>
                            <h3>Background Music</h3>
                            <p>Elegant music player for your special song</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">📝</div>
                            <h3>RSVP System</h3>
                            <p>Collect guest confirmations with detailed forms</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">💌</div>
                            <h3>Guestbook</h3>
                            <p>Interactive message wall for guest wishes</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="demo-footer">
                <div className="demo-container">
                    <p>© 2026 Wedding Templates. All rights reserved.</p>
                    <div className="demo-links">
                        <Link href="/tool/generator">Template Generator</Link>
                        <Link href="/">Main Site</Link>
                    </div>
                </div>
            </footer>

            <style jsx>{`
        .demo-landing {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .demo-header {
          padding: 4rem 0 3rem;
          text-align: center;
          background: white;
          border-bottom: 1px solid #e5e7eb;
        }

        .demo-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .demo-header h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 1rem;
        }

        .demo-subtitle {
          font-size: 1.25rem;
          color: #6b7280;
          margin: 0;
        }

        .demo-templates {
          padding: 4rem 0;
        }

        .template-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .template-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
        }

        .template-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .template-preview {
          height: 240px;
          overflow: hidden;
        }

        .template-preview-bg {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .template-preview-content {
          text-align: center;
        }

        .template-preview-content h2 {
          font-size: 2rem;
          margin: 0 0 1rem;
          font-weight: 600;
        }

        .template-accent-bar {
          height: 4px;
          width: 80px;
          margin: 0 auto;
          border-radius: 2px;
        }

        .template-info {
          padding: 1.5rem;
        }

        .template-info h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 0.5rem;
        }

        .template-info p {
          color: #6b7280;
          margin: 0 0 1rem;
          line-height: 1.6;
        }

        .template-meta {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }

        .template-badge {
          background: #f3f4f6;
          color: #374151;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          font-weight: 500;
          text-transform: capitalize;
        }

        .template-sections {
          color: #6b7280;
        }

        .template-colors {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .color-dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        .btn-view-demo {
          width: 100%;
          padding: 0.75rem 1.5rem;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn-view-demo:hover {
          background: #2563eb;
        }

        .demo-features {
          padding: 4rem 0;
          background: white;
        }

        .demo-features h2 {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 3rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .feature-item {
          text-align: center;
          padding: 1.5rem;
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feature-item h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 0.5rem;
        }

        .feature-item p {
          color: #6b7280;
          margin: 0;
          line-height: 1.6;
        }

        .demo-footer {
          padding: 2rem 0;
          background: #1f2937;
          color: white;
          text-align: center;
        }

        .demo-footer p {
          margin: 0 0 1rem;
        }

        .demo-links {
          display: flex;
          gap: 2rem;
          justify-content: center;
        }

        .demo-links a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.2s;
        }

        .demo-links a:hover {
          color: white;
        }
      `}</style>
        </main>
    );
}
