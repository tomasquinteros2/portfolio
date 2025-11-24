import React from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInSectionProps {
    children: React.ReactNode;
    className?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    });

    return (
        <div
            ref={ref}
            className={`${className || ''} fade-in-section ${inView ? 'is-visible' : ''}`}
        >
            {children}
        </div>
    );
};

export default FadeInSection;