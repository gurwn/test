'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function PrivacyPage() {
    const { language } = useLanguage();

    const content = {
        ko: {
            title: "개인정보처리방침",
            sections: [
                {
                    title: "1. 개인정보의 처리 목적",
                    body: "HairFit('서비스')은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.",
                    items: [
                        "서비스 제공 및 콘텐츠 이용",
                        "회원 관리 및 본인 확인 (추후 회원가입 도입 시)",
                        "신규 서비스 개발 및 마케팅 광고에의 활용"
                    ]
                },
                {
                    title: "2. 처리하는 개인정보의 항목",
                    body: "서비스는 다음의 개인정보 항목을 처리하고 있습니다.",
                    items: [
                        "필수항목: 접속 로그, 쿠키, IP 주소 (서비스 이용 기록)",
                        "선택항목: 업로드된 사진 (분석 후 즉시 삭제되며 서버에 저장되지 않음)"
                    ]
                },
                {
                    title: "3. 개인정보의 파기",
                    body: "서비스는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다. 특히 업로드된 사용자 사진은 브라우저(로컬) 내에서만 분석 목적으로 사용되며, 서버로 전송되거나 저장되지 않습니다."
                },
                {
                    title: "4. 개인정보 보호책임자",
                    body: "서비스는 개인정보 처리에 관한 업무를 총괄하고 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.",
                    box: "이메일: ehlee8962@gmail.com"
                }
            ],
            date: "공고일자: 2026년 1월 30일 / 시행일자: 2026년 1월 30일"
        },
        en: {
            title: "Privacy Policy",
            sections: [
                {
                    title: "1. Purpose of Processing Personal Information",
                    body: "HairFit ('Service') processes personal information for the following purposes. The processed personal information will not be used for any purpose other than the following, and if the purpose of use changes, necessary measures such as obtaining separate consent will be taken.",
                    items: [
                        "Service provision and content usage",
                        "Member management and verification (upon future registration implementation)",
                        "New service development and marketing/advertising"
                    ]
                },
                {
                    title: "2. Items of Personal Information Processed",
                    body: "The Service processes the following items of personal information:",
                    items: [
                        "Required: Access logs, cookies, IP address (Service usage records)",
                        "Optional: Uploaded photos (Deleted immediately after analysis and not saved on server)"
                    ]
                },
                {
                    title: "3. Destruction of Personal Information",
                    body: "The Service destroys personal information without delay when the personal information becomes unnecessary, such as the expiration of the retention period or achievement of the processing purpose. In particular, uploaded user photos are used for analysis purposes only within the browser (local) and are not transmitted to or stored on the server."
                },
                {
                    title: "4. Data Protection Officer",
                    body: "The Service designates the following Data Protection Officer to oversee personal information processing and handle complaints and damage relief related to personal information processing.",
                    box: "Email: ehlee8962@gmail.com"
                }
            ],
            date: "Effective Date: January 30, 2026"
        }
    };

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
                        {section.box && (
                            <div className="mt-2 p-4 bg-muted/50 rounded-lg">
                                <p>{section.box}</p>
                            </div>
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
