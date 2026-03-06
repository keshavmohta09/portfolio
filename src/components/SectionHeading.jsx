import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, description, inView = true }) {
    return (
        <div className="text-center mb-12 md:mb-16">
            <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 glass-card rounded-full mb-4"
            >
                {label}
            </motion.span>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-dark-50 mb-4"
            >
                {title}
            </motion.h2>
            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-dark-400 text-base md:text-lg max-w-xl mx-auto"
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
}
