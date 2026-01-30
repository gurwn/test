'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function TermsPage() {
    const { language, t } = useLanguage();

    const content = {
        ko: {
            title: "서비스 이용약관",
            sections: [
                {
                    title: "제1조 (목적)",
                    body: `본 약관은 HairFit(이하 "회사")이 제공하는 헤어스타일 추천 및 가상 체험 서비스(이하 "서비스")의 이용조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.`
                },
                {
                    title: "제2조 (서비스의 내용)",
                    body: "회사가 제공하는 서비스의 내용은 다음과 같습니다.",
                    items: [
                        "AI 기반 얼굴형 분석 서비스",
                        "얼굴형에 따른 헤어스타일 추천 서비스",
                        "가상 헤어 합성을 위한 AI 이미지 생성 서비스 (유료)"
                    ]
                },
                {
                    title: "제3조 (면책 조항)",
                    body: "회사가 제공하는 분석 결과 및 추천 스타일은 AI 알고리즘에 기반한 예측값으로, 실제 결과와 다를 수 있으며 이에 대한 법적 책임을 지지 않습니다."
                },
                {
                    title: "제4조 (저작권)",
                    body: "서비스에서 제공하는 모든 콘텐츠(이미지, 텍스트, 분석 로직 등)에 대한 저작권은 회사에 귀속됩니다. 사용자는 이를 영리 목적으로 무단 복제, 배포할 수 없습니다."
                }
            ],
            date: "시행일자: 2026년 1월 30일"
        },
        en: {
            title: "Terms of Service",
            sections: [
                {
                    title: "Article 1 (Purpose)",
                    body: `The purpose of these Terms and Conditions is to stipulate the terms and conditions of use, rights, obligations, and responsibilities between HairFit (hereinafter referred to as the "Company") and members regarding the hairstyle recommendation and virtual experience service (hereinafter referred to as the "Service") provided by the Company.`
                },
                {
                    title: "Article 2 (Service Content)",
                    body: "The services provided by the Company are as follows:",
                    items: [
                        "AI-based face shape analysis service",
                        "Hairstyle recommendation service based on face shape",
                        "AI image generation service for virtual hair synthesis (Paid)"
                    ]
                },
                {
                    title: "Article 3 (Disclaimer)",
                    body: "The analysis results and recommended styles provided by the Company are predictions based on AI algorithms and may differ from actual results. The Company does not take legal responsibility for these results."
                },
                {
                    title: "Article 4 (Copyright)",
                    body: "The copyright for all content (images, text, analysis logic, etc.) provided by the Service belongs to the Company. Users may not reproduce or distribute this content for commercial purposes without permission."
                }
            ],
            date: "Effective Date: January 30, 2026"
        }
    };

    // Default to EN for other languages for now, or use mapped language if available
    // For simplicity in MVP, we map KO to KO, and everything else to EN
    const activeContent = language === 'ko' ? content.ko : content.en;

    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-3xl font-bold mb-8">{activeContent.title}</h1>

            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
                {activeContent.sections.map((section, idx) => (
                    <section key={idx}>
                        <h2 className="text-lg font-bold text-foreground mb-2">{section.title}</h2>
                        <p>{section.body}</p>
                        {section.items && (
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </section>
                ))}

                <p className="text-xs pt-8 border-t border-border">
                    {activeContent.date}
                </p>
            </div>
        </div>
    );
}
