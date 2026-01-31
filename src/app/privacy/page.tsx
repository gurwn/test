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
                    body: "The Service processes the following personal information items.",
                    items: [
                        "Required items: Access logs, cookies, IP addresses (Service usage records)",
                        "Optional items: Uploaded photos (deleted immediately after analysis and not saved to server)"
                    ]
                },
                {
                    title: "3. Destruction of Personal Information",
                    body: "The Service destroys personal information without delay when it becomes unnecessary, such as when the retention period expires or the purpose of processing is achieved. In particular, uploaded user photos are used for analysis purposes only within the browser (local) and are not transmitted or saved to the server."
                },
                {
                    title: "4. Data Protection Officer",
                    body: "The Service designates the following Data Protection Officer to oversee personal information processing and handle user complaints:",
                    box: "Email: ehlee8962@gmail.com"
                }
            ],
            date: "Announcement Date: January 30, 2026 / Effective Date: January 30, 2026"
        },
        ja: {
            title: "プライバシーポリシー",
            sections: [
                {
                    title: "1. 個人情報の処理目的",
                    body: "HairFit（以下「サービス」）は、次の目的のために個人情報を処理します。処理している個人情報は、次の目的以外の用途には利用されず、利用目的が変更される場合には別途同意を得るなど必要な措置を履行する予定です。",
                    items: [
                        "サービスの提供およびコンテンツの利用",
                        "会員管理および本人確認（将来の会員登録導入時）",
                        "新規サービス開発およびマーケティング広告への活用"
                    ]
                },
                {
                    title: "2. 処理する個人情報の項目",
                    body: "サービスは、次の個人情報項目を処理しています。",
                    items: [
                        "必須項目：アクセスログ、Cookie、IPアドレス（サービス利用記録）",
                        "選択項目：アップロードされた写真（分析後すぐに削除され、サーバーに保存されません）"
                    ]
                },
                {
                    title: "3. 個人情報の破棄",
                    body: "サービスは、個人情報保有期間の経過、処理目的達成など個人情報が不要になったときは、遅滞なく当該個人情報を破棄します。特にアップロードされたユーザー写真は、ブラウザ（ローカル）内でのみ分析目的で使用され、サーバーに送信または保存されません。"
                },
                {
                    title: "4. 個人情報保護責任者",
                    body: "サービスは、個人情報処理に関する業務を総括し、ユーザーの苦情処理および被害救済などのために、以下の通り個人情報保護責任者を指定しています。",
                    box: "メール：ehlee8962@gmail.com"
                }
            ],
            date: "公告日：2026年1月30日 / 施行日：2026年1月30日"
        },
        zh: {
            title: "隐私政策",
            sections: [
                {
                    title: "1. 个人信息处理目的",
                    body: "HairFit（以下简称“服务”）为以下目的处理个人信息。所处理的个人信息不会用于以下目的以外的用途，如果使用目的发生变更，将根据相关法律履行获得单独同意等必要措施。",
                    items: [
                        "提供服务及内容使用",
                        "会员管理及身份验证（未来引入会员注册时）",
                        "新服务开发及营销广告的使用"
                    ]
                },
                {
                    title: "2. 处理的个人信息项目",
                    body: "服务正在处理以下个人信息项目。",
                    items: [
                        "必填项目：访问日志、Cookie、IP地址（服务使用记录）",
                        "选填项目：上传的照片（分析后立即删除，不保存到服务器）"
                    ]
                },
                {
                    title: "3. 个人信息的销毁",
                    body: "当个人信息持有期届满、处理目的达成等不再需要个人信息时，服务将立即销毁该个人信息。特别是上传的用户照片仅在浏览器（本地）内用于分析目的，不会传输或保存到服务器。"
                },
                {
                    title: "4. 个人信息保护负责人",
                    body: "服务为了统筹个人信息处理相关业务，处理用户投诉及损害赔偿等，指定了如下个人信息保护负责人。",
                    box: "邮箱：ehlee8962@gmail.com"
                }
            ],
            date: "公告日期：2026年1月30日 / 生效日期：2026年1月30日"
        },
        vn: {
            title: "Chính sách quyền riêng tư",
            sections: [
                {
                    title: "1. Mục đích xử lý thông tin cá nhân",
                    body: "HairFit ('Dịch vụ') xử lý thông tin cá nhân cho các mục đích sau. Thông tin cá nhân đang được xử lý sẽ không được sử dụng cho bất kỳ mục đích nào khác ngoài các mục đích sau, và nếu mục đích sử dụng thay đổi, các biện pháp cần thiết như lấy sự đồng ý riêng sẽ được thực hiện.",
                    items: [
                        "Cung cấp dịch vụ và sử dụng nội dung",
                        "Quản lý thành viên và xác minh danh tính (khi đăng ký thành viên trong tương lai)",
                        "Phát triển dịch vụ mới và sử dụng cho tiếp thị/quảng cáo"
                    ]
                },
                {
                    title: "2. Các mục thông tin cá nhân được xử lý",
                    body: "Dịch vụ đang xử lý các mục thông tin cá nhân sau.",
                    items: [
                        "Mục bắt buộc: Nhật ký truy cập, Cookie, Địa chỉ IP (Hồ sơ sử dụng dịch vụ)",
                        "Mục tùy chọn: Ảnh đã tải lên (bị xóa ngay sau khi phân tích và không lưu trên máy chủ)"
                    ]
                },
                {
                    title: "3. Hủy bỏ thông tin cá nhân",
                    body: "Dịch vụ sẽ hủy bỏ thông tin cá nhân ngay lập tức khi thông tin cá nhân trở nên không cần thiết, chẳng hạn như khi hết thời hạn lưu giữ hoặc đạt được mục đích xử lý. Đặc biệt, ảnh người dùng tải lên chỉ được sử dụng cho mục đích phân tích trong trình duyệt (cục bộ) và không được truyền hoặc lưu vào máy chủ."
                },
                {
                    title: "4. Cán bộ bảo vệ dữ liệu",
                    body: "Dịch vụ chỉ định Cán bộ bảo vệ dữ liệu sau đây để giám sát việc xử lý thông tin cá nhân và giải quyết khiếu nại của người dùng:",
                    box: "Email: ehlee8962@gmail.com"
                }
            ],
            date: "Ngày thông báo: 30 tháng 1 năm 2026 / Ngày hiệu lực: 30 tháng 1 năm 2026"
        },
        th: {
            title: "นโยบายความเป็นส่วนตัว",
            sections: [
                {
                    title: "1. วัตถุประสงค์ของการประมวลผลข้อมูลส่วนบุคคล",
                    body: "HairFit ('บริการ') ประมวลผลข้อมูลส่วนบุคคลเพื่อวัตถุประสงค์ดังต่อไปนี้ ข้อมูลส่วนบุคคลที่ประมวลผลจะไม่ถูกนำไปใช้เพื่อวัตถุประสงค์อื่นใดนอกจากที่ระบุไว้ และหากวัตถุประสงค์การใช้งานมีการเปลี่ยนแปลง จะมีการดำเนินการตามมาตรการที่จำเป็น เช่น การขอความยินยอมแยกต่างหาก",
                    items: [
                        "การให้บริการและการใช้งานเนื้อหา",
                        "การจัดการสมาชิกและการยืนยันตัวตน (เมื่อมีการลงทะเบียนในอนาคต)",
                        "การพัฒนาบริการใหม่และการใช้เพื่อการตลาด/โฆษณา"
                    ]
                },
                {
                    title: "2. รายการข้อมูลส่วนบุคคลที่ประมวลผล",
                    body: "บริการกำลังประมวลผลรายการข้อมูลส่วนบุคคลดังต่อไปนี้",
                    items: [
                        "รายการจำเป็น: บันทึกการเข้าถึง, คุกกี้, ที่อยู่ IP (บันทึกการใช้บริการ)",
                        "รายการทางเลือก: รูปภาพที่อัปโหลด (ลบออกทันทีหลังการวิเคราะห์และไม่บันทึกบนเซิร์ฟเวอร์)"
                    ]
                },
                {
                    title: "3. การทำลายข้อมูลส่วนบุคคล",
                    body: "บริการจะทำลายข้อมูลส่วนบุคคลทันทีเมื่อข้อมูลส่วนบุคคลนั้นไม่มีความจำเป็นอีกต่อไป เช่น เมื่อหมดระยะเวลาการเก็บรักษาหรือบรรลุวัตถุประสงค์ในการประมวลผล โดยเฉพาะอย่างยิ่ง รูปภาพผู้ใช้ที่อัปโหลดจะถูกใช้เพื่อวัตถุประสงค์ในการวิเคราะห์ภายในเบราว์เซอร์ (ในเครื่อง) เท่านั้น และจะไม่ถูกส่งหรือบันทึกไปยังเซิร์ฟเวอร์"
                },
                {
                    title: "4. เจ้าหน้าที่คุ้มครองข้อมูล",
                    body: "บริการได้แต่งตั้งเจ้าหน้าที่คุ้มครองข้อมูลต่อไปนี้เพื่อดูแลการประมวลผลข้อมูลส่วนบุคคลและจัดการข้อร้องเรียนของผู้ใช้:",
                    box: "อีเมล: ehlee8962@gmail.com"
                }
            ],
            date: "วันที่ประกาศ: 30 มกราคม 2026 / วันที่มีผลบังคับใช้: 30 มกราคม 2026"
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
                        {section.box && (
                            <div className="mt-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 font-medium">
                                {section.box}
                            </div>
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
