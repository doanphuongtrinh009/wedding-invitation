export type DemoImageAsset = {
  id: number;
  src: string;
  alt: string;
  blurDataURL: string;
  objectPosition?: string;
};

type RawDemoImageAsset = Omit<DemoImageAsset, "id" | "blurDataURL">;

const createBlurDataURL = (primaryColor: string, secondaryColor: string) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${primaryColor}" /><stop offset="100%" stop-color="${secondaryColor}" /></linearGradient></defs><rect width="10" height="10" fill="url(#g)" /></svg>`,
  )}`;

const buildSet = (rawAssets: RawDemoImageAsset[], blurPrimary: string, blurSecondary: string): DemoImageAsset[] => {
  const blurDataURL = createBlurDataURL(blurPrimary, blurSecondary);

  return rawAssets.map((asset, index) => ({
    id: index + 1,
    blurDataURL,
    ...asset,
  }));
};

export const editorialImageSet = buildSet(
  [
    {
      src: "https://images.unsplash.com/photo-1560463163-7db917ff9daf?auto=format&fit=crop&w=2200&q=88",
      alt: "Ảnh cưới thời trang tông beige",
      objectPosition: "50% 42%",
    },
    {
      src: "https://images.unsplash.com/photo-1570124486353-32c46f39a397?auto=format&fit=crop&w=1800&q=88",
      alt: "Chân dung cặp đôi phong cách magazine",
      objectPosition: "50% 32%",
    },
    {
      src: "https://images.unsplash.com/photo-1625224699695-2b31e3698312?auto=format&fit=crop&w=1800&q=88",
      alt: "Khoảnh khắc hậu trường váy cưới editorial",
      objectPosition: "48% 42%",
    },
    {
      src: "https://images.unsplash.com/photo-1625224700862-e296cd4486e4?auto=format&fit=crop&w=1800&q=88",
      alt: "Cô dâu chú rể tạo dáng thời trang",
      objectPosition: "50% 38%",
    },
    {
      src: "https://images.unsplash.com/photo-1625224702026-dd5f6734ccdc?auto=format&fit=crop&w=1800&q=88",
      alt: "Ảnh cưới ánh sáng film tone sang trọng",
      objectPosition: "50% 40%",
    },
    {
      src: "https://images.unsplash.com/photo-1724812773475-8a848e4027a7?auto=format&fit=crop&w=1800&q=88",
      alt: "Khung hình venue cưới cao cấp",
      objectPosition: "50% 52%",
    },
  ],
  "#d8c4ad",
  "#b89d7f",
);

export const romanticImageSet = buildSet(
  [
    {
      src: "https://images.unsplash.com/photo-1553540752-d283de488956?auto=format&fit=crop&w=2200&q=88",
      alt: "Ảnh cưới tông hồng pastel trong vườn hoa",
      objectPosition: "50% 44%",
    },
    {
      src: "https://images.unsplash.com/photo-1558535284-21b4a3839741?auto=format&fit=crop&w=1800&q=88",
      alt: "Khoảnh khắc cầm bó hoa cưới mềm mại",
      objectPosition: "50% 40%",
    },
    {
      src: "https://images.unsplash.com/photo-1569976088853-abf1c2cb282a?auto=format&fit=crop&w=1800&q=88",
      alt: "Cặp đôi dưới ánh chiều hoàng hôn lãng mạn",
      objectPosition: "50% 46%",
    },
    {
      src: "https://images.unsplash.com/photo-1593470309378-bf460a1c7f10?auto=format&fit=crop&w=1800&q=88",
      alt: "Bàn tiệc floral tông hồng nhẹ nhàng",
      objectPosition: "50% 54%",
    },
    {
      src: "https://images.unsplash.com/photo-1611261162683-21e900a6d1bf?auto=format&fit=crop&w=1800&q=88",
      alt: "Khoảnh khắc cặp đôi cười dưới ánh nắng dịu",
      objectPosition: "50% 38%",
    },
    {
      src: "https://images.unsplash.com/photo-1613067532295-b4f1760616cd?auto=format&fit=crop&w=1800&q=88",
      alt: "Không gian lễ cưới ngoài trời hoa lá",
      objectPosition: "50% 52%",
    },
  ],
  "#f3dee7",
  "#dcb7cb",
);

export const minimalImageSet = buildSet(
  [
    {
      src: "https://images.unsplash.com/photo-1550432247-95d7f25c8e24?auto=format&fit=crop&w=2200&q=88",
      alt: "Cặp đôi hiện đại với bối cảnh tối giản",
      objectPosition: "50% 42%",
    },
    {
      src: "https://images.unsplash.com/photo-1610489800994-1330ea56e30f?auto=format&fit=crop&w=1800&q=88",
      alt: "Portrait cưới nền trung tính sáng",
      objectPosition: "50% 34%",
    },
    {
      src: "https://images.unsplash.com/photo-1627364155535-9ed50e63aece?auto=format&fit=crop&w=1800&q=88",
      alt: "Khoảnh khắc cặp đôi tông trắng sạch",
      objectPosition: "50% 44%",
    },
    {
      src: "https://images.unsplash.com/photo-1627579765394-95ad6579c28a?auto=format&fit=crop&w=1800&q=88",
      alt: "Ảnh cưới phong cách hiện đại tối giản",
      objectPosition: "50% 46%",
    },
    {
      src: "https://images.unsplash.com/photo-1629222311300-8728602b6dc4?auto=format&fit=crop&w=1800&q=88",
      alt: "Khung hình cưới studio clean composition",
      objectPosition: "50% 36%",
    },
    {
      src: "https://images.unsplash.com/photo-1638763757006-94414ab2ccf2?auto=format&fit=crop&w=1800&q=88",
      alt: "Khoảnh khắc dạo phố phong cách tối giản",
      objectPosition: "50% 42%",
    },
  ],
  "#ecebe7",
  "#d6d5d1",
);

export const luxuryImageSet = buildSet(
  [
    {
      src: "https://images.unsplash.com/photo-1519226719127-9e805abb99b1?auto=format&fit=crop&w=2400&q=86",
      alt: "Hero cưới đêm phong cách luxury",
      objectPosition: "50% 40%",
    },
    {
      src: "https://images.unsplash.com/photo-1521543387600-c745f8e83d77?auto=format&fit=crop&w=1800&q=86",
      alt: "Không gian tiệc tối ánh vàng sang trọng",
      objectPosition: "50% 54%",
    },
    {
      src: "https://images.unsplash.com/photo-1600460906827-147ee91a7041?auto=format&fit=crop&w=1800&q=86",
      alt: "Khung cảnh đêm với ánh nến cinematic",
      objectPosition: "50% 50%",
    },
    {
      src: "https://images.unsplash.com/photo-1727420517799-19be7ad1ed83?auto=format&fit=crop&w=1800&q=86",
      alt: "Bữa tiệc cưới luxury tông tối",
      objectPosition: "50% 52%",
    },
    {
      src: "https://images.unsplash.com/photo-1727430813324-ff0d017324c3?auto=format&fit=crop&w=1800&q=86",
      alt: "Chi tiết bàn tiệc đêm phong cách cao cấp",
      objectPosition: "50% 54%",
    },
    {
      src: "https://images.unsplash.com/photo-1769038933447-d4482066aadb?auto=format&fit=crop&w=1800&q=86",
      alt: "Cặp đôi trong khung cảnh dạ tiệc vàng đen",
      objectPosition: "50% 42%",
    },
  ],
  "#2a2015",
  "#5a4328",
);

export const storyImageSet = buildSet(
  [
    {
      src: "https://images.unsplash.com/photo-1501845073335-1cb7bf68ff55?auto=format&fit=crop&w=2200&q=88",
      alt: "Mở đầu câu chuyện với khoảnh khắc cầu hôn",
      objectPosition: "50% 44%",
    },
    {
      src: "https://images.unsplash.com/photo-1598976701972-40f0bf429d9f?auto=format&fit=crop&w=1800&q=88",
      alt: "Khoảnh khắc đính hôn thân mật",
      objectPosition: "50% 40%",
    },
    {
      src: "https://images.unsplash.com/photo-1614969707621-481ce08953a2?auto=format&fit=crop&w=1800&q=88",
      alt: "Cặp đôi trong buổi chụp pre-wedding",
      objectPosition: "50% 42%",
    },
    {
      src: "https://images.unsplash.com/photo-1629942878399-498d6a0c8a44?auto=format&fit=crop&w=1800&q=88",
      alt: "Nghi lễ cưới cùng gia đình",
      objectPosition: "50% 50%",
    },
    {
      src: "https://images.unsplash.com/photo-1660243353143-36a8508d6e07?auto=format&fit=crop&w=1800&q=88",
      alt: "Không gian tiệc cưới trước giờ khai tiệc",
      objectPosition: "50% 54%",
    },
    {
      src: "https://images.unsplash.com/photo-1549620936-aa6278062ba5?auto=format&fit=crop&w=1800&q=88",
      alt: "Khoảnh khắc tiệc cưới sôi động",
      objectPosition: "50% 48%",
    },
    {
      src: "https://images.unsplash.com/photo-1524148896000-11a448dd0560?auto=format&fit=crop&w=1800&q=88",
      alt: "Khung hình kết thúc câu chuyện trong đêm tiệc",
      objectPosition: "50% 52%",
    },
  ],
  "#344866",
  "#1c2a43",
);
