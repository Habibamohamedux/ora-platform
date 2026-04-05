import React from 'react';
import '../../pages/OraLegalCenter.css';

const LegalSectionBlock = ({ sectionData }) => {
  return (
    <div id={sectionData.id} className="legal-section-block">
      
      {/* Main Section Header */}
      <h2 className="section-main-title">{sectionData.sectionTitle}</h2>
      {sectionData.sectionSubtitle && (
        <p className="section-subtitle">{sectionData.sectionSubtitle}</p>
      )}

      {/* Map through the white cards for this section */}
      <div className="policy-cards-container">
        {sectionData.cards.map((card, index) => (
          <div key={index} className="policy-card legal-card-container ">
            {card.cardTitle && (
              <h3 className="policy-card-title">{card.cardTitle}</h3>
            )}
            <div className="policy-card-content">
              {card.content}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default LegalSectionBlock;