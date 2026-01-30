"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

interface SubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SubscriptionModal({ isOpen, onClose }: SubscriptionModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md bg-zinc-900 border-zinc-800 text-white p-0 overflow-hidden">
                <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-indigo-600/30 to-transparent pointer-events-none" />

                <div className="p-6 relative z-10">
                    <DialogHeader className="mb-6 text-center">
                        <div className="mx-auto w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4 border border-indigo-500/30">
                            <Sparkles className="w-8 h-8 text-indigo-400 animate-pulse" />
                        </div>
                        <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            내 얼굴에 직접 입혀보세요
                        </DialogTitle>
                        <DialogDescription className="text-zinc-400 text-base mt-2">
                            AI가 분석한 결과를 바탕으로<br />
                            가장 자연스러운 헤어스타일을 합성해드립니다.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 mb-8">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-start space-x-3">
                            <div className="mt-1 bg-indigo-500/20 p-1 rounded-full">
                                <Check className="w-3 h-3 text-indigo-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">프리미엄 가상 피팅 (8장)</h4>
                                <p className="text-xs text-zinc-400">내 얼굴 사진에 최적의 헤어스타일을 자연스럽게 합성합니다.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-start space-x-3">
                            <div className="mt-1 bg-indigo-500/20 p-1 rounded-full">
                                <Check className="w-3 h-3 text-indigo-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">정밀 분석 리포트 PDF</h4>
                                <p className="text-xs text-zinc-400">얼굴형, 이목구비 비율, 퍼스널 컬러까지 포함된 15페이지 분량의 보고서.</p>
                            </div>
                        </div>
                    </div>

                    <DialogFooter className="grid gap-3">
                        <Button className="w-full h-12 text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 border-0">
                            9,900원으로 시작하기 <Lock className="w-4 h-4 ml-2" />
                        </Button>
                        <Button variant="ghost" onClick={onClose} className="text-zinc-500 hover:text-zinc-300">
                            다음에 하기
                        </Button>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    );
}
