export interface BlogPost {
    slug: string;
    title: { [key: string]: string };
    excerpt: { [key: string]: string };
    content: { [key: string]: string }; // Markdown content
    image: string;
    date: string;
    author: string;
    tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: 'face-shape-analysis-101',
        title: {
            en: "Face Shape Analysis 101: Finding Your Perfect Hairstyle",
            ko: "얼굴형 분석 101: 나에게 딱 맞는 헤어스타일 찾기",
            ja: "顔型分析 101：あなたにぴったりのヘアスタイルを見つける",
            zh: "脸型分析 101：寻找适合您的发型",
            vn: "Phân tích khuôn mặt 101: Tìm kiểu tóc hoàn hảo cho bạn",
            th: "การวิเคราะห์รูปหน้า 101: ค้นหาทรงผมที่เหมาะกับคุณ"
        },
        excerpt: {
            en: "Understanding your face shape is the first step to a great haircut. Learn how to identify if you are oval, round, square, or heart-shaped.",
            ko: "자신의 얼굴형을 이해하는 것이 인생 머리를 찾는 첫 걸음입니다. 계란형, 둥근형, 각진형, 하트형인지 확인하는 방법을 알아보세요.",
            ja: "自分の顔型を理解することが、最高のヘアカットへの第一歩です。卵型、丸型、四角型、ハート型のどれに当てはまるか確認しましょう。",
            zh: "了解您的脸型是获得完美发型的第一步。了解如何识别您是椭圆形、圆形、方形还是心形。",
            vn: "Hiểu rõ khuôn mặt của bạn là bước đầu tiên để có một kiểu tóc tuyệt vời. Tìm hiểu cách xác định xem bạn có khuôn mặt trái xoan, tròn, vuông hay hình trái tim.",
            th: "การเข้าใจรูปหน้าของคุณเป็นก้าวแรกสู่ทรงผมที่ยอดเยี่ยม เรียนรู้วิธีตรวจสอบว่าคุณเป็นรูปไข่ กลม เหลี่ยม หรือรูปหัวใจ"
        },
        content: {
            en: `
## Why Face Shape Matters
Your face shape determines how light and shadow fall on your features. A good hairstyle balances your proportions, highlighting your best features while softening others.

### The 7 Main Face Shapes
1. **Oval**: The most versatile shape. Almost any style works.
2. **Round**: Characterized by soft curves. Goal: Add height and angles.
3. **Square**: Strong jawline. Goal: Soften angles with layers.
4. **Heart**: Wide forehead, narrow chin. Goal: Add volume at the chin.
5. **Diamond**: Wide cheekbones. Goal: Minimize width at cheekbones.
6. **Long**: Vertical length is prominent. Goal: Add width and volume.
7. **Triangle**: Jaw tends to be wider. Goal: Add volume to the forehead.

## How HairFit Helps
HairFit uses advanced AI to measure 21 facial landmarks. It calculates the ratio of your forehead, cheekbones, and jawline to scientifically determine your face shape. Stop guessing in the mirror and let data decide.
            `,
            ko: `
## 얼굴형이 왜 중요한가요?
얼굴형은 빛과 그림자가 이목구비에 어떻게 드리우는지를 결정합니다. 좋은 헤어스타일은 얼굴의 비율을 균형 있게 맞춰주며, 장점은 부각시키고 단점은 보완해줍니다.

### 7가지 주요 얼굴형
1. **계란형 (Oval)**: 가장 이상적인 형태로 여겨지며, 거의 모든 스타일이 잘 어울립니다.
2. **둥근형 (Round)**: 부드러운 곡선이 특징입니다. 목표: 정수리에 볼륨을 주어 길어 보이게 하기.
3. **각형 (Square)**: 턱선이 발달된 형태입니다. 목표: 레이어드 컷으로 강한 인상을 부드럽게.
4. **하트형 (Heart)**: 이마가 넓고 턱이 좁습니다. 목표: 턱 주변에 볼륨을 주어 균형 맞추기.
5. **다이아몬드형 (Diamond)**: 광대가 발달한 형태입니다. 목표: 광대 너비를 커버하기.
6. **긴형 (Long)**: 세로 비율이 깁니다. 목표: 이마를 덮거나 옆 볼륨을 살리기.
7. **삼각형 (Triangle)**: 하관이 더 넓은 형태입니다. 목표: 이마 쪽에 볼륨을 주어 시선 분산.

## HairFit의 솔루션
HairFit은 21개의 얼굴 랜드마크를 분석하는 정밀 AI를 사용합니다. 이마, 광대, 턱의 비율을 계산하여 과학적으로 얼굴형을 진단합니다. 거울 보고 고민하지 말고, 데이터로 확인하세요.
            `,
            ja: `
## 顔型が重要な理由
顔型は、光と影が顔の特徴にどのように当たるかを決定します。良いヘアスタイルは、顔のバランスを整え、長所を強調し、短所をカバーします。

### 主な7つの顔型
1. **卵型 (Oval)**: 最も理想的とされる形。ほぼ全てのスタイルが似合います。
2. **丸型 (Round)**: 柔らかい曲線が特徴。目標: トップに高さを出して縦長に見せる。
3. **四角型 (Square)**: エラが張っている形。目標: レイヤーで角ばった印象を和らげる。
4. **ハート型 (Heart)**: 額が広く顎が狭い。目標: 顎周りにボリュームを出してバランスを取る。
5. **ダイヤモンド型 (Diamond)**: 頬骨が張っている。目標: 頬骨の幅をカバーする。
6. **面長 (Long)**: 縦の比率が長い。目標: 横幅とボリュームを出す。
7. **三角形 (Triangle)**: 顎の方が広い。目標: 額にボリュームを出す。
            `,
            zh: `
## 为什么脸型很重要？
脸型决定了光影如何落在您的面部特征上。一个好的发型可以平衡您的比例，突出您最好的特征，同时柔化其他特征。

### 7种主要脸型
1. **鹅蛋脸 (Oval)**: 最百搭的脸型。几乎适合任何发型。
2. **圆脸 (Round)**: 特点是线条柔和。目标：增加高度和棱角感。
3. **方脸 (Square)**: 下颌线强劲。目标：用层次感柔化棱角。
4. **心形脸 (Heart)**: 额头宽，下巴窄。目标：在下巴处增加发量。
5. **菱形脸 (Diamond)**: 颧骨宽。目标：减少颧骨处的宽度感。
6. **长脸 (Long)**: 纵向长度突出。目标：增加宽度和发量。
7. **三角形脸 (Triangle)**: 下颌通常较宽。目标：增加额头处的发量。

## HairFit 如何提供帮助
HairFit 使用先进的 AI 测量 21 个面部关键点。它计算您的额头、颧骨和下颌线的比例，以科学地确定您的脸型。停止在镜子前猜测，让数据来决定。
            `,
            vn: `
## Tại sao hình dáng khuôn mặt lại quan trọng?
Hình dáng khuôn mặt quyết định cách ánh sáng và bóng tối chiếu lên các đặc điểm của bạn. Một kiểu tóc đẹp sẽ cân bằng tỷ lệ khuôn mặt, làm nổi bật những ưu điểm và che đi khuyết điểm.

### 7 hình dáng khuôn mặt chính
1. **Trái xoan (Oval)**: Hình dáng linh hoạt nhất. Hầu hết các kiểu tóc đều phù hợp.
2. **Tròn (Round)**: Đặc trưng bởi các đường cong mềm mại. Mục tiêu: Tăng chiều cao và tạo góc cạnh.
3. **Vuông (Square)**: Đường viền hàm mạnh mẽ. Mục tiêu: Làm mềm các góc cạnh bằng các lớp tóc.
4. **Trái tim (Heart)**: Trán rộng, cằm hẹp. Mục tiêu: Tạo độ phồng ở phần cằm.
5. **Kim cương (Diamond)**: Gò má rộng. Mục tiêu: Giảm thiểu độ rộng ở gò má.
6. **Dài (Long)**: Chiều dài khuôn mặt nổi bật. Mục tiêu: Tạo độ rộng và độ phồng.
7. **Tam giác (Triangle)**: Hàm thường rộng hơn. Mục tiêu: Tạo độ phồng ở phần trán.

## HairFit giúp ích như thế nào
HairFit sử dụng AI tiên tiến để đo 21 điểm mốc trên khuôn mặt. Nó tính toán tỷ lệ trán, gò má và đường viền hàm của bạn để xác định hình dáng khuôn mặt một cách khoa học. Đừng đoán già đoán non trước gương nữa, hãy để dữ liệu quyết định.
            `,
            th: `
## ทำไมรูปหน้าถึงสำคัญ?
รูปหน้าของคุณกำหนดว่าแสงและเงาจะตกกระทบใบหน้าของคุณอย่างไร ทรงผมที่ดีจะช่วยปรับสมดุลสัดส่วนของคุณ เน้นจุดเด่นและช่วยอำพรางจุดด้อย

### 7 รูปหน้าหลัก
1. **รูปไข่ (Oval)**: รูปหน้าที่เข้าได้กับทุกทรงผมเกือบทุกแบบ
2. **รูปกลม (Round)**: มีเส้นโค้งมน เป้าหมาย: เพิ่มความสูงและมุม
3. **รูปเหลี่ยม (Square)**: กรามชัด เป้าหมาย: ลดความแข็งของมุมด้วยการซอยสไลด์
4. **รูปหัวใจ (Heart)**: หน้าผากกว้าง คางแคบ เป้าหมาย: เพิ่มวอลลุ่มที่บริเวณคาง
5. **รูปเพชร (Diamond)**: โหนกแก้มกว้าง เป้าหมาย: ลดความกว้างบริเวณโหนกแก้ม
6. **รูปยาว (Long)**: ความยาวแนวตั้งเด่นชัด เป้าหมาย: เพิ่มความกว้างและวอลลุ่ม
7. **รูปสามเหลี่ยม (Triangle)**: กรามกว้างกว่า เป้าหมาย: เพิ่มวอลลุ่มที่บริเวณหน้าผาก

## HairFit ช่วยได้อย่างไร
HairFit ใช้ AI ขั้นสูงวัดจุดบนใบหน้า 21 จุด คำนวณอัตราส่วนของหน้าผาก โหนกแก้ม และกราม เพื่อระบุรูปหน้าของคุณตามหลักวิทยาศาสตร์ เลิกเดาหน้ากระจก แล้วให้ข้อมูลตัดสิน
            `
        },
        image: "/blog/face-shape-guide.png",
        date: "2026-01-15",
        author: "HairFit Team",
        tags: ["Analysis", "Face Shape", "Guide"]
    },
    {
        slug: 'mens-hair-trends-2026',
        title: {
            en: "Men's Hair Trends 2026: The Western Edit",
            ko: "2026 남자 헤어 트렌드: 한국은 지금 '내추럴' 열풍",
            ja: "2026年メンズヘアトレンド：日本のトレンド分析",
            zh: "2026 年男士发型趋势：什么适合您？",
            vn: "Xu hướng tóc nam 2026: Kiểu nào phù hợp với bạn?",
            th: "เทรนด์ทรงผมชาย 2026: ทรงไหนเหมาะกับคุณ?"
        },
        excerpt: {
            en: "From the refined Mullet to the chaotic Textured Crop. Discover what's taking over barber shops in the US and Europe this year.",
            ko: "2026년 대한민국 남자 머리는 '꾸안꾸'가 핵심입니다. 리프컷의 진화부터 시스루 댄디의 정착까지, 최신 트렌드를 분석합니다.",
            ja: "マッシュからウルフへ。2026年の日本のメンズヘアシーンを牽引するスタイルを紹介します。",
            zh: "从常春藤联盟发型到纹理刘海，探索 2026 年最热门的风格。",
            vn: "Từ kiểu cắt Ivy League đến kiểu tóc mái kết cấu, khám phá những kiểu tóc hot nhất năm 2026.",
            th: "ตั้งแต่ทรง Ivy League ไปจนถึงหน้าม้าแบบมีเท็กซ์เจอร์ ค้นพบสไตล์สุดฮอตของปี 2026"
        },
        content: {
            en: `
## 1. The Modern Mullet (The "Flow")
The mullet has shed its ironic 80s reputation and evolved into a genuinely stylish, flowing look. It's all about length at the back meeting a messy, textured top.
- **Vibe**: Rebellious yet sophisticated.
- **Best Face Shapes**: Diamond, Triangle.
- **Why**: It balances wider cheekbones and elongates the neck visually.

## 2. The Textured Crop (French Crop 2.0)
Short, sharp, and messy. The 2026 Update features a heavier, choppier fringe compared to the neat lines of previous years.
- **Vibe**: Athletic, low-maintenance.
- **Best Face Shapes**: Square, Oval.
- **Why**: Enhances the jawline and minimizes a high forehead.

## 3. The Buzz Cut Fade
Minimalism is back. A buzz cut with a high skin fade is the ultimate "clean" look for 2026.
- **Vibe**: Masculine, assertive.
- **Best Face Shapes**: Square, Round (if the fade is high).
- **Why**: It completely exposes facial features—confidence is key.

## Global Trend Note
In 2026, Western trends are moving away from the "perfectly gelled" look towards matte finishes and natural movement. Put down the pomade and pick up some sea salt spray.
            `,
            ko: `
## 1. 드롭컷 & 아이비리그의 진화
2024년, 2025년을 강타했던 아이비리그컷이 조금 더 길고 자연스러운 '드롭컷' 형태로 진화했습니다. 옆머리는 다운펌으로 누르되, 앞머리 양끝을 살짝 내려 M자 라인을 커버하는 것이 포인트입니다.
- **특징**: 짧지만 부담스럽지 않음, 남성미 강조.
- **추천 얼굴형**: 계란형, 둥근형 (세로 라인을 강조해줌).

## 2. 세미 리프컷 (Semi-Leaf)
이동욱, 덱스 등 장발 스타들의 영향으로 '리프컷'은 이제 스테디셀러입니다. 2026년 버전은 너무 길지 않은 '세미' 기장감이 특징입니다. 귀를 살짝 덮는 정도의 기장으로 부담을 줄였습니다.
- **특징**: 분위기 깡패, 부드러운 이미지.
- **추천 얼굴형**: 각형, 다이아몬드형 (광대와 턱선을 부드럽게 감싸줌).

## 3. 시스루 댄디컷 (The Steady)
한국 남자 머리의 국밥 같은 존재. 이마를 꽉 막는 바가지 머리가 아니라, 이마가 살짝 비치는 가벼운 앞머리가 핵심입니다.
- **특징**: 호불호 없음, 깔끔함의 정석.
- **추천 얼굴형**: 긴형 (이마를 가려줌), 역삼각형.

## 2026 한국 트렌드 키워드: "디테일"
이제 단순히 "짧게 쳐주세요"가 아닙니다. "옆머리는 다운펌으로 눌러주시고, 뒷머리는 상고로 올려주세요"처럼 디테일한 핏(Fit)이 중요해졌습니다. HairFit으로 나에게 맞는 디테일을 찾아보세요.
            `,
            ja: `
## 1. マッシュウルフ (Mash Wolf)
マッシュの丸みとウルフの襟足を組み合わせたスタイル。中性的な魅力があり、日本のジェンダーレス男子に大人気です。
- **特徴**: 小顔効果抜群。
- **おすすめ**: 丸顔、逆三角形。

## 2. センターパート (Center Part)
韓流ブームから定着したセンターパート。2026年は少しウェーブを入れた「カルマパーマ」風が主流です。
- **特徴**: 大人っぽい、知的。
- **おすすめ**: 卵型、ベース型。

## 3. スパイラルパーマ (Spiral Perm)
無造作な動きを出すスパイラルパーマ。毎朝のスタイリングが楽になるため、忙しい社会人にも支持されています。
- **特徴**: ボリュームアップ、お洒落。
- **おすすめ**: 面長 (横のボリュームが出るため)。
            `,
            zh: `
## 1. 现代狼尾头 (The "Flow")
狼尾头已经摆脱了 80 年代那种讽刺的名声，演变成一种真正时尚、流畅的造型。重点在于长长的后部头发与凌乱、有质感的顶部头发相接。
- **氛围**: 叛逆又精致。
- **最佳脸型**: 菱形，三角形。
- **原因**: 它平衡了较宽的颧骨，并在视觉上拉长了颈部。

## 2. 纹理短发 (French Crop 2.0)
短、锐利、凌乱。与往年整齐的线条相比，2026 年的更新版本具有更重、更碎的刘海。
- **氛围**: 运动型，易打理。
- **最佳脸型**: 方形，椭圆形。
- **原因**: 增强下颌线并最大限度地减少高额头。

## 3. 渐变寸头 (Buzz Cut Fade)
极简主义回归。带有高渐变的寸头是 2026 年终极的“干净”造型。
- **氛围**: 男性化，自信。
- **最佳脸型**: 方形，圆形（如果渐变较高）。
- **原因**: 它完全暴露了面部特征——自信是关键。
            `,
            vn: `
## 1. Kiểu Mullet Hiện Đại (The "Flow")
Kiểu tóc mullet đã rũ bỏ tai tiếng từ thập niên 80 và phát triển thành một phong cách thực sự thời thượng, mềm mại. Điểm nhấn nằm ở phần đuôi tóc dài kết hợp với phần đỉnh tóc rối, có kết cấu.
- **Phong cách**: Nổi loạn nhưng tinh tế.
- **Khuôn mặt phù hợp nhất**: Kim cương, Tam giác.
- **Tại sao**: Nó cân bằng gò má rộng và làm dài cổ về mặt thị giác.

## 2. Tóc Cắt Ngắn Có Kết Cấu (French Crop 2.0)
Ngắn, sắc nét và rối. Phiên bản cập nhật năm 2026 có phần mái dày và cắt tỉa nhiều hơn so với các đường nét gọn gàng của những năm trước.
- **Phong cách**: Thể thao, dễ chăm sóc.
- **Khuôn mặt phù hợp nhất**: Vuông, Trái xoan.
- **Tại sao**: Tôn lên đường viền hàm và giảm thiểu vầng trán cao.

## 3. Đầu Cua (Buzz Cut Fade)
Chủ nghĩa tối giản đã trở lại. Kiểu đầu cua với phần fade cao sát da đầu là kiểu tóc "gọn gàng" nhất cho năm 2026.
- **Phong cách**: Nam tính, quyết đoán.
- **Khuôn mặt phù hợp nhất**: Vuông, Tròn (nếu phần fade cao).
- **Tại sao**: Nó để lộ hoàn toàn các đường nét trên khuôn mặt - sự tự tin là chìa khóa.
            `,
            th: `
## 1. The Modern Mullet (The "Flow")
ทรง Mullet ได้สลัดภาพลักษณ์ยุค 80 ทิ้งไปและกลายมาเป็นลุคที่ดูมีสไตล์และพริ้วไหวอย่างแท้จริง จุดเด่นอยู่ที่ความยาวด้านหลังที่รับกับผมด้านบนที่ยุ่งเหยิงและมีเท็กซ์เจอร์
- **อารมณ์**: ขบถแต่ซับซ้อน
- **รูปหน้าที่เหมาะสมที่สุด**: รูปเพชร, รูปสามเหลี่ยม
- **ทำไม**: ช่วยปรับสมดุลโหนกแก้มที่กว้างและช่วยให้คอดูยาวขึ้น

## 2. The Textured Crop (French Crop 2.0)
สั้น คม และยุ่งเหยิง การอัปเดตปี 2026 มีหน้าม้าที่หนาและดูไม่ตั้งใจมากขึ้นเมื่อเทียบกับเส้นสายที่เรียบร้อยของปีก่อนๆ
- **อารมณ์**: สปอร์ต ดูแลรักษาง่าย
- **รูปหน้าที่เหมาะสมที่สุด**: รูปเหลี่ยม, รูปไข่
- **ทำไม**: ช่วยเสริมกรามและลดหน้าผากที่สูง

## 3. The Buzz Cut Fade
ความมินิมอลกลับมาแล้ว ทรงผมสกินเฮดที่เฟดสูงคือลุคที่ "สะอาด" ที่สุดสำหรับปี 2026
- **อารมณ์**: เป็นชายชาตรี มั่นใจ
- **รูปหน้าที่เหมาะสมที่สุด**: รูปเหลี่ยม, รูปกลม (ถ้าเฟดสูง)
- **ทำไม**: เปิดเผยใบหน้าอย่างชัดเจน ความมั่นใจคือกุญแจสำคัญ
            `
        },
        image: "/blog/men-trends-2026.png",
        date: "2026-02-01",
        author: "HairFit Editors",
        tags: ["Trends", "Men's Hair", "2026"]
    }
];
