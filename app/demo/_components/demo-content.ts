import { CONFIG } from "@/app/utils/data";

const fallbackVenue = "Trung tâm hội nghị ven sông, TP. Hồ Chí Minh";

const fallbackEvents = [
  {
    title: "Lễ đón khách",
    icon: "✨",
    time: "16:00 - 17:00",
    date: "20/09/2026",
    location: "Sảnh Orchid, Riverside Convention Center",
    mapLink: "https://maps.google.com",
  },
  {
    title: "Lễ thành hôn",
    icon: "💍",
    time: "17:30 - 18:30",
    date: "20/09/2026",
    location: "Grand Ballroom, Riverside Convention Center",
    mapLink: "https://maps.google.com",
  },
  {
    title: "Tiệc mừng",
    icon: "🥂",
    time: "18:30 - 22:00",
    date: "20/09/2026",
    location: "Sky Garden Deck, Riverside Convention Center",
    mapLink: "https://maps.google.com",
  },
];

const fallbackStory = [
  {
    date: "Mùa hè 2021",
    title: "Lần đầu gặp gỡ",
    description:
      "Chúng tôi quen nhau trong một dự án sáng tạo. Từ những cuộc họp ngắn, câu chuyện dần trở thành những bữa tối dài.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85",
  },
  {
    date: "Mùa thu 2023",
    title: "Lời cầu hôn",
    description:
      "Trong một buổi tối bên sông, chúng tôi đã chọn nhau cho hành trình dài lâu. Mọi thứ từ đó đều trở nên rõ ràng.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1800&q=85",
  },
  {
    date: "Năm 2026",
    title: "Ngày của chúng mình",
    description:
      "Ngày cưới được thiết kế để gia đình và bạn bè cùng chia sẻ niềm vui. Chúng tôi rất mong được đón tiếp bạn.",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1800&q=85",
  },
];

const fallbackGallery = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1800&q=85",
    alt: "Ảnh cưới ngoại cảnh",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1800&q=85",
    alt: "Khoảnh khắc nhẹ nhàng",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1800&q=85",
    alt: "Chân dung cặp đôi",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1800&q=85",
    alt: "Buổi hẹn hoàng hôn",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1800&q=85",
    alt: "Ảnh cưới trong vườn",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1800&q=85",
    alt: "Khoảnh khắc tiệc tối",
  },
];

const fallbackGifts = [
  {
    id: "groom",
    bankName: "Vietcombank",
    accountNumber: "1234567890",
    accountName: "DOAN PHUONG TRINH",
    branch: "Chi nhánh Hồ Chí Minh",
    qrImage: "/qr-vcb.jpg",
  },
  {
    id: "bride",
    bankName: "Techcombank",
    accountNumber: "0987654321",
    accountName: "NGUYEN THI QUYNH TRAM",
    branch: "Chi nhánh Sài Gòn",
    qrImage: "/qr-mb.jpg",
  },
];

const baseEvents = CONFIG.events?.length ? CONFIG.events : fallbackEvents;
const baseStory = CONFIG.loveStory?.length ? CONFIG.loveStory : fallbackStory;
const baseGallery = CONFIG.gallery?.length ? CONFIG.gallery : fallbackGallery;
const baseGifts = CONFIG.bankInfo?.length ? CONFIG.bankInfo : fallbackGifts;

export const demoContent = {
  groom: CONFIG.couple.groom,
  bride: CONFIG.couple.bride,
  weddingDate: CONFIG.weddingDate,
  location: baseEvents[2]?.location ?? baseEvents[0]?.location ?? fallbackVenue,
  invitationLine:
    "Chúng tôi trân trọng kính mời bạn đến chung vui trong ngày đặc biệt, nơi tình yêu được đánh dấu bằng lời hứa trọn đời.",
  signatureLine: "Trân trọng, gia đình hai bên và cô dâu chú rể",
  events: baseEvents.map((event, index) => ({
    id: `${event.title}-${index}`,
    title: event.title,
    time: event.time,
    date: event.date,
    location: event.location,
    mapLink: event.mapLink,
  })),
  storyMoments: baseStory.map((moment, index) => ({
    id: `${moment.title}-${index}`,
    date: moment.date,
    title: moment.title,
    description: moment.description,
    image: moment.image || CONFIG.couple.coverImage,
  })),
  gallery: baseGallery.map((photo) => ({
    id: photo.id,
    src: photo.src,
    alt: photo.alt,
  })),
  gifts: baseGifts.map((gift, index) => ({
    id: `${gift.id}-${index}`,
    bankName: gift.bankName,
    accountNumber: gift.accountNumber,
    accountName: gift.accountName,
    branch: gift.branch,
    qrImage: gift.qrImage,
    sideLabel: gift.id === "groom" ? "Mừng cưới chú rể" : "Mừng cưới cô dâu",
  })),
  vows: [
    "Một ngày được viết bằng sự tinh tế, những cuộc trò chuyện ấm áp và những điều đẹp để nhớ mãi.",
    "Từng chi tiết được chọn lựa để phản ánh hành trình của chúng tôi và sự hiện diện quý giá của bạn.",
    "Cảm ơn bạn đã là một phần của câu chuyện này và đồng hành cùng chúng tôi trong khoảnh khắc mở đầu.",
  ],
  chapterLabels: ["Mở đầu", "Gặp gỡ", "Lời hứa", "Lễ cưới", "Khoảnh khắc sau cùng"],
};

export const storyChapters = [
  {
    id: "chapter-1",
    title: "Mở đầu",
    subtitle: "Khi hai đường thẳng bắt đầu giao nhau",
    body:
      "Từ một cuộc họp tình cờ, chúng tôi tìm thấy sự đồng điệu trong cách sống và cách mơ ước.",
    image: demoContent.storyMoments[0]?.image ?? demoContent.gallery[0]?.src ?? CONFIG.couple.coverImage,
  },
  {
    id: "chapter-2",
    title: "Thành phố của chúng ta",
    subtitle: "Những buổi hẹn nhỏ giữa lịch trình bận rộn",
    body:
      "Cà phê sau giờ làm, những buổi đi dạo sau cơn mưa và vô số câu chuyện không có hồi kết.",
    image: demoContent.storyMoments[1]?.image ?? demoContent.gallery[1]?.src ?? CONFIG.couple.coverImage,
  },
  {
    id: "chapter-3",
    title: "Lời hứa",
    subtitle: "Một câu hỏi, một cái gật đầu",
    body:
      "Khoảnh khắc ấy không ồn ào, nhưng đủ để thay đổi tất cả. Chúng tôi chọn nhau cho hành trình phía trước.",
    image: demoContent.storyMoments[2]?.image ?? demoContent.gallery[2]?.src ?? CONFIG.couple.coverImage,
  },
  {
    id: "chapter-4",
    title: "Lễ cưới",
    subtitle: "Gia đình, nghi lễ và niềm vui",
    body:
      "Ngày cưới là nơi truyền thống và hiện đại cùng tồn tại. Mọi người chúng tôi yêu thương đều có mặt.",
    image: demoContent.storyMoments[3]?.image ?? demoContent.gallery[3]?.src ?? CONFIG.couple.coverImage,
  },
  {
    id: "chapter-5",
    title: "Sau ánh đèn",
    subtitle: "Trang đầu của một đời sống mới",
    body:
      "Khi bữa tiệc khép lại, điều ở lại là cảm giác yên tâm rằng mình đã tìm thấy nhau.",
    image: demoContent.gallery[4]?.src ?? CONFIG.couple.coverImage,
  },
];
