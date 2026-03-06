import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { achievements } from '../data/resumeData';
import SectionHeading from './SectionHeading';

const iconMap = {
    opensource: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
    ),
    award: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.27.308 6.023 6.023 0 01-2.27-.308" />
        </svg>
    ),
    cert: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
    ),
};

const colorMap = {
    primary: 'from-primary-500/20 to-primary-700/20 text-primary-400',
    cyan: 'from-accent-cyan/20 to-primary-500/20 text-cyan-400',
    green: 'from-accent-green/20 to-accent-cyan/20 text-emerald-400',
    amber: 'from-accent-amber/20 to-accent-rose/20 text-amber-400',
};

export default function Achievements() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="achievements" className="relative py-24 md:py-32" ref={ref}>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
            <div className="section-container relative">
                <SectionHeading label="Achievements" title="Awards & Certifications" description="Recognition and credentials earned along the way" inView={inView} />
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {achievements.map((ach, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }} className="group glass-card rounded-2xl p-6 hover:bg-dark-800/40 transition-all duration-500 text-center border-gradient hover:-translate-y-1">
                            <div className={`inline-flex w-14 h-14 items-center justify-center rounded-xl bg-gradient-to-br ${colorMap[ach.color]} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {iconMap[ach.icon]}
                            </div>
                            <h3 className="font-display font-semibold text-dark-50 mb-1 text-sm">{ach.title}</h3>
                            <p className="text-xs text-primary-400 font-medium mb-2">{ach.issuer} {ach.date && `• ${ach.date}`}</p>
                            <p className="text-xs text-dark-400 leading-relaxed">{ach.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
