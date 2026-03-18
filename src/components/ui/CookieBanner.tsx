'use client';

import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

interface CookieBannerProps {
    dictionary: {
        title: string;
        description: string;
        acceptAll: string;
        rejectAll: string;
        manage: string;
    };
}

export default function CookieBanner({dictionary}: CookieBannerProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('gmetrics_cookie_consent');

        if (!consent) {
            const timer = setTimerout(() => serIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }

    )
}