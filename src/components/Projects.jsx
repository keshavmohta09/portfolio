import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/resumeData';
import SectionHeading from './SectionHeading';

const colorClasses = {
    primary: {
        bg: 'from-primary-600/20 to-primary-900/20',
        border: 'hover:border-primary-500/30',
        tag: 'bg-primary-500/10 text-primary-300',
        glow: 'group-hover:shadow-primary-500/10',
    },
    cyan: {
        bg: 'from-accent-cyan/20 to-primary-900/20',
        border: 'hover:border-accent-cyan/30',
        tag: 'bg-accent-cyan/10 text-cyan-300',
        glow: 'group-hover:shadow-accent-cyan/10',
    },
    green: {
        bg: 'from-accent-green/20 to-primary-900/20',
        border: 'hover:border-accent-green/30',
        tag: 'bg-accent-green/10 text-emerald-300',
        glow: 'group-hover:shadow-accent-green/10',
    },
    amber: {
        bg: 'from-accent-amber/20 to-primary-900/20',
        border: 'hover:border-accent-amber/30',
        tag: 'bg-accent-amber/10 text-amber-300',
        glow: 'group-hover:shadow-accent-amber/10',
    },
};

export default function Projects() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="projects" className="relative py-24 md:py-32" ref={ref}>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl" />

            <div className="section-container relative">
                <SectionHeading
                    label="Projects"
                    title="Featured Work"
                    description="A selection of projects that showcase my engineering skills"
                    inView={inView}
                />

                <div className="grid md:grid-cols-2 gap-6 mt-12">
                    {projects.map((project, idx) => {
                        const colors = colorClasses[project.color] || colorClasses.primary;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                                className={`group relative glass-card rounded-2xl p-6 md:p-8 transition-all duration-500 border border-dark-800/50 ${colors.border} hover:-translate-y-1 hover:shadow-xl ${colors.glow}`}
                            >
                                {/* Featured badge */}
                                {project.featured && (
                                    <div className="absolute top-4 right-4">
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-primary-500/15 text-primary-300 border border-primary-500/20">
                                            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                            Featured
                                        </span>
                                    </div>
                                )}

                                {/* Header gradient bar */}
                                <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${colors.bg.replace('/20', '')} mb-6`} />

                                {/* Project name */}
                                <h3 className="text-xl font-display font-semibold text-dark-50 mb-3 group-hover:text-primary-300 transition-colors duration-300">
                                    {project.name}
                                </h3>

                                {/* Description */}
                                <p className="text-dark-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className={`px-2.5 py-1 rounded-md text-xs font-medium ${colors.tag}`}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm text-dark-400 hover:text-primary-400 transition-colors duration-300"
                                        >
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            Source Code
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm text-dark-400 hover:text-accent-cyan transition-colors duration-300"
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            {project.liveLabel || 'Live Demo'}
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
