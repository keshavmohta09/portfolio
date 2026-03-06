import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../data/resumeData';
import SectionHeading from './SectionHeading';

export default function Experience() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="experience" className="relative py-24 md:py-32" ref={ref}>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
            <div className="absolute top-1/3 -left-48 w-96 h-96 bg-accent-cyan/8 rounded-full blur-3xl" />

            <div className="section-container relative">
                <SectionHeading
                    label="Experience"
                    title="Career Journey"
                    description="My professional growth and key contributions"
                    inView={inView}
                />

                <div className="relative mt-16 max-w-3xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-cyan/30 to-transparent" />

                    {experience.map((job, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 + idx * 0.15 }}
                            className="relative pl-12 md:pl-20 pb-12 last:pb-0 group"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-dark-950 border-2 border-primary-500 group-hover:bg-primary-500 transition-colors duration-300 z-10">
                                {job.type === 'current' && (
                                    <span className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-30" />
                                )}
                            </div>

                            {/* Content card */}
                            <div className="glass-card rounded-2xl p-6 hover:bg-dark-800/40 transition-all duration-500 border-gradient">
                                {/* Header */}
                                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-lg font-display font-semibold text-dark-50">
                                            {job.title}
                                        </h3>
                                        {job.companyUrl ? (
                                            <a
                                                href={job.companyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-primary-400 hover:text-primary-300 font-medium text-sm mt-0.5 transition-colors duration-300"
                                            >
                                                {job.company}
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        ) : (
                                            <p className="text-primary-400 font-medium text-sm mt-0.5">
                                                {job.company}
                                            </p>
                                        )}
                                        {job.workingWith && (
                                            <p className="text-xs text-dark-400 mt-1 flex items-center gap-1 flex-wrap">
                                                <span>Working with</span>
                                                {job.workingWith.map((org, orgIdx) => (
                                                    <span key={org.name}>
                                                        <a href={org.url} target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:text-cyan-300 transition-colors duration-200">{org.name}</a>
                                                        {orgIdx < job.workingWith.length - 1 && <span className="text-dark-600"> · </span>}
                                                    </span>
                                                ))}
                                            </p>
                                        )}
                                    </div>
                                    <div className="text-right">
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium glass-card text-dark-300">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {job.period}
                                        </div>
                                        <p className="text-xs text-dark-500 mt-1">{job.location}</p>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <ul className="space-y-2">
                                    {job.achievements.map((achievement, achIdx) => (
                                        <motion.li
                                            key={achIdx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={inView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.3, delay: 0.5 + idx * 0.15 + achIdx * 0.05 }}
                                            className="flex items-start gap-2 text-sm text-dark-300"
                                        >
                                            <svg className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                            <span>{achievement}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
