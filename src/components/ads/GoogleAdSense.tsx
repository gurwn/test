"use client";

import { useEffect, useRef } from 'react';

type AdSenseProps = {
    className?: string;
    style?: React.CSSProperties;
    client?: string;
    slot: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    responsive?: string;
    layoutKey?: string;
};

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

export default function GoogleAdSense({
    className,
    style,
    client = "ca-pub-XXXXXXXXXXXXXXXX", // User needs to replace this
    slot,
    format = 'auto',
    responsive = 'true',
    layoutKey
}: AdSenseProps) {
    const adRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        try {
            if (window.adsbygoogle) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (e) {
            console.error("AdSense error", e);
        }
    }, [slot]); // Rerun if slot changes

    return (
        <div className={`adsense-container ${className} my-4 overflow-hidden text-center text-xs text-gray-400 min-h-[100px] flex items-center justify-center`}>
            {/* The 'ins' tag is required by Google */}
            <ins
                className="adsbygoogle"
                style={{ display: 'block', width: '100%', ...style }}
                data-ad-client={client}
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive={responsive}
                data-ad-layout-key={layoutKey}
            >
                {/* Fallback visual for dev/unfilled */}
                <span className="opacity-50 block py-4">Advertisement (Slot: {slot})</span>
            </ins>
        </div>
    );
}
