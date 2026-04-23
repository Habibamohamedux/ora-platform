import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'; 
import { supabase } from '../supabase'; 
import "./OraLegalCenter.css"; 
import NavbarLegal from '../components/layout/NavbarLegal';
import OraLegalFooter from '../components/layout/OraLegalFooter';
import LegalTitle from '../components/legal/LegalTitle';
import LegalDate from '../components/legal/LegalDate';
import LegalUpdates from '../components/legal/LegalUpdates';
import LegalParagraph from '../components/legal/LegalParagraph';
import LegalSidebar from '../components/legal/LegalSidebar';
import LegalSectionBlock from '../components/legal/LegalSectionBlock';
import ErrorPage from './ErrorPage';

const OraLegalCenter = () => {
    // 1️⃣ Get the slug from the URL (e.g., /terms-of-use)
    const { slug } = useParams(); 

    const [activeSection, setActiveSection] = useState('');
    const [pageData, setPageData] = useState(null);
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLegalPage = async () => {
            setLoading(true);
            // Reset scroll to top whenever we switch pages
            window.scrollTo(0, 0);

            // 2️⃣ Optimized fetch: Get Page + Sections + Cards in one go
            // We use the exact table names from your schema
            const { data, error } = await supabase
                .from('legal_pages')
                .select(`
                    *,
                    legal_sections (
                        id,
                        id_anchor,
                        menu_label,
                        section_title,
                        section_subtitle,
                        order_index,
                        legal_cards (
                            card_title,
                            content,
                            order_index
                        )
                    )
                `)
                .eq('slug', slug)
                .single();

            if (error || !data) {
                console.error('❌ Supabase Error:', error);
                setLoading(false);
                return;
            }

            // 3️⃣ Format the relational data for your components
            const formattedSections = data.legal_sections
                .sort((a, b) => a.order_index - b.order_index)
                .map(section => ({
                    id: section.id_anchor,
                    menuLabel: section.menu_label,
                    sectionTitle: section.section_title,
                    sectionSubtitle: section.section_subtitle,
                    cards: section.legal_cards
                        .sort((a, b) => a.order_index - b.order_index)
                        .map(card => ({
                            cardTitle: card.card_title,
                            // Content is injected as HTML for lists/bolding
                            content: (
                                <div dangerouslySetInnerHTML={{ __html: card.content }} />
                            )
                        }))
                }));

            setPageData(data);
            setSections(formattedSections);
            
            // Default active section to the first anchor
            if (formattedSections.length > 0) {
                setActiveSection(formattedSections[0].id);
            }
            
            setLoading(false);
        };

        fetchLegalPage();
    }, [slug]); // 🔄 Re-fetches when the URL changes

    const handleSectionClick = (id) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            // Offset for your fixed NavbarLegal
            const offset = 100; 
            const y = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    if (loading) return (
        <div className="legal-loading-state">
            <p>Loading ORA Legal Data...</p>
        </div>
    );
    
    if (!pageData) return (
        <ErrorPage
          eyebrow="Legal Signal Lost"
          title="That legal page is not in ORA's archive."
          message="The resource may have moved, or the route may not exist yet."
        />
    );

    return (
        <div className="legal-page-wrapper">
            <NavbarLegal />
            
            <section className="ora-legal-center">
                {/* Dynamic Header from legal_pages table */}
                <div className="legal-header-row">
                    <LegalTitle>{pageData.legal_title}</LegalTitle>
                    <div className="legal-meta-group">
                        <LegalDate monthYear={pageData.legal_date} />
                        <LegalUpdates monthYear={pageData.legal_updates} />
                    </div>
                </div>

                <LegalParagraph>
                    {pageData.intro_paragraph}
                </LegalParagraph>

                <div className="legal-gradient-hr" />

                <div className="legal-layout-grid">
                    {/* Sidebar generated dynamically from sections */}
                    <LegalSidebar 
                      sections={sections} 
                      activeSectionId={activeSection} 
                      onSectionClick={handleSectionClick}
                    />

                    {/* Main Content Area */}
                    <div className="legal-main-content">
                        {sections.map((section) => (
                            <LegalSectionBlock 
                                key={section.id} 
                                sectionData={section} 
                            />
                        ))}
                    </div>
                </div>
     
            </section>
                       <OraLegalFooter />
        </div>
    );
}

export default OraLegalCenter;
