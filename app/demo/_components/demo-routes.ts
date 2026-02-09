export type DemoVariant = "editorial" | "romantic" | "minimal" | "luxury" | "story";

export interface DemoRouteMeta {
  variant: DemoVariant;
  name: string;
  tagline: string;
  summary: string;
  href: `/demo/${DemoVariant}`;
  mood: string;
}

export const demoRouteMeta: DemoRouteMeta[] = [
  {
    variant: "editorial",
    name: "Editorial Cao Cấp",
    tagline: "Bố cục tạp chí thời trang",
    summary: "Bố cục lệch ảnh và chữ theo nhịp runway, nhấn mạnh typography serif sang trọng.",
    href: "/demo/editorial",
    mood: "thời trang",
  },
  {
    variant: "romantic",
    name: "Lãng Mạn Floral",
    tagline: "Thiệp mời mềm mại",
    summary: "Thẻ bo tròn, điểm nhấn hoa nhẹ và mạch kể cảm xúc phù hợp wedding phong cách cổ điển.",
    href: "/demo/romantic",
    mood: "pastel",
  },
  {
    variant: "minimal",
    name: "Tối Giản Hiện Đại",
    tagline: "Tinh gọn kiểu Hàn",
    summary: "Bố cục trung tâm, khoảng trắng lớn, tương tác nhẹ và typography sạch, tập trung vào nội dung.",
    href: "/demo/minimal",
    mood: "tối giản",
  },
  {
    variant: "luxury",
    name: "Luxury Bóng Đêm",
    tagline: "Điện ảnh cao cấp",
    summary: "Nền đen ánh kim, headline mạnh và chuyển cảnh tinh tế theo phong cách luxury brand.",
    href: "/demo/luxury",
    mood: "điện ảnh",
  },
  {
    variant: "story",
    name: "Story Tương Tác",
    tagline: "Kể chuyện theo cuộn",
    summary: "Trải nghiệm kể chuyện theo chương với timeline rõ ràng, chuyển section mượt và parallax vừa phải.",
    href: "/demo/story",
    mood: "immersive",
  },
];

export function getDemoMeta(variant: DemoVariant): DemoRouteMeta {
  const match = demoRouteMeta.find((item) => item.variant === variant);

  if (!match) {
    return demoRouteMeta[0];
  }

  return match;
}
