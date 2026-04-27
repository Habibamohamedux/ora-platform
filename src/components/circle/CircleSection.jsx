import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CircleSection = ({ section, index }) => {
  const panelRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ['start end', 'end start'],
  });

  const copyY = useTransform(scrollYProgress, [0, 0.5, 1], [48, 0, -48]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0.35, 1, 1, 0.4]);
  const visualY = useTransform(scrollYProgress, [0, 0.5, 1], [72, 0, -72]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.02, 0.96]);
  const numberY = useTransform(scrollYProgress, [0, 0.5, 1], [-30, 0, 30]);
  const noteY = useTransform(scrollYProgress, [0, 0.5, 1], [28, 0, -28]);

  return (
    <article className={`circle-stack-panel circle-stack-panel--${section.tone}`} ref={panelRef}>
      <div className="circle-stack-panel-sticky">
        <div className={`circle-stack-panel-grid${index % 2 === 1 ? ' is-reversed' : ''}`}>
          <motion.div
            className="circle-stack-copy"
            style={{ y: copyY, opacity: copyOpacity }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="circle-stack-kicker">{section.kicker}</span>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            {section.ctas && section.ctas.length > 0 && (
              <motion.div
                className="circle-stack-ctas"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                {section.ctas.map((cta, ctaIndex) => (
                  <a key={ctaIndex} href={cta.link} className={`circle-cta-button ${cta.primary ? 'primary' : 'secondary'}`}>
                    {cta.text} {cta.text.includes('→') ? '' : ''}
                  </a>
                ))}
              </motion.div>
            )}
            <motion.div
              className="circle-stack-tags"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {section.tags.map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.45, delay: 0.12 + tagIndex * 0.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="circle-stack-visual" style={{ y: visualY }}>
            <div className="circle-stack-frame">
              <motion.img src={section.image} alt={section.title} style={{ scale: imageScale }} />
            </div>
            <motion.div
              className="circle-stack-number"
              style={{ y: numberY }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              {section.number}
            </motion.div>
            <motion.div
              className="circle-stack-note"
              style={{ y: noteY }}
              initial={{ opacity: 0, rotate: -6, y: 24 }}
              whileInView={{ opacity: 1, rotate: -4, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <strong>{section.noteTitle}</strong>
              <span>{section.noteBody}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </article>
  );
};

export default CircleSection;
