'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function TermsPage() {
    const { language } = useLanguage();

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
                    body: "The analysis results and recommended styles provided by the Company are estimates based on AI algorithms and may differ from actual results. The Company is not legally liable for them."
                },
                {
                    title: "Article 4 (Copyright)",
                    body: "Copyright for all content (images, text, analysis logic, etc.) provided by the service belongs to the Company. Users may not copy or distribute it for commercial purposes without permission."
                }
            ],
            date: "Effective Date: January 30, 2026"
        },
        ja: {
            title: "利用規約",
            sections: [
                {
                    title: "第1条（目的）",
                    body: "本規約は、HairFit（以下「当社」）が提供するヘアスタイル推奨および仮想体験サービス（以下「サービス」）の利用条件および手続き、当社と会員間の権利、義務および責任事項などを規定することを目的とします。"
                },
                {
                    title: "第2条（サービスの内容）",
                    body: "当社が提供するサービスの内容は以下の通りです。",
                    items: [
                        "AIベースの顔型分析サービス",
                        "顔型に基づくヘアスタイル推奨サービス",
                        "仮想ヘア合成のためのAI画像生成サービス（有料）"
                    ]
                },
                {
                    title: "第3条（免責条項）",
                    body: "当社が提供する分析結果および推奨スタイルはAIアルゴリズムに基づく予測値であり、実際の結果と異なる場合があり、これに対する法的責任を負いません。"
                },
                {
                    title: "第4条（著作権）",
                    body: "サービスで提供するすべてのコンテンツ（画像、テキスト、分析ロジックなど）の著作権は当社に帰属します。ユーザーはこれを営利目的で無断複製、配布することはできません。"
                }
            ],
            date: "施行日：2026年1月30日"
        },
        zh: {
            title: "服务条款",
            sections: [
                {
                    title: "第1条（目的）",
                    body: "本条款旨在规定HairFit（以下简称“公司”）提供的发型推荐及虚拟体验服务（以下简称“服务”）的使用条件及程序，公司与会员之间的权利、义务及责任事项等。"
                },
                {
                    title: "第2条（服务内容）",
                    body: "公司提供的服务内容如下。",
                    items: [
                        "基于AI的脸型分析服务",
                        "基于脸型的发型推荐服务",
                        "用于虚拟头发合成的AI图像生成服务（付费）"
                    ]
                },
                {
                    title: "第3条（免责条款）",
                    body: "公司提供的分析结果及推荐风格是基于AI算法的预测值，可能与实际结果有所不同，对此不承担法律责任。"
                },
                {
                    title: "第4条（版权）",
                    body: "服务提供的所有内容（图像、文本、分析逻辑等）的版权归公司所有。用户不得出于盈利目的擅自复制、分发。"
                }
            ],
            date: "生效日期：2026年1月30日"
        },
        vn: {
            title: "Điều khoản dịch vụ",
            sections: [
                {
                    title: "Điều 1 (Mục đích)",
                    body: "Các Điều khoản này nhằm quy định các điều kiện và thủ tục sử dụng, quyền, nghĩa vụ và trách nhiệm giữa HairFit (sau đây gọi là \"Công ty\") và các thành viên liên quan đến dịch vụ đề xuất kiểu tóc và trải nghiệm ảo (sau đây gọi là \"Dịch vụ\") do Công ty cung cấp."
                },
                {
                    title: "Điều 2 (Nội dung dịch vụ)",
                    body: "Các dịch vụ do Công ty cung cấp như sau:",
                    items: [
                        "Dịch vụ phân tích khuôn mặt dựa trên AI",
                        "Dịch vụ đề xuất kiểu tóc dựa trên hình dạng khuôn mặt",
                        "Dịch vụ tạo hình ảnh AI để tổng hợp tóc ảo (Trả phí)"
                    ]
                },
                {
                    title: "Điều 3 (Miễn trừ trách nhiệm)",
                    body: "Kết quả phân tích và các kiểu tóc được đề xuất bởi Công ty là các ước tính dựa trên thuật toán AI và có thể khác với kết quả thực tế. Công ty không chịu trách nhiệm pháp lý về chúng."
                },
                {
                    title: "Điều 4 (Bản quyền)",
                    body: "Bản quyền đối với tất cả nội dung (hình ảnh, văn bản, logic phân tích, v.v.) được cung cấp bởi dịch vụ thuộc về Công ty. Người dùng không được sao chép hoặc phân phối cho mục đích thương mại mà không có sự cho phép."
                }
            ],
            date: "Ngày hiệu lực: 30 tháng 1 năm 2026"
        },
        th: {
            title: "ข้อกำหนดการใช้บริการ",
            sections: [
                {
                    title: "ข้อ 1 (วัตถุประสงค์)",
                    body: "ข้อกำหนดและเงื่อนไขเหล่านี้มีวัตถุประสงค์เพื่อกำหนดข้อกำหนดและเงื่อนไขการใช้งาน สิทธิ หน้าที่ และความรับผิดชอบระหว่าง HairFit (ซึ่งต่อไปนี้จะเรียกว่า \"บริษัท\") และสมาชิก เกี่ยวกับบริการแนะนำทรงผมและประสบการณ์เสมือนจริง (ซึ่งต่อไปนี้จะเรียกว่า \"บริการ\") ที่จัดให้โดยบริษัท"
                },
                {
                    title: "ข้อ 2 (เนื้อหาบริการ)",
                    body: "บริการที่บริษัทจัดให้มีดังนี้:",
                    items: [
                        "บริการวิเคราะห์รูปหน้าด้วย AI",
                        "บริการแนะนำทรงผมตามรูปหน้า",
                        "บริการสร้างภาพ AI สำหรับการสังเคราะห์ผมเสมือนจริง (มีค่าใช้จ่าย)"
                    ]
                },
                {
                    title: "ข้อ 3 (ข้อปฏิเสธความรับผิดชอบ)",
                    body: "ผลการวิเคราะห์และสไตล์ที่แนะนำโดยบริษัทเป็นการคาดการณ์โดยใช้อัลกอริธ AI และอาจแตกต่างจากผลลัพธ์จริง บริษัทไม่รับผิดชอบทางกฎหมายใดๆ"
                },
                {
                    title: "ข้อ 4 (ลิขสิทธิ์)",
                    body: "ลิขสิทธิ์สำหรับเนื้อหาทั้งหมด (รูปภาพ ข้อความ ลอจิกการวิเคราะห์ ฯลฯ) ที่ให้บริการเป็นของบริษัท ผู้ใช้ไม่สามารถคัดลอกหรือเผยแพร่เพื่อวัตถุประสงค์ทางการค้าโดยไม่ได้รับอนุญาต"
                }
            ],
            date: "วันที่มีผลบังคับใช้: 30 มกราคม 2026"
        }
    };

    // @ts-ignore
    const t = content[language] || content['en'];

    return (
        <div className="container mx-auto px-6 py-12 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">{t.title}</h1>

            <div className="space-y-8">
                {t.sections.map((section: any, index: number) => (
                    <section key={index} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <h2 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                            {section.title}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                            {section.body}
                        </p>
                        {section.items && (
                            <ul className="mt-4 list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
                                {section.items.map((item: string, i: number) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </section>
                ))}
            </div>

            <div className="mt-12 text-sm text-slate-500 text-right">
                {t.date}
            </div>
        </div>
    );
}
