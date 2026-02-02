import { HairStyle } from './types';

export const HAIRSTYLES: Record<string, HairStyle> = {
    as_perm: {
        id: 'as_perm',
        name: 'As Perm',
        nameKo: '애즈펌',
        position: 'Standard of K-Perm',
        positionKo: '국민 남자 펌의 정석',
        description: 'Effortless chic. Slightly exposed forehead for a natural look.',
        descriptionKo: '꾸안꾸의 정석. 이마를 살짝만 보여줘서 부담스럽지 않고 자연스러워요.',
        tags: ['Natural', 'Standard', 'Soft'],
        tagsKo: ['자연스러움', '국민헤어', '부드러움'],
        badMatch: ['Strong Image'],
        badMatchKo: ['강한 인상'],
        imagePath: '/images/characters/as_perm.png',
        expertComment: {
            ko: "애즈펌은 이마를 살짝 드러내어 답답함을 없애면서도, M자 라인을 자연스럽게 커버할 수 있는 최고의 스타일입니다. 누구에게나 무난하게 어울리며, 특히 부드러운 이미지를 주고 싶을 때 추천합니다.",
            en: "As Perm is the standard for 'effortless chic'. It slightly reveals the forehead to avoid a heavy look while naturally covering the hairline. It suits almost everyone and is perfect for a soft, approachable vibe.",
            ja: "アズパーマは、おでこを少し見せることで重さを解消しつつ、生え際を自然にカバーできる最高のスタイルです。誰にでも似合いやすく、特に柔らかい印象を与たい場合におすすめです。",
            zh: "As烫发是展示额头并消除沉闷感的最佳发型，同时能自然遮盖发际线。它适合几乎所有人，特别推荐给想要给人柔和印象的人。",
            vn: "As Perm là kiểu tóc chuẩn mực cho vẻ ngoài tự nhiên. Nó để lộ một chút trán để tránh cảm giác nặng nề trong khi che đi đường chân tóc một cách tự nhiên.",
            th: "As Perm คือมาตรฐานของความชิคแบบไม่ต้องพยายาม เปิดหน้าผากเล็กน้อยเพื่อไม่ให้ดูหนักเกินไป พร้อมปกปิดแนวผมได้อย่างเป็นธรรมชาติ"
        },
        stylingGuide: {
            ko: "1. 머리를 앞으로 털어 말리다가 80% 정도 건조되면 가르마를 6:4로 나눕니다.\n2. 앞머리 뿌리 쪽에 드라이기 열을 주어 볼륨을 살립니다.\n3. 에센스나 소프트 왁스를 가볍게 발라 마무리합니다.",
            en: "1. Dry hair forward until 80% dry, then part it 6:4.\n2. Apply heat to the roots of bangs for volume.\n3. Finish with essence or soft wax.",
            ja: "1. 髪を前に向かって乾かし、80%乾いたら6:4で分けます。\n2. 前髪の根元にドライヤーの熱を当ててボリュームを出します。\n3. エッセンスやソフトワックスを軽く塗って仕上げます。",
            zh: "1. 头发向前吹至80%干，然后按6:4分缝。\n2. 用吹风机加热刘海根部以增加蓬松感。\n3. 最后涂抹精华液或软发蜡。",
            vn: "1. Sấy tóc về phía trước cho đến khi khô 80%, sau đó chia ngôi 6:4.\n2. Sấy nóng phần chân tóc mái để tạo độ phồng.\n3. Hoàn thiện bằng tinh chất hoặc sáp mềm.",
            th: "1. เป่าผมไปข้างหน้าจนแห้ง 80% แล้วแสกผมแบบ 6:4\n2. ใช้ความร้อนเป่าโคนผมหน้าม้าเพื่อเพิมวอลลุ่ม\n3. จบด้วยเอสเซนส์หรือแว็กซ์แบบนุ่ม"
        },
        maintenance: {
            ko: "커트는 3~4주 간격, 펌은 2~3달 간격을 추천합니다. 옆머리가 뜨면 다운펌을 병행하세요.",
            en: "Cut every 3-4 weeks, Perm every 2-3 months. Down-perm recommended for sides.",
            ja: "カットは3〜4週間、パーマは2〜3ヶ月間隔がおすすめです。サイドが浮く場合はダウンパーマを併用してください。",
            zh: "建议每3-4周修剪一次，每2-3个月烫一次。两边头发翘起的话建议做服帖烫。",
            vn: "Cắt 3-4 tuần/lần, uốn 2-3 tháng/lần. Nên ép side (down-perm) nếu tóc hai bên bị phồng.",
            th: "ตัดทุก 3-4 สัปดาห์ ดัดทุก 2-3 เดือน แนะนำให้ทำดาวน์เพิร์มด้านข้างหากผมชี้ฟู"
        }
    },
    garma_perm: {
        id: 'garma_perm',
        name: 'Garma Perm',
        nameKo: '가르마펌',
        position: 'Intellectual Vibe',
        positionKo: '지적인 분위기',
        description: 'Cool open forehead. Gives an intelligent and trustworthy image.',
        descriptionKo: '이마를 시원하게 드러내어 신뢰감 있고 지적인 이미지를 줍니다.',
        tags: ['Intellectual', 'Mature', 'Trust'],
        tagsKo: ['지적인', '성숙함', '신뢰감'],
        badMatch: ['Wide Forehead'],
        badMatchKo: ['이마가 너무 넓음'],
        imagePath: '/images/characters/garma_perm.png',
        expertComment: {
            ko: "이마를 5:5 또는 6:4로 시원하게 드러내어 남성적이고 성숙한 이미지를 줍니다. 정장이나 코트 스타일에 매우 잘 어울리며, 직장인들에게 가장 추천하는 스타일 1위입니다.",
            en: "Specifically designed to reveal the forehead (5:5 or 6:4), creating a masculine and mature look. Matches perfectly with suits and coats, making it the #1 choice for professionals.",
            ja: "おでこを5:5または6:4で潔く見せることで、男らしく成熟した印象を与えます。スーツやコートスタイルに非常によく似合い、社会人に最もおすすめのスタイルです。",
            zh: "将额头按5:5或6:4分开，给人一种阳刚成熟的印象。非常适合西装或大衣风格，是职场人士首选发型。",
            vn: "Được thiết kế để lộ trán (5:5 hoặc 6:4), tạo vẻ nam tính và trưởng thành. Rất hợp với vest và áo khoác, là lựa chọn số 1 cho dân văn phòng.",
            th: "ออกแบบมาเพื่อเปิดหน้าผาก (5:5 หรือ 6:4) สร้างลุคที่ดูเป็นผู้ชายและเป็นผู้ใหญ่ เข้ากันได้ดีกับสูทและเสื้อโค้ท เป็นตัวเลือกอันดับ 1 สำหรับวัยทำงาน"
        },
        stylingGuide: {
            ko: "1. 가르마 라인을 먼저 정하고 드라이기로 뿌리 볼륨을 확실히 살립니다.\n2. 앞머리가 눈을 찌르지 않도록 뒤로 넘기듯 말려줍니다.\n3. 스프레이로 고정력이 필요합니다.",
            en: "1. Define parting line and boost root volume with dryer.\n2. Dry bangs backward so they don't poke eyes.\n3. Hairspray is essential for hold.",
            ja: "1. 分け目を決めて、ドライヤーで根元のボリュームをしっかり出します。\n2. 前髪が目に入らないように後ろに流すように乾かします。\n3. スプレーでの固定が必要です。",
            zh: "1. 定好分缝线，用吹风机吹蓬发根。\n2. 将刘海向后吹干，避免遮挡眼睛。\n3. 需要用发胶定型。",
            vn: "1. Xác định đường ngôi và sấy phồng chân tóc.\n2. Sấy mái vuốt ra sau để không che mắt.\n3. Cần dùng gôm xịt để giữ nếp.",
            th: "1. กำหนดรอยแสกและเพิ่มวอลลุ่มที่โคนผมด้วยไดร์เป่าผม\n2. เป่าหน้าม้าไปด้านหลังเพื่อไม่ให้ทิ่มตา\n3. สเปรย์ฉีดผมจำเป็นมากสำหรับการจัดทรง"
        },
        maintenance: {
            ko: "볼륨이 생명이므로 펌 유지 기간은 2개월 정도입니다. 길어지면 지저분해 보이므로 다듬어주세요.",
            en: "Volume is key; perm lasts about 2 months. Trim regularly as it looks messy when long.",
            ja: "ボリュームが命なので、パーマの維持期間は2ヶ月程度です。伸びるとだらかなく見えるので整えてください。",
            zh: "蓬松度是关键，烫发维持约2个月。太长会显得凌乱，需定期修剪。",
            vn: "Độ phồng là chìa khóa; uốn giữ được khoảng 2 tháng. Cắt tỉa thường xuyên vì tóc dài trông sẽ luộm thuộm.",
            th: "วอลลุ่มคือกุญแจสำคัญ ดัดอยู่ได้ประมาณ 2 เดือน ควรเล็มออกสม่ำเสมอเพราะถ้าปล่อยยาวจะดูรก"
        }
    },
    see_through_cut: {
        id: 'see_through_cut',
        name: 'See-Through Cut',
        nameKo: '시스루컷',
        position: 'Gen-Z Trend',
        positionKo: '요즘 20대 트렌드',
        description: 'Light bangs for a trendy and young vibe! No more heavy bowl cuts.',
        descriptionKo: '답답한 바가지 머리는 그만. 가벼운 앞머리로 트렌디하고 영한 느낌!',
        tags: ['Trendy', 'Young', 'Clean'],
        tagsKo: ['트렌디', '어려보임', '청량함'],
        badMatch: ['Curly Hair'],
        badMatchKo: ['심한 곱슬'],
        imagePath: '/images/characters/see_through_cut.png',
        expertComment: {
            ko: "무거운 앞머리(바가지머리)를 탈피하고, 이마가 살짝 비치는 가벼운 질감을 준 스타일입니다. 어려 보이고 청량한 느낌을 주며, 손질이 매우 편해 입문용으로 좋습니다.",
            en: "Moves away from heavy bangs to a lighter texture where the forehead is slightly visible. Gives a young, fresh look and is very easy to style, making it great for beginners.",
            ja: "重たい前髪を卒業し、おでこが少し透ける軽い質感を出したスタイルです。若々しく爽やかな印象を与え、セットが非常に楽なので入門用として最適です。",
            zh: "摆脱厚重的刘海，打造额头若隐若现的轻盈质感。给人年轻清爽的感觉，非常容易打理，适合新手。",
            vn: "Thoát khỏi kiểu mái dày nặng nề để chuyển sang kết cấu nhẹ nhàng hơn, nơi trán hơi lộ ra. Mang lại vẻ trẻ trung, tươi mới và rất dễ tạo kiểu.",
            th: "เปลี่ยนจากหน้าม้าหนาๆ มาเป็นเท็กซ์เจอร์ที่เบาบางลง โดยจะมองเห็นหน้าผากได้เล็กน้อย ให้ลุคที่ดูเด็กและสดใส จัดทรงง่ายมาก เหมาะสำหรับผู้เริ่มต้น"
        },
        stylingGuide: {
            ko: "1. 윗머리는 차분하게 내리고 앞머리만 손가락으로 가볍게 빗어주세요.\n2. 오일 타입 에센스로 질감만 살려줍니다.\n3. 왁스는 떡질 수 있으니 소량만 사용하세요.",
            en: "1. Press down top hair and gently comb bangs with fingers.\n2. Use oil essence to highlight texture.\n3. Use minimal wax to avoid greasiness.",
            ja: "1. トップは落ち着かせ、前髪だけ指で軽くとかします。\n2. オイルタイプのエッセンスで質感だけ出します。\n3. ワックスはベタつくので少量だけ使ってください。",
            zh: "1. 压服头顶头发，用手指轻轻梳理刘海。\n2. 用护发精油提升质感。\n3. 发蜡用量要少，避免结块。",
            vn: "1. Vuốt tóc trên đỉnh nằm xuống và nhẹ nhàng chải mái bằng ngón tay.\n2. Dùng tinh dầu để làm nổi bật kết cấu tóc.\n3. Dùng ít sáp để tránh bết dính.",
            th: "1. กดผมด้านบนลงและใช้นิ้วหวีหน้าม้าเบาๆ\n2. ใช้ออยล์เอสเซนส์เพื่อเน้นเท็กซ์เจอร์\n3. ใช้แว็กซ์ให้น้อยที่สุดเพื่อไม่ให้ผมมัน"
        },
        maintenance: {
            ko: "앞머리가 눈을 찌르면 불편하므로 3주 간격 커트가 필요합니다. 펌은 보통 필요 없거나 앞머리 펌만 하면 됩니다.",
            en: "Trim every 3 weeks as bangs can get annoying. Usually no perm needed, or just partial perm on bangs.",
            ja: "前髪が目に入ると不便なので3週間隔のカットが必要です。パーマは通常不要か、前髪パーマだけでOKです。",
            zh: "刘海扎眼睛会不舒服，需每3周修剪一次。通常不需要烫发，或只烫刘海。",
            vn: "Cắt tỉa 3 tuần/lần vì mái dài sẽ gây khó chịu. Thường không cần uốn, hoặc chỉ uốn mái.",
            th: "เล็มทุก 3 สัปดาห์เพราะหน้าม้าอาจแยงตา โดยปกติไม่ต้องดัด หรือดัดแค่หน้าม้าก็พอ"
        }
    },
    shadow_perm: {
        id: 'shadow_perm',
        name: 'Shadow Perm',
        nameKo: '쉐도우펌',
        position: 'Volume & Cute',
        positionKo: '볼륨감 & 귀여움',
        description: 'S-curl wave with volume. Best for straight hair that falls flat.',
        descriptionKo: '볼륨감이 살아있는 S컬 웨이브. 직모라 볼륨이 죽는 분들에게 최고.',
        tags: ['Volume', 'Cute', 'Youth'],
        tagsKo: ['볼륨', '귀여움', '동안'],
        badMatch: ['Big Head'],
        badMatchKo: ['머리가 큼'],
        imagePath: '/images/characters/shadow_perm.png',
        expertComment: {
            ko: "S컬 웨이브를 넣어 전체적으로 볼륨감과 쉐입을 만드는 펌입니다. 거친 느낌과 부드러운 느낌이 공존하며, 머리 숱이 적거나 직모인 분들에게 강력 추천합니다.",
            en: "Creates overall volume and shape with S-curl waves. A mix of rugged and soft vibes. Highly recommended for thin or straight hair.",
            ja: "Sカールウェーブを入れて全体的にボリュームと形を作るパーマです。ラフな感じと柔らかさが共存し、髪が細い方や直毛の方に強く推奨します。",
            zh: "通过S卷增加整体蓬松感和造型。粗犷与柔和并存，强烈推荐给发量少或直发的人。",
            vn: "Tạo độ phồng và hình dáng tổng thể với sóng S-curl. Pha trộn giữa vẻ bụi bặm và mềm mại. Rất khuyến khích cho tóc mỏng hoặc tóc thẳng.",
            th: "สร้างวอลลุ่มและรูปทรงโดยรวมด้วยลอนดัดรูปตัว S ผสมผสานความดิบและความนุ่มนวล แนะนำอย่างยิ่งสำหรับคนผมบางหรือผมตรง"
        },
        stylingGuide: {
            ko: "1. 두피만 바짝 말리고 모발은 약간 수분감을 남깁니다.\n2. 컬크림을 전체적으로 쥐어짜듯이(Scrunch) 발라줍니다.\n3. 자연 건조하면 컬이 더 예쁘게 잡힙니다.",
            en: "1. Dry scalp fully but leave hair slightly damp.\n2. Apply curl cream by scrunching hair.\n3. Air drying makes curls look better.",
            ja: "1. 頭皮だけしっかり乾かし、髪は少し湿らせたままにします。\n2. カールクリームを全体に握るように満遍なく塗ります。\n3. 自然乾燥させるとカールがより綺麗に出ます。",
            zh: "1. 吹干头皮，头发保留微湿。\n2. 抓捏式涂抹弹力素/卷发乳。\n3. 自然风干卷度更漂亮。",
            vn: "1. Sấy khô da đầu nhưng để tóc hơi ẩm.\n2. Thoa kem tạo kiểu bằng cách bóp nhẹ tóc.\n3. Để khô tự nhiên sẽ giúp lọn tóc đẹp hơn.",
            th: "1. เป่าหนังศีรษะให้แห้งสนิทแต่ปล่อยให้ผมหมาดเล็กน้อย\n2. ลงครีมจับลอนโดยการขยำผม\n3. ปล่อยให้แห้งเองจะทำให้ลอนดูสวยกว่า"
        },
        maintenance: {
            ko: "컬이 많아 유지기간이 3개월 정도로 깁니다. 부스스해지면 에센스를 듬뿍 발라주세요.",
            en: "Lasts long (approx 3 months) due to curls. Apply plenty of essence if it gets frizzy.",
            ja: "カールが多いので維持期間が3ヶ月程度と長いです。パサついたらエッセンスをたっぷり塗ってください。",
            zh: "卷度多，维持期较长（约3个月）。如果有毛躁感，请多涂精华。",
            vn: "Giữ được lâu (khoảng 3 tháng) nhờ các lọn tóc. Thoa nhiều tinh chất nếu tóc bị xù.",
            th: "อยู่ได้นาน (ประมาณ 3 เดือน) เนื่องจากมีลอน หากผมชี้ฟูให้ลงเอสเซนส์เยอะๆ"
        }
    },
    sleek_cut: {
        id: 'sleek_cut',
        name: 'Sleek Cut',
        nameKo: '슬릭컷',
        position: 'Sharp Urban',
        positionKo: '날렵한 도시 남자',
        description: 'Sharp urban look. Styled flat and tight with product.',
        descriptionKo: '세련되고 날렵한 도시 남자. 제품을 발라 딱 붙인 느낌이 핵심.',
        tags: ['Sexy', 'Urban', 'Clean'],
        tagsKo: ['섹시', '도회적', '깔끔'],
        badMatch: ['Head Shape Issues'],
        badMatchKo: ['두상 컴플렉스'],
        imagePath: '/images/characters/sleek_cut.png',
        expertComment: {
            ko: "전체적으로 볼륨을 없애고 날렵한 실루엣을 강조한 스타일입니다. 섹시하고 차가운 도시 남자의 이미지를 주며, 두상의 형태가 그대로 드러나므로 두상이 예쁜 분께 추천합니다.",
            en: "Emphasizes a sharp silhouette by removing volume. Gives a sexy, cool urban vibe. Reveals head shape, so recommened for those with good head shape.",
            ja: "全体的にボリュームをなくし、鋭利なシルエットを強調したスタイルです。セクシーで冷徹な都会の男性のイメージを与え、頭の形がそのまま出るため、頭の形が良い方におすすめです。",
            zh: "消除整体蓬松感，强调利落轮廓。给人性感冷酷的都市型男印象，会暴露头型，推荐头型好看的人尝试。",
            vn: "Nhấn mạnh hình dáng sắc nét bằng cách loại bỏ độ phồng. Mang lại vẻ quyến rũ, lạnh lùng thành thị. Lộ rõ hình dáng đầu, nên khuyên dùng cho những người có hình dáng đầu đẹp.",
            th: "เน้นรูปทรงที่คมชัดโดยลดวอลลุ่มลง ให้ลุคหนุ่มเมืองที่ดูเซ็กซี่และเท่ เผยให้เห็นรูปทรงศีรษะ จึงเหมาะสำหรับผู้ที่มีรูปทรงศีรษะสวย"
        },
        stylingGuide: {
            ko: "1. 위에서 아래로 누르면서 말립니다.\n2. 웨트(Wet) 왁스나 포마드를 사용하여 잔머리를 딱 붙여줍니다.\n3. 빗(Comb)을 사용해 결을 정리하면 완성도가 높아집니다.",
            en: "1. Blow dry downwards to flatten.\n2. Use wet wax or pomade to slick down flyaways.\n3. Use a comb for a cleaner finish.",
            ja: "1. 上から下に押さえつけるように乾かします。\n2. ウェットワックスやポマードを使ってアホ毛をしっかり抑えます。\n3. コームを使って毛流れを整えると完成度が高まります。",
            zh: "1. 从上往下压着吹干。\n2. 使用湿发蜡或发油压服碎发。\n3. 用梳子梳理纹理，完成度更高。",
            vn: "1. Sấy tóc theo chiều từ trên xuống để làm xẹp tóc.\n2. Dùng sáp ướt hoặc pomade để vuốt tóc con.\n3. Dùng lược chải để có kết quả gọn gàng hơn.",
            th: "1. เป่าผมลงด้านล่างเพื่อให้ผมเรียบแปล้\n2. ใช้แว็กซ์แบบเปียกหรือโพเมดเพื่อเก็บผมชี้ฟู\n3. ใช้หวีเพื่อให้ดูเนี้ยบขึ้น"
        },
        maintenance: {
            ko: "다운펌이 필수입니다. 옆머리, 뒷머리, 윗머리까지 전체 다운펌을 해야 느낌이 삽니다. (3~4주 주기)",
            en: "Down-perm is essential everywhere (sides, back, top). Repeat every 3-4 weeks.",
            ja: "ダウンパーマが必須です。サイド、バック、トップまで全体ダウンパーマをしてこそ雰囲気が出ます。（3〜4週間隔）",
            zh: "必须做服帖烫。两侧、后面、头顶都要做才有感觉。（3-4周周期）",
            vn: "Bắt buộc phải ép side/down-perm toàn bộ (cạnh, sau, đỉnh). Lặp lại mỗi 3-4 tuần.",
            th: "จำเป็นต้องทำดาวน์เพิร์มทุกส่วน (ด้านข้าง ด้านหลัง ด้านบน) ทำซ้ำทุก 3-4 สัปดาห์"
        }
    },
    crop_cut: {
        id: 'crop_cut',
        name: 'Crop Cut',
        nameKo: '크롭컷',
        position: 'Street & Unique',
        positionKo: '스트리트 & 유니크',
        description: 'Short and strong masculinity. Just shake and go!',
        descriptionKo: '짧고 강렬한 남성미. 손질이 필요 없이 털고 나가면 끝!',
        tags: ['Masculine', 'Easy', 'Hip'],
        tagsKo: ['상남자', '편리함', '힙함'],
        badMatch: ['Long Face'],
        badMatchKo: ['긴 얼굴형'],
        imagePath: '/images/characters/crop_cut.png',
        expertComment: {
            ko: "짧은 기장과 직선적인 라인이 특징인 스타일입니다. 남성적이고 강인한 이미지를 주며, '아이태원 클라쓰' 박새로이 머리로 유명합니다. 손질이 거의 필요 없습니다.",
            en: "Characterized by short length and straight lines. Gives a masculine and strong image, famous as the 'Itaewon Class' style. Almost no styling needed.",
            ja: "短い長さと直線のラインが特徴的なスタイルです。男らしく強いイメージを与え、『梨泰院クラス』のパクセロイの髪型として有名です。手入れがほぼ不要です。",
            zh: "特点是短发和直线条。给人阳刚坚毅的印象，以《梨泰院Class》栗子头闻名。几乎不需要打理。",
            vn: "Đặc trưng bởi độ dài ngắn và các đường thẳng. Mang lại hình ảnh nam tính và mạnh mẽ, nổi tiếng với kiểu tóc trong 'Itaewon Class'. Hầu như không cần tạo kiểu.",
            th: "โดดเด่นด้วยผมสั้นและเส้นตรง ให้ลุคที่ดูเป็นผู้ชายและแข็งแกร่ง เป็นที่รู้จักในชื่อทรงผม 'Itaewon Class' แทบไม่ต้องจัดทรงเลย"
        },
        stylingGuide: {
            ko: "1. 수건으로 털고 나가면 됩니다. (진짜로)\n2. 조금 꾸미고 싶다면 윗머리에 텍스처 왁스를 소량 바르세요.",
            en: "1. Just towel dry and go. (Seriously)\n2. Apply small amount of texture wax on top if you want.",
            ja: "1. タオルドライして出かければOKです。（本当に）\n2. 少しおしゃれしたいなら、トップにテクスチャーワックスを少量塗ってください。",
            zh: "1. 毛巾擦干就能出门。（真的）\n2. 想要造型的话，头顶涂少量发蜡。",
            vn: "1. Chỉ cần lau khô bằng khăn là đi được. (Thật đấy)\n2. Thoa một ít sáp tạo kết cấu lên đỉnh đầu nếu muốn.",
            th: "1. แค่เช็ดผมให้แห้งแล้วไปได้เลย (จริงๆ นะ)\n2. ลงแว็กซ์เพิ่มเท็กซ์เจอร์เล็กน้อยด้านบนถ้าต้องการ"
        },
        maintenance: {
            ko: "라인이 생명이므로 2~3주에 한 번씩 라인 정리가 필요합니다.",
            en: "Sharp lines are crucial; trim lines every 2-3 weeks.",
            ja: "ラインが命なので、2〜3週間に一度ラインを整える必要があります。",
            zh: "线条是关键，需每2-3周修剪一次线条。",
            vn: "Đường nét sắc sảo là rất quan trọng; tỉa đường nét mỗi 2-3 tuần.",
            th: "เส้นสายที่คมชัดสำคัญมาก เล็มขอบทุก 2-3 สัปดาห์"
        }
    },
    hippie_perm: {
        id: 'hippie_perm',
        name: 'Hippie Perm',
        nameKo: '히피펌',
        position: 'Artistic Vibe',
        positionKo: '예술가적 분위기',
        description: 'Free-spirited hip mood. Perfect match with wet styling.',
        descriptionKo: '자유로운 영혼의 힙한 무드. 젖은 머리 스타일링과 찰떡궁합.',
        tags: ['Unique', 'Free', 'Artist'],
        tagsKo: ['개성', '자유분방', '예술가'],
        badMatch: ['Office Job'],
        badMatchKo: ['엄격한 직장'],
        imagePath: '/images/characters/hippie_perm.png',
        expertComment: {
            ko: "뿌리부터 끝까지 강한 컬이 들어간 스타일로, 자유분방하고 개성 넘치는 분위기를 연출합니다. 젖은 머리(Wet Hair) 스타일링과 가장 잘 어울리며, 힙스터들에게 사랑받는 머리입니다.",
            en: "Strong curls from root to tip, creating a free-spirited and unique vibe. Matches best with Wet Hair styling, loved by hipsters.",
            ja: "根元から毛先まで強いカールが入ったスタイルで、自由奔放で個性あふれる雰囲気を演出します。ウェットヘアスタイリングと最も相性が良く、ヒップスターに愛されています。",
            zh: "从发根到发梢都有强烈的卷度，营造出自由奔放和充满个性的氛围。最适合湿发造型，深受潮人喜爱。",
            vn: "Lọn tóc xoăn mạnh từ gốc đến ngọn, tạo cảm giác tự do và độc đáo. Hợp nhất với kiểu tóc ướt, được các hipster yêu thích.",
            th: "ลอนผมแน่นตั้งแต่โคนจรดปลาย สร้างลุคที่ดูอิสระและมีเอกลักษณ์ เข้ากันได้ดีที่สุดกับการจัดทรงแบบผมเปียก (Wet Look) เป็นที่ชื่นชอบของชาวฮิปสเตอร์"
        },
        stylingGuide: {
            ko: "1. 두피만 말리고 모발은 50% 정도 젖은 상태를 유지합니다.\n2. 컬크림과 오일을 1:1로 섞어 듬뿍 발라줍니다.\n3. 절대 빗질하지 말고 손으로 구겨서 말려주세요.",
            en: "1. Dry scalp only, keep hair 50% wet.\n2. Mix curl cream and oil 1:1 and apply generously.\n3. Never comb; scrunch with hands to dry.",
            ja: "1. 頭皮だけ乾かし、髪は50%程度濡れた状態を保ちます。\n2. カールクリームとオイルを1:1で混ぜてたっぷりと塗ります。\n3. 絶対にとかさず、手で揉み込んで乾かしてください。",
            zh: "1. 只吹干头皮，头发保持50%湿润。\n2. 弹力素和精油1:1混合，多涂一些。\n3. 绝对不要梳，用手抓干。",
            vn: "1. Chỉ sấy khô da đầu, giữ tóc ẩm 50%.\n2. Trộn kem tạo kiểu và dầu theo tỷ lệ 1:1 và thoa nhiều.\n3. Tuyệt đối không chải; dùng tay bóp để làm khô.",
            th: "1. เป่าหนังศีรษะให้แห้งเท่านั้น ปล่อยให้ผมเปียกประมาณ 50%\n2. ผสมครีมจับลอนและออยล์ 1:1 แล้วชโลมให้ทั่ว\n3. ห้ามหวีเด็ดขาด ให้ใช้มือขยำเพื่อทำให้แห้ง"
        },
        maintenance: {
            ko: "컬이 강해 3~4개월까지도 유지됩니다. 뿌리 볼륨이 죽으면 뿌리펌만 다시 해주세요.",
            en: "Lasts very long (3-4 months). Re-perm roots if volume drops.",
            ja: "カールが強いので3〜4ヶ月持ちます。根元のボリュームがなくなったら根元パーマだけし直してください。",
            zh: "卷度强，可维持3-4个月。如果发根塌了，只烫发根即可。",
            vn: "Giữ được rất lâu (3-4 tháng). Uốn lại chân tóc nếu mất độ phồng.",
            th: "อยู่ได้นานมาก (3-4 เดือน) ดัดโคนผมซ้ำหากวอลลุ่มหายไป"
        }
    }
};
