'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Download, Move, RotateCw, ZoomIn } from 'lucide-react';

interface VirtualStylerProps {
    userImage: string;
    styleOverlay: string; // URL to transparent hair PNG
}

export default function VirtualStyler({ userImage, styleOverlay }: VirtualStylerProps) {
    // State for transformations
    const [scale, setScale] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragStartRef = useRef({ x: 0, y: 0 });

    // For MVP, since we don't have real transparent hair PNGs for every style,
    // I will use a placeholder "Wig" image logic or just try to use the style image with a blend mode
    // But strictly, the prompt asked for "hair application".
    // I will use a CSS mix-blend-mode or mask approach for the 'styleOverlay' if it's a full photo.
    // Ideally, 'styleOverlay' should be a transparent PNG.

    // Since I don't have transparent assets, I'll assume for this Component that `styleOverlay` IS transparent.
    // In reality, I might need to filter it.

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
        dragStartRef.current = { x: clientX - position.x, y: clientY - position.y };
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
        setPosition({
            x: clientX - dragStartRef.current.x,
            y: clientY - dragStartRef.current.y
        });
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    return (
        <div className="flex flex-col h-full bg-black text-white">
            {/* Canvas Area */}
            <div
                className="flex-1 relative overflow-hidden bg-neutral-900 flex items-center justify-center touch-none"
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                {/* User Photo */}
                {userImage ? (
                    <img src={userImage} className="max-w-full max-h-full object-contain pointer-events-none opacity-90" alt="User" />
                ) : (
                    <div className="text-neutral-500">No Photo</div>
                )}

                {/* Hair Overlay */}
                <div
                    className="absolute cursor-move select-none"
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg) scale(${scale})`,
                        width: '300px', // Base size
                        top: '20%', // Initial position approximation
                    }}
                    onMouseDown={handleDragStart}
                    onTouchStart={handleDragStart}
                >
                    {/* 
             Here is the TRICK for MVP: 
             If we don't have transparent PNGs, we can use a "mask" image or just a simple placeholder shape.
             Or we display the reference style image with some opacity/blend mode.
             I will use the style image with `mix-blend-mode: hard-light` as a "preview" 
             OR just display a generic "Hair Outline" if real assets are missing.
             For now, I'll use the passed image.
           */}
                    <img
                        src={styleOverlay}
                        className="w-full h-auto drop-shadow-2xl"
                        style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))' }} // Basic attempt
                        // In a real app, these would be transparent PNGs.
                        onError={(e) => e.currentTarget.src = 'https://purepng.com/public/uploads/large/purepng.com-hairhair-strands-men-people-shock-users-hair-man-male-boy-251520164627h8h2c.png'}
                        alt="Hair Overlay"
                    />

                    {/* Interaction Ring */}
                    <div className="absolute inset-0 border-2 border-indigo-500/50 rounded-lg pointer-events-none opacity-0 hover:opacity-100 transition-opacity" />
                </div>
            </div>

            {/* Controls */}
            <div className="p-6 bg-neutral-900 border-t border-white/10 space-y-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs text-muted-foreground">
                            <span className="flex items-center gap-1"><ZoomIn className="w-3 h-3" /> Size</span>
                            <span>{Math.round(scale * 100)}%</span>
                        </div>
                        <Slider
                            value={[scale]}
                            min={0.5}
                            max={2}
                            step={0.05}
                            onValueChange={([v]) => setScale(v)}
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs text-muted-foreground">
                            <span className="flex items-center gap-1"><RotateCw className="w-3 h-3" /> Rotate</span>
                            <span>{rotation}°</span>
                        </div>
                        <Slider
                            value={[rotation]}
                            min={-45}
                            max={45}
                            step={1}
                            onValueChange={([v]) => setRotation(v)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full" onClick={() => { setScale(1); setRotation(0); setPosition({ x: 0, y: 0 }); }}>
                        Reset
                    </Button>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                        <Download className="w-4 h-4 mr-2" />
                        Save
                    </Button>
                </div>
            </div>
        </div>
    );
}
