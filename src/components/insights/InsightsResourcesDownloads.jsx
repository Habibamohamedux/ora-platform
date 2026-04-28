import React from 'react';
import './InsightsResourcesDownloads.css';

const RESOURCES = [
  {
    type: 'pdf',
    typeBadge: 'PDF Guide',
    title: 'Comprehensive Maternal Care Handbook 2025',
    desc: 'A 68-page clinical guide covering evidence-based protocols for high-risk pregnancy management, written for OB/GYN practitioners.',
    date: 'April 2025',
    size: '4.2 MB',
    pages: '68 pages',
  },
  {
    type: 'report',
    typeBadge: 'Report',
    title: 'AI in Obstetrics: Market & Clinical Landscape',
    desc: 'Annual research report examining adoption trends, validation data, and regulatory frameworks for AI-powered maternal health tools.',
    date: 'March 2025',
    size: '2.8 MB',
    pages: '44 pages',
  },
  {
    type: 'guide',
    typeBadge: 'Guide',
    title: 'Wearable Technology Setup & Integration Guide',
    desc: 'Step-by-step clinical setup guide for integrating ORA wearables into hospital workflows and remote monitoring programs.',
    date: 'February 2025',
    size: '1.6 MB',
    pages: '28 pages',
  },
  {
    type: 'pdf',
    typeBadge: 'PDF',
    title: 'Preeclampsia Risk Stratification: Clinical Decision Framework',
    desc: 'Evidence-based risk stratification framework used in ORA clinical trials, adapted for clinical adoption.',
    date: 'January 2025',
    size: '3.1 MB',
    pages: '36 pages',
  },
  {
    type: 'report',
    typeBadge: 'Report',
    title: 'Patient Outcomes Report: ORA Pilot Program Q4 2024',
    desc: 'Detailed outcomes data from ORA\'s 6-month pilot program across 3 hospital systems, including adverse event reduction metrics.',
    date: 'December 2024',
    size: '5.4 MB',
    pages: '52 pages',
  },
];

const DownloadIcon = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
    <path d="M12 3v13M7 13l5 5 5-5M4 20h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FileIcon = ({ type }) => {
  const colors = { pdf: '#c94060', report: '#67667C', guide: '#16a34a' };
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
      <rect x="4" y="2" width="12" height="16" rx="2" stroke={colors[type] || '#67667C'} strokeWidth="1.5" />
      <path d="M8 7h6M8 11h6M8 15h4" stroke={colors[type] || '#67667C'} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 2v4h4" stroke={colors[type] || '#67667C'} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

const ResourceCard = ({ resource }) => (
  <div className="resource-card">
    <div className="resource-card__top">
      <div className={`resource-card__type-badge resource-card__type-badge--${resource.type}`}>
        <FileIcon type={resource.type} />
        {resource.typeBadge}
      </div>
      <span className="resource-card__pages">{resource.pages}</span>
    </div>
    <h3 className="resource-card__title">{resource.title}</h3>
    <p className="resource-card__desc">{resource.desc}</p>
    <div className="resource-card__footer">
      <div className="resource-card__meta">
        <span className="resource-card__date">{resource.date}</span>
        <span className="resource-card__size">{resource.size}</span>
      </div>
      <button className="resource-card__download-btn">
        <DownloadIcon />
        Download
      </button>
    </div>
  </div>
);

const InsightsResourcesDownloads = () => {
  return (
    <section className="resources-downloads">
      <div className="resources-downloads__inner">
        {/* Header */}
        <div className="resources-downloads__header">
          <div>
            <span className="resources-downloads__tag">Free Downloads</span>
            <h2 className="resources-downloads__title">Resources &amp;<br />Publications</h2>
          </div>
        </div>

        {/* Top Row — 3 cols */}
        <div className="resources-downloads__grid">
          {RESOURCES.slice(0, 3).map((r, i) => (
            <ResourceCard key={i} resource={r} />
          ))}
        </div>

        {/* Bottom Row — 2 cols */}
        <div className="resources-downloads__row">
          {RESOURCES.slice(3).map((r, i) => (
            <ResourceCard key={i} resource={r} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsResourcesDownloads;