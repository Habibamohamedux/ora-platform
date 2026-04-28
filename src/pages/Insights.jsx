import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Seo from '../components/seo/Seo';
import InsightsHeroSection from '../components/insights/InsightsHeroSection';
import InsightsFeaturedResearch from '../components/insights/InsightsFeaturedResearch';
import InsightsArticlesSection from '../components/insights/InsightsArticlesSection';
import InsightsDataStats from '../components/insights/InsightsDataStats';
import InsightsTopicsGrid from '../components/insights/InsightsTopicsGrid';
import InsightsExpertContributions from '../components/insights/InsightsExpertContributions';
import InsightsResourcesDownloads from '../components/insights/InsightsResourcesDownloads';
import InsightsNewsletter from '../components/insights/InsightsNewsletter';
import './Insights.css';

/* ── Scroll-reveal hook ── */
const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.insights-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const Insights = () => {
  useReveal();

  return (
    <div className="insights-page">
      <Seo
        title="Insights & Research | ORA Maternal Health Knowledge Center"
        description="Explore ORA insights, clinical research, expert perspectives, and data-driven resources shaping the future of maternal and women's health."
        keywords={[
          'maternal health research',
          'clinical insights',
          'women health articles',
          'health technology resources',
        ]}
        schemaType="CollectionPage"
      />
      <Navbar />

      {/* 1. Hero */}
      <InsightsHeroSection />

      <div className="insights-page__divider" />

      {/* 2. Featured Research */}
      <div className="insights-reveal">
        <InsightsFeaturedResearch />
      </div>

      <div className="insights-page__divider" />

      {/* 3. Articles */}
      <div className="insights-reveal insights-reveal--delay-1">
        <InsightsArticlesSection />
      </div>

      {/* 4. Data & Stats — dark section, self-revealing */}
      <InsightsDataStats />

      {/* 5. Topics Grid */}
      <div className="insights-reveal">
        <InsightsTopicsGrid />
      </div>

      <div className="insights-page__divider" />

      {/* 6. Expert Contributions */}
      <div className="insights-reveal insights-reveal--delay-1">
        <InsightsExpertContributions />
      </div>

      <div className="insights-page__divider" />

      {/* 7. Resources & Downloads */}
      <div className="insights-reveal">
        <InsightsResourcesDownloads />
      </div>

      {/* 8. Newsletter */}
      <div className="insights-reveal insights-reveal--delay-1">
        <InsightsNewsletter />
      </div>
    </div>
  );
};

export default Insights;
