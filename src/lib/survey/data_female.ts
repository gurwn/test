import { HairStyle } from './types';

export const FEMALE_HAIRSTYLES: Record<string, HairStyle> = {
    tassel_cut: {
        id: 'tassel_cut',
        name: 'Tassel Cut',
        nameKo: '태슬컷',
        position: 'Chic Short Bob',
        positionKo: '도도한 칼단발',
        description: 'Chic and straight line. Makes the jawline look slimmer!',
        descriptionKo: '똑 떨어지는 일자 라인이 시크하고 도도해 보여요. 턱선이 갸름해 보이는 효과!',
        tags: ['Chic', 'Urban', 'Stylish'],
        tagsKo: ['시크', '도회적', '세련됨'],
        badMatch: ['Square Jaw'],
        badMatchKo: ['사각턱 부각'],
        imagePath: '/images/characters/female/tassel_cut.png',
        expertComment: {
            ko: "일자로 뚝 떨어지는 라인이 특징인 단발 스타일입니다. 끝부분의 질감을 가볍게 처리하여(태슬처럼) 답답해 보이지 않고 세련된 느낌을 줍니다. 목선이 드러나 얼굴이 작아 보이고 비율이 좋아 보입니다.",
            en: "A bob style characterized by a straight, sharp line. The ends are textured lightly (like a tassel) to look chic rather than heavy. Exposing the neckline makes the face look smaller and improves overall proportions.",
            ja: "一直線に切り揃えられたラインが特徴のボブスタイルです。毛先の質感を軽く処理（タッセルのように）することで、重く見えず洗練された印象を与えます。首のラインが見えることで小顔効果があります。",
            zh: "特点是直线条的一刀切短发。发尾处理得轻盈（像流苏一样），看起来既不沉闷又时尚。露出颈部线条，显脸小，比例更好。",
            vn: "Kiểu tóc bob với đường cắt thẳng sắc nét. Phần đuôi được tỉa nhẹ (như tua rua) để trông sang trọng thay vì nặng nề. Khoe đường cổ giúp khuôn mặt trông nhỏ hơn.",
            th: "ทรงบ๊อบที่มีจุดเด่นคือเส้นตรงที่คมชัด ปลายผมซอยบางๆ (เหมือนพู่) เพื่อให้ดูชิคและไม่หนักจนเกินไป การเปิดเผยช่วงคอทำให้หน้าดูเล็กลงและสัดส่วนดีขึ้น"
        },
        stylingGuide: {
            ko: "1. 고개를 숙이고 뒤에서 앞으로 머리를 털어 말립니다.\n2. 매직기(판고데기)로 뿌리부터 끝까지 펴주다가, 끝부분만 살짝 밖으로 뻗치게 잡습니다.\n3. 폴리쉬 오일을 발라 가닥가닥 질감을 살립니다.",
            en: "1. Dry hair shaking strictly forward.\n2. Straighten from roots with a flat iron, flicking ends slightly outward.\n3. Apply polish oil to define separated strands.",
            ja: "1. 頭を下げて、後ろから前に向かって髪を乾かします。\n2. ストレートアイロンで根元から伸ばし、毛先だけ少し外ハネにします。\n3. ポリッシュオイルを塗って束感を出します。",
            zh: "1. 低头，从后向以吹干头发。\n2. 用直板夹拉直，发尾稍微向外翘。\n3. 涂抹护发精油，打造湿发束感。",
            vn: "1. Sấy tóc bằng cách cúi đầu và hất tóc về phía trước.\n2. Kẹp thẳng từ chân tóc, uốn nhẹ phần đuôi ra ngoài.\n3. Dùng dầu bóng để tạo thớ tóc rõ ràng.",
            th: "1. เป่าผมโดยก้มหัวลงแล้วเป่ามาด้านหน้า\n2. หนีบตรงจากโคนผม แล้วกระดกปลายออกเล็กน้อย\n3. ลงออยล์เพื่อจับช่อผมให้ดูมีเท็กซ์เจอร์"
        },
        maintenance: {
            ko: "1cm만 자라도 느낌이 달라지므로 4주 간격의 커트가 필수입니다. 곱슬기가 있다면 볼륨매직을 함께 해야 예쁩니다.",
            en: "Trim every 4 weeks as even 1cm changes the vibe. Volume magic straight perm is recommended for curly hair.",
            ja: "1cm伸びるだけで雰囲気が変わるので、4週間隔のカットが必須です。くせ毛の方はボリュームマジック（ストレートパーマ）を併用すると綺麗です。",
            zh: "长长1厘米感觉就会变，必须每4周修剪一次。如果有自然卷，建议搭配柔顺烫。",
            vn: "Cắt 4 tuần/lần vì chỉ dài thêm 1cm cũng làm mất dáng. Nên ép phồng (volume magic) nếu tóc xoăn.",
            th: "เล็มทุก 4 สัปดาห์ เพราะยาวขึ้นแค่ 1 ซม. ลุคก็เปลี่ยน แนะนำให้ยืดวอลลุ่มสำหรับคนผมหยักศก"
        }
    },
    hash_cut: {
        id: 'hash_cut',
        name: 'Hash Cut',
        nameKo: '허쉬컷',
        position: 'Hip Layered',
        positionKo: '힙한 층낸 머리',
        description: 'Boyish yet free feeling with lots of layers.',
        descriptionKo: '가벼운 층을 많이 내어 보이쉬하면서도 자유분방한 느낌을 줍니다.',
        tags: ['Hip', 'Unisex', 'Light'],
        tagsKo: ['힙함', '중성적', '가벼움'],
        badMatch: ['Thin Hair'],
        badMatchKo: ['숱이 적음'],
        imagePath: '/images/characters/female/hash_cut.png',
        expertComment: {
            ko: "샤기컷의 현대적인 해석으로, 층을 많이 내어 가볍고 율동감 있는 스타일입니다. 중성적이면서도 힙한 분위기를 연출하며, 얼굴의 여백을 자연스럽게 감싸주어 얼굴형 보완에 탁월합니다.",
            en: "A modern interpretation of the shag cut, featuring many layers for a light and dynamic look. Creates a unisex and hip vibe, covering facial contours effectively.",
            ja: "シャギーカットの現代的な解釈で、レイヤーを多く入れて軽く動きのあるスタイルです。中性的でヒップな雰囲気を演出し、顔周りを自然にカバーして顔型補正に優れています。",
            zh: "碎发剪的现代演绎，层次丰富，轻盈动感。营造中性且潮酷的氛围，自然修饰脸型，非常显脸小。",
            vn: "Cách diễn giải hiện đại của kiểu tóc shag, với nhiều lớp tỉa tạo vẻ nhẹ nhàng và năng động. Tạo cảm giác phi giới tính và sành điệu, che khuyết điểm khuôn mặt hiệu quả.",
            th: "การตีความใหม่ของทรงผมรากไทร เน้นเลเยอร์เยอะๆ เพื่อลุคที่ดูเบาสบายและมีมูฟเมนต์ ให้ความรู้สึกเท่และเป็นยูนิเซ็กซ์ ช่วยอำพรางกรอบหน้าได้ดีเยี่ยม"
        },
        stylingGuide: {
            ko: "1. 툴툴 털어 말리는 것이 포인트입니다.\n2. 가벼운 왁스나 컬크림을 끝부분에 발라 텍스처를 살립니다.\n3. 너무 정돈되지 않게, 부스스한 느낌을 즐기세요.",
            en: "1. Just shake dry casually; imperfection is key.\n2. Apply light wax or curl cream to ends for texture.\n3. Enjoy the messy, frizzy vibe.",
            ja: "1. 無造作に乾かすのがポイントです。\n2. 軽いワックスやカールクリームを毛先に塗って質感を活かします。\n3. 整えすぎず、ラフな感じを楽しんでください。",
            zh: "1. 随意吹干是重点。\n2. 发尾涂抹轻盈的发蜡或弹力素提升质感。\n3. 不要太整齐，享受这种凌乱感。",
            vn: "1. Chỉ cần sấy khô tự nhiên; sự không hoàn hảo là điểm nhấn.\n2. Thoa sáp nhẹ hoặc kem tạo kiểu vào đuôi tóc.\n3. Tận hưởng vẻ ngoài hơi rối cá tính.",
            th: "1. แค่เป่าให้แห้งแบบไม่ต้องตั้งใจ ความไม่สมบูรณ์แบบคือจุดเด่น\n2. ลงแว็กซ์เนื้อเบาหรือครีมจับลอนที่ปลายผม\n3. สนุกไปกับลุคที่ดูยุ่งๆ เซอร์ๆ"
        },
        maintenance: {
            ko: "층이 많아 지저분해지기 쉬우므로 4~5주 간격으로 다듬어야 합니다. 생머리라면 C컬펌을 하면 손질이 훨씬 쉽습니다.",
            en: "Required trimming every 4-5 weeks. If straight hair, C-curl perm makes styling much easier.",
            ja: "レイヤーが多く散らかりやすいので、4〜5週間隔で整える必要があります。直毛ならCカールパーマをかけるとセットがずっと楽になります。",
            zh: "层次多容易乱，需每4-5周修剪。如果是直发，烫个C卷会更好打理。",
            vn: "Cần tỉa 4-5 tuần/lần. Nếu tóc thẳng, uốn cụp chữ C sẽ giúp tạo kiểu dễ dàng hơn nhiều.",
            th: "ควรเล็มทุก 4-5 สัปดาห์ ถ้าผมตรง แนะนำให้ดัดลอน C จะช่วยให้เซ็ตทรงง่ายขึ้นมาก"
        }
    },
    wendy_cut: {
        id: 'wendy_cut',
        name: 'Wendy Cut',
        nameKo: '웬디컷',
        position: 'Soft Layered Mid',
        positionKo: '부드러운 중단발 레이어드',
        description: 'Soft layers wrapping the face create an innocent vibe.',
        descriptionKo: '얼굴을 감싸는 부드러운 층이 청순한 분위기를 연출해요.',
        tags: ['Innocent', 'Face Cover', 'Lovely'],
        tagsKo: ['청순', '소두효과', '러블리'],
        badMatch: ['Heavy Look'],
        badMatchKo: ['무거운 느낌'],
        imagePath: '/images/characters/female/wendy_cut.png',
        expertComment: {
            ko: "레드벨벳 웬디 단발로 유명해진 스타일로, 중단발 기장에서 층을 내어 가벼움을 준 허쉬컷의 소프트한 버전입니다. 광대를 자연스럽게 커버해주어 광대 컴플렉스가 있는 분들께 강력 추천합니다.",
            en: "Famous as Red Velvet Wendy's bob. It's a softer version of the hush cut at medium length. Naturally covers cheekbones, highly recommended for those concerned about high cheekbones.",
            ja: "Red Velvetウェンディのボブとして有名になったスタイルで、中単髪の長さにレイヤーを入れて軽さを出したハッシュカットのソフトバージョンです。頬骨を自然にカバーしてくれるので、頬骨が気になる方に強く推奨します。",
            zh: "以Red Velvet Wendy短发闻名。是中短发层次剪的柔和版。能自然遮盖颧骨，强烈推荐给颧骨高的人。",
            vn: "Nổi tiếng với kiểu tóc bob của Wendy (Red Velvet). Đây là phiên bản mềm mại hơn của hush cut ở độ dài trung bình. Che gò má tự nhiên, rất khuyên dùng cho người có gò má cao.",
            th: "โด่งดังในชื่อทรงผมบ๊อบของ Wendy Red Velvet เป็นเวอร์ชันที่นุ่มนวลกว่าของทรงฮัชคัทในความยาวระดับประบ่า ช่วยพรางโหนกแก้มได้เป็นธรรมชาติ แนะนำมากสำหรับคนที่มีโหนกแก้มสูง"
        },
        stylingGuide: {
            ko: "1. 드라이기로 C컬을 크게 넣어주며 말립니다.\n2. 귀 옆 머리는 뒤로 넘겨주듯 드라이하여 볼륨을 줍니다.\n3. 에센스로 차분하게 결정리합니다.",
            en: "1. Blow dry creating large C-curls.\n2. Blow dry side hair backwards to add volume.\n3. Smooth out texture with essence.",
            ja: "1. ドライヤーで大きなCカールを作りながら乾かします。\n2. 耳横の髪は後ろに流すようにブローしてボリュームを出します。\n3. エッセンスで落ち着かせて整えます。",
            zh: "1. 用吹风机吹出大C卷。\n2. 耳侧头发向后吹，增加蓬松感。\n3. 用精华液抚平毛躁。",
            vn: "1. Sấy tạo kiểu chữ C lớn.\n2. Sấy tóc hai bên ra sau để tạo độ phồng.\n3. Làm mượt tóc bằng tinh chất.",
            th: "1. เป่าผมโดยม้วนเป็นลอน C ใหญ่\n2. เป่าผมด้านข้างไปด้านหลังเพื่อเพิ่มวอลลุ่ม\n3. ลูบไล้ด้วยเอสเซนส์เพื่อให้ผมเรียบสวย"
        },
        maintenance: {
            ko: "거지존(어깨 기장)을 예쁘게 넘길 수 있는 스타일입니다. 2달 정도 기르다가 다듬어도 무방합니다.",
            en: "Great style to overcome the 'awkward length' phase. Can grow out for 2 months before trimming.",
            ja: "伸ばしかけの半端な長さ（乞食ゾーン）を綺麗に乗り越えられるスタイルです。2ヶ月ほど伸ばしてから整えても問題ありません。",
            zh: "适合度过尴尬期的完美发型。可以留2个月再修剪。",
            vn: "Kiểu tóc tuyệt vời để vượt qua giai đoạn 'độ dài lỡ cỡ'. Có thể để dài trong 2 tháng trước khi tỉa.",
            th: "ทรงผมที่เหมาะมากสำหรับการผ่านช่วง 'ความยาวกึ่งกลาง' สามารถไว้ได้นาน 2 เดือนก่อนจะเล็มออก"
        }
    },
    build_perm: {
        id: 'build_perm',
        name: 'Build Perm',
        nameKo: '빌드펌',
        position: 'S-Curl Volume',
        positionKo: 'S컬 볼륨 펌',
        description: 'Mix of C and S curls creating rich and elegant volume.',
        descriptionKo: 'C컬과 S컬이 섞여 풍성하고 우아한 볼륨을 만들어주는 스타일입니다.',
        tags: ['Elegant', 'Volume', 'Feminine'],
        tagsKo: ['우아함', '볼륨', '여신머리'],
        badMatch: ['Natural Look'],
        badMatchKo: ['자연스러운 머리'],
        imagePath: '/images/characters/female/build_perm.png',
        expertComment: {
            ko: "C컬과 S컬을 믹스하여 풍성한 볼륨감을 만드는 펌입니다. 옆머리의 S컬이 얼굴선을 부드럽게 감싸주어 우아하고 여성스러운 이미지를 극대화합니다. 손질이 가장 쉬운 펌 중 하나입니다.",
            en: "Mixes C-curls and S-curls to create rich volume. Side S-curls gently wrap the face line, maximizing elegance and femininity. One of the easiest perms to style.",
            ja: "CカールとSカールをミックスして豊かなボリュームを作るパーマです。サイドのSカールがフェイスラインを優しく包み込み、優雅で女性らしいイメージを最大化します。セットが最も簡単なパーマの一つです。",
            zh: "混合C卷和S卷，打造丰富蓬松感。侧面的S卷柔和地包裹脸部线条，最大化优雅女性魅力。最好打理的烫发之一。",
            vn: "Kết hợp lọn chữ C và S để tạo độ phồng dày dặn. Lọn chữ S hai bên ôm nhẹ đường nét khuôn mặt, tối đa hóa vẻ thanh lịch và nữ tính. Một trong những kiểu uốn dễ tạo kiểu nhất.",
            th: "ผสมผสานลอน C และ S เพื่อสร้างวอลลุ่มที่ดูหนานุ่ม ลอน S ด้านข้างช่วยอำพรางกรอบหน้า เพิ่มความสง่างามและความเป็นผู้หญิงถึงขีดสุด เป็นหนึ่งในทรงดัดที่เซ็ตง่ายที่สุด"
        },
        stylingGuide: {
            ko: "1. 두피를 다 말린 후, 머리를 4등분 합니다.\n2. 얼굴 바깥 방향으로 돌려가며 말려줍니다.\n3. 다 마르면 손으로 빗질하여 컬을 자연스럽게 풉니다.",
            en: "1. Dry scalp, then divide hair into 4 sections.\n2. Twirl hair outwards (away from face) while drying.\n3. Finger comb to loosen curls naturally.",
            ja: "1. 頭皮を乾かした後、髪を4等分します。\n2. 顔の外側に向かってねじりながら乾かします。\n3. 乾いたら手櫛でとかしてカールを自然にほぐします。",
            zh: "1. 吹干头皮，头发分4区。\n2. 向脸外侧绕着吹干。\n3. 干了之后用手梳开，卷度更自然。",
            vn: "1. Sấy khô da đầu, chia tóc làm 4 phần.\n2. Vừa sấy vừa xoắn tóc hướng ra ngoài (xa mặt).\n3. Dùng tay chải để lọn tóc bung ra tự nhiên.",
            th: "1. เป่าหนังศีรษะให้แห้ง แล้วแบ่งผมเป็น 4 ส่วน\n2. ม้วนผมออกด้านนอก (ออกจากใบหน้า) ขณะเป่า\n3. ใช้นิ้วสางเพื่อให้ลอนคลายตัวอย่างเป็นธรรมชาติ"
        },
        maintenance: {
            ko: "컬이 굵어 3~4개월 유지됩니다. 풀릴수록 더 자연스러워져서 예쁩니다.",
            en: "Lasts 3-4 months due to thick curls. Looks even prettier and more natural as it loosens.",
            ja: "カールが太いので3〜4ヶ月持ちます。取れてくるほど自然になって可愛いです。",
            zh: "大卷可维持3-4个月。稍微松散一点更自然好看。",
            vn: "Giữ được 3-4 tháng nhờ lọn to. Càng duỗi ra trông càng tự nhiên và đẹp hơn.",
            th: "อยู่ได้ 3-4 เดือนเพราะลอนใหญ่ ยิ่งคลายยิ่งดูสวยและเป็นธรรมชาติ"
        }
    },
    hush_cut: {
        id: 'hush_cut',
        name: 'Long Hush Cut',
        nameKo: '장발 허쉬컷',
        position: 'Trendy Long',
        positionKo: '트렌디한 장발',
        description: 'Stylish and hip mood with light textures even on long hair.',
        descriptionKo: '긴 기장에서도 가벼운 질감을 살려 스타일리시하고 힙한 무드를 줍니다.',
        tags: ['Unique', 'Hip', 'Trendy'],
        tagsKo: ['유니크', '힙함', '트렌디'],
        badMatch: ['Neat Look'],
        badMatchKo: ['깔끔함 선호'],
        imagePath: '/images/characters/female/hush_cut.png',
        expertComment: {
            ko: "긴 머리의 무게감을 덜어내고 층을 많이 낸 스타일입니다. '거적때기 같다'는 오해를 받기도 하지만, 제대로 자르면 가장 트렌디하고 힙한 스타일입니다. 목선이 가늘어 보이는 효과가 있습니다.",
            en: "Removes weight from long hair with distinct layers. Sometimes misunderstood as messy, but it's the trendiest, hippest style when done right. Makes the neckline appear slimmer.",
            ja: "ロングヘアの重さを取り除き、レイヤーを多く入れたスタイルです。「ボロボロに見える」と誤解されることもありますが、正しくカットすれば最もトレンディでヒップなスタイルです。首が細く見える効果があります。",
            zh: "减轻长发重量，层次丰富。虽然有时被误解为乱糟糟，但剪好了就是最潮最酷的发型。有显脖子细的效果。",
            vn: "Loại bỏ độ nặng của tóc dài bằng các lớp tỉa rõ rệt. Đôi khi bị hiểu lầm là luộm thuộm, nhưng đây là kiểu tóc thời thượng và sành điệu nhất nếu cắt đúng. Giúp cổ trông thon thả hơn.",
            th: "ลดความหนาหนักของผมยาวด้วยเลเยอร์ที่ชัดเจน บางครั้งอาจถูกมองว่าดูยุ่งเหยิง แต่ถ้าตัดดีๆ จะเป็นทรงที่อินเทรนด์และฮิปที่สุด ช่วยให้ลำคอดูระหงขึ้น"
        },
        stylingGuide: {
            ko: "1. 젖은 상태에서 웨트 오일을 발라 가닥가닥 뭉치게 합니다.\n2. 뿌리만 말리고 끝부분은 자연건조 하거나 구겨서 말립니다.\n3. 폴리쉬 오일로 마무리하여 슬릭한 느낌을 줍니다.",
            en: "1. Apply wet oil to damp hair to create clumps.\n2. Dry roots only, air dry ends or scrunch.\n3. Finish with polish oil for a sleek look.",
            ja: "1. 濡れた状態でウェットオイルを塗り、束感を作ります。\n2. 根元だけ乾かし、毛先は自然乾燥か揉み込んで乾かします。\n3. ポリッシュオイルで仕上げてスリークな感じを出します。",
            zh: "1. 湿发状态涂抹湿发油，制造束感。\n2. 只吹干发根，发尾自然干或抓干。\n3. 最后用抛光油打造湿亮感。",
            vn: "1. Thoa dầu tạo kiểu ướt lên tóc ẩm để tạo thớ.\n2. Chỉ sấy chân tóc, để đuôi tóc khô tự nhiên hoặc bóp nhẹ.\n3. Hoàn thiện bằng dầu bóng cho vẻ ngoài mượt mà.",
            th: "1. ลงออยล์แบบ Wet Look ตอนผมหมาดเพื่อจับช่อ\n2. เป่าโคนผมให้แห้ง ปลายผมปล่อยแห้งเองหรือขยำ\n3. จบด้วยออยล์ขัดเงาเพื่อให้ดูเรียบลื่น"
        },
        maintenance: {
            ko: "층이 많아 4주 간격의 다듬기가 필요합니다. 끝이 너무 날리면 지저분해 보이므로 에센스 관리가 필수입니다.",
            en: "Trim every 4 weeks due to layers. Maintenance with essence is crucial to prevent messy ends.",
            ja: "レイヤーが多いので4週間隔のトリミングが必要です。毛先が散らばりすぎると汚く見えるので、エッセンスでのケアが必須です。",
            zh: "层次多，需每4周修剪。发尾太乱会显脏，必须用精华护理。",
            vn: "Tỉa 4 tuần/lần vì nhiều lớp. Dưỡng bằng tinh chất là bắt buộc để tránh đuôi tóc bị xơ rối.",
            th: "เล็มทุก 4 สัปดาห์เพราะมีเลเยอร์ จำเป็นต้องบำรุงด้วยเอสเซนส์เพื่อไม่ให้ปลายผมดูรก"
        }
    },
    elizabeth_perm: {
        id: 'elizabeth_perm',
        name: 'Elizabeth Perm',
        nameKo: '엘리자벳펌',
        position: 'Graceful Waves',
        positionKo: '우아한 여신 웨이브',
        description: 'Thick waves flowing along the side create a luxurious image.',
        descriptionKo: '굵은 웨이브가 얼굴 옆라인을 따라 흐르며 화려하고 고급스러운 이미지를 줍니다.',
        tags: ['Glam', 'Luxury', 'Feminine'],
        tagsKo: ['화려함', '고급스러움', '페미닌'],
        badMatch: ['Natural Look'],
        badMatchKo: ['수수한 스타일'],
        imagePath: '/images/characters/female/elizabeth_perm.png',
        expertComment: {
            ko: "얼굴 옆선의 흐름을 강조한 굵은 웨이브 스타일입니다. 우아하고 고풍스러운 분위기를 자아내며, 특히 긴 얼굴형이나 각진 얼굴형을 부드럽게 감싸주어 얼굴형 보완 효과가 뛰어납니다.",
            en: "A thick wave style emphasizing the flow along the side of the face. Creates an elegant and classic vibe. Excellent for softening long or square face shapes.",
            ja: "顔周りの流れを強調した太めのウェーブスタイルです。優雅でクラシックな雰囲気を醸し出し、特に面長やエラ張りの顔型を優しく包み込み、顔型補正効果に優れています。",
            zh: "强调脸侧线条的大波浪发型。营造优雅复古的氛围，特别是能柔和地包裹长脸或方脸，修饰脸型效果极佳。",
            vn: "Kiểu sóng to nhấn mạnh độ rủ dọc theo khuôn mặt. Tạo cảm giác thanh lịch và cổ điển. Tuyệt vời để làm mềm các khuôn mặt dài hoặc vuông.",
            th: "ทรงลอนใหญ่ที่เน้นความพริ้วไหวบริเวณกรอบหน้า สร้างลุคที่ดูสง่างามและคลาสสิก ช่วยรับกับใบหน้ายาวหรือหน้าเหลี่ยมได้ดีเยี่ยม"
        },
        stylingGuide: {
            ko: "1. 머리를 뒤쪽 방향으로 돌리면서 말리는 것이 핵심입니다.\n2. 귀 옆 볼륨을 살리기 위해 그루프를 사용하면 좋습니다.\n3. 컬크림으로 마무리하여 윤기를 줍니다.",
            en: "1. Key is to dry hair while twisting it backwards.\n2. Use a hair roller for side volume.\n3. Finish with curl cream for shine.",
            ja: "1. 髪を後ろ方向にねじりながら乾かすのがコツです。\n2. 耳横のボリュームを出すためにカーラーを使うと良いです。\n3. カールクリームで仕上げて艶を出します。",
            zh: "1. 关键是向后绕着吹干。\n2. 耳侧可以用发卷增加蓬松度。\n3. 用弹力素收尾增加光泽。",
            vn: "1. Chìa khóa là vừa sấy vừa xoắn tóc ra sau.\n2. Dùng lô cuốn để tạo độ phồng hai bên.\n3. Hoàn thiện bằng kem tạo kiểu để tóc bóng mượt.",
            th: "1. เคล็ดลับคือเป่าผมพร้อมกับม้วนไปด้านหลัง\n2. ใช้โรลม้วนผมเพื่อเพิ่มวอลลุ่มด้านข้าง\n3. จบด้วยครีมจับลอนเพื่อความเงางาม"
        },
        maintenance: {
            ko: "6개월에 한 번 펌을 해도 충분할 정도로 유지력이 좋습니다. 하지만 머릿결 관리가 중요합니다.",
            en: "Great longevity; perming once every 6 months is enough. However, hair quality care is important.",
            ja: "6ヶ月に一度パーマをかけても十分なほど持ちが良いです。ただし、髪質のケアが重要です。",
            zh: "持久度好，半年烫一次都够。但发质护理很重要。",
            vn: "Giữ nếp rất tốt; uốn 6 tháng/lần là đủ. Tuy nhiên, việc chăm sóc chất tóc là rất quan trọng.",
            th: "อยู่ได้นานมาก ดัดแค่ 6 เดือนครั้งก็พอ แต่การบำรุงเส้นผมสำคัญมาก"
        }
    },
    sleek_cut_w: {
        id: 'sleek_cut_w',
        name: 'Sleek Cut',
        nameKo: '슬릭컷',
        position: 'Y2K Straight',
        positionKo: '청순 시크 생머리',
        description: 'Long straight hair like magic. Pure yet chic charm.',
        descriptionKo: '매직한 듯 찰랑거리는 긴 생머리. 청초하면서도 시크한 매력이 있어요.',
        tags: ['Pure', 'Chic', 'Y2K'],
        tagsKo: ['청순', '시크', 'Y2K'],
        badMatch: ['Long Face'],
        badMatchKo: ['긴 얼굴형'],
        imagePath: '/images/characters/female/sleek_cut.png',
        expertComment: {
            ko: "Y2K 트렌드와 함께 돌아온 긴 생머리 스타일입니다. 층을 거의 내지 않고 가볍게 질감 처리만 하여, 찰랑거리는 머릿결을 강조합니다. 청순함과 힙한 느낌을 동시에 줄 수 있습니다.",
            en: "Long straight hair returned with the Y2K trend. Minimal layers highlighting silky texture. Gives both innocent and hip vibes simultaneously.",
            ja: "Y2Kトレンドと共に戻ってきたロングストレートヘアです。レイヤーをほとんど入れず軽く質感処理だけして、サラサラな髪質を強調します。清純さとヒップな感じを同時に与えられます。",
            zh: "随Y2K风潮回归的长直发。几乎没有层次，只做轻微质感处理，强调顺滑发质。兼具清纯与潮酷感。",
            vn: "Tóc thẳng dài trở lại cùng xu hướng Y2K. Tỉa lớp tối thiểu để làm nổi bật kết cấu mượt mà. Mang lại vẻ ngây thơ và sành điệu cùng lúc.",
            th: "ผมตรงยาวที่กลับมาพร้อมเทรนด์ Y2K เลเยอร์น้อยมากเน้นโชว์ว่าผมดูสุขภาพดี ให้ความรู้สึกทั้งไร้เดียงสาและฮิปในเวลาเดียวกัน"
        },
        stylingGuide: {
            ko: "1. 위에서 아래로 차분하게 말립니다.\n2. 매직기로 일자로 펴줍니다.\n3. 잔머리는 스틱 왁스로 정리하고, 오일 에센스로 윤기를 줍니다.",
            en: "1. Blow dry downwards calmly.\n2. Straighten with flat iron.\n3. Tame flyaways with stick wax and add shine with oil essence.",
            ja: "1. 上から下へ落ち着かせて乾かします。\n2. ストレートアイロンで真っ直ぐに伸ばします。\n3. アホ毛はスティックワックスで整え、オイルエッセンスで艶を出します。",
            zh: "1. 从上往下顺着吹干。\n2. 用直板夹拉直。\n3. 碎发用发蜡棒整理，涂精油增加光泽。",
            vn: "1. Sấy tóc xuôi từ trên xuống.\n2. Kẹp thẳng bằng máy duỗi.\n3. Vuốt tóc con bằng sáp thoi và thêm độ bóng bằng tinh dầu.",
            th: "1. เป่าผมลงด้านล่างอย่างใจเย็น\n2. หนีบตรงด้วยเครื่องหนีบผม\n3. เก็บผมชี้ฟูด้วยสติ๊กแว็กซ์และเพิ่มความเงางามด้วยออยล์เอสเซนส์"
        },
        maintenance: {
            ko: "곱슬기가 있다면 3~4개월 주기로 매직 스트레이트 펌이 필요합니다.",
            en: "Magic straight perm needed every 3-4 months if you have curly hair.",
            ja: "くせ毛なら3〜4ヶ月周期で縮毛矯正が必要です。",
            zh: "有自然卷的话需3-4个月做一次拉直。",
            vn: "Cần ép duỗi (magic straight) mỗi 3-4 tháng nếu tóc xoăn.",
            th: "ต้องยืดผมถาวรทุก 3-4 เดือนหากมีผมหยักศก"
        }
    },
    hippie_perm_w: {
        id: 'hippie_perm_w',
        name: 'Hippie Perm',
        nameKo: '히피펌 / 젤리펌',
        position: 'Bohemian Vibe',
        positionKo: '자유로운 보헤미안',
        description: 'Curls flowing from roots complete a dreamy and lovely vintage mood.',
        descriptionKo: '뿌리부터 흐르는 컬이 몽환적이고 사랑스러운 빈티지 무드를 완성합니다.',
        tags: ['Lovely', 'Vintage', 'Unique'],
        tagsKo: ['러블리', '빈티지', '개성'],
        badMatch: ['Anti-frizz'],
        badMatchKo: ['부스스한거 싫음'],
        imagePath: '/images/characters/female/hippie_perm.png',
        expertComment: {
            ko: "뿌리부터 촘촘하게 들어간 컬이 사랑스럽고 빈티지한 분위기를 연출합니다. 묶었을 때도 볼륨이 살아있어 스타일리시하며, 머리 숱이 적은 분들에게 최고의 볼륨 솔루션입니다.",
            en: "Tight curls from the roots create a lovely vintage vibe. Looks stylish even when tied up due to volume. The best volume solution for thin hair.",
            ja: "根元から細かく入ったカールが愛らしくヴィンテージな雰囲気を演出します。結んだ時もボリュームがありスタイリッシュで、髪が少ない方にとって最高のボリュームソリューションです。",
            zh: "从发根开始的细密卷度营造出可爱复古的氛围。扎起来也很蓬松时尚，是发量少的人最好的蓬松方案。",
            vn: "Các lọn xoăn chặt từ chân tóc tạo nên vẻ cổ điển đáng yêu. Trông vẫn sành điệu ngay cả khi buộc lên nhờ độ phồng. Giải pháp tạo độ phồng tốt nhất cho tóc mỏng.",
            th: "ลอนแน่นตั้งแต่โคนผมสร้างลุควินเทจที่น่ารัก แม้มัดผมก็ยังดูดีมีสไตล์เพราะวอลลุ่ม เป็นทางออกที่ดีที่สุดสำหรับคนผมบางที่อยากดูผมหนา"
        },
        stylingGuide: {
            ko: "1. 두피만 말리고 모발은 자연건조가 베스트입니다.\n2. 컬크림을 듬뿍 발라 부스스함을 잡아야 합니다.\n3. 반묶음이나 포니테일을 하면 더욱 귀엽습니다.",
            en: "1. Dry scalp only; air dry ends is best.\n2. Apply plenty of curl cream to control frizz.\n3. Looks even cuter with half-up or ponytail styles.",
            ja: "1. 頭皮だけ乾かし、髪は自然乾燥がベストです。\n2. カールクリームをたっぷり塗ってパサつきを抑えます。\n3. ハーフアップやポニーテールにするとさらに可愛いです。",
            zh: "1. 只吹干头皮，发尾自然干最好。\n2. 多涂弹力素防止毛躁。\n3. 半扎发或马尾会更可爱。",
            vn: "1. Chỉ sấy chân tóc; đuôi tóc để khô tự nhiên là tốt nhất.\n2. Thoa nhiều kem tạo kiểu để kiểm soát độ xù.\n3. Trông càng dễ thương hơn khi buộc nửa đầu hoặc đuôi ngựa.",
            th: "1. เป่าแค่หนังศีรษะ ปล่อยปลายผมแห้งเองดีที่สุด\n2. ลงครีมจับลอนเยอะๆ เพื่อลดความชี้ฟู\n3. จะดูน่ารักยิ่งขึ้นถ้ามัดครึ่งหัวหรือหางม้า"
        },
        maintenance: {
            ko: "유지기간이 6개월 이상으로 매우 깁니다. 뿌리 부분만 부분적으로 펌을 다시 하면 됩니다.",
            en: "Lasts very long (6+ months). You only need to re-perm the roots.",
            ja: "維持期間が6ヶ月以上と非常に長いです。根元部分だけ部分的にパーマをかけ直せばOKです。",
            zh: "维持期非常长（6个月以上）。只需补烫发根即可。",
            vn: "Giữ được rất lâu (trên 6 tháng). Bạn chỉ cần uốn lại phần chân tóc.",
            th: "อยู่ได้นานมาก (6 เดือนขึ้นไป) แค่ดัดเติมโคนก็พอ"
        }
    }
};
