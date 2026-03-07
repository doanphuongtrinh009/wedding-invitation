import { WeddingConfig } from "@/app/types";

export const weddingConfig: WeddingConfig = {
    meta: {
        title: "Thiệp Cưới | Phương Trình & Quỳnh Trâm",
        description:
            "Trân trọng kính mời bạn đến tham dự lễ thành hôn của Phương Trình và Quỳnh Trâm vào ngày 22 tháng 11 năm 2026 tại TP. Hồ Chí Minh.",
        themeColor: "#2f2922",
        theme: "luxury",
        musicUrl: "/music/wedding-song.mp3",
        seoKeywords:
            "thiệp cưới, wedding invitation, phuong trinh, quynh tram, gem center, wedding demo, luxury wedding",
        musicAutoplay: false,
    },
    couple: {
        groom: {
            name: "Đoàn Phương Trình",
            shortName: "Phương Trình",
            image: "/couple-photo.png",
            description:
                "Chàng kỹ sư sản phẩm điềm tĩnh, yêu sự chỉn chu và luôn là người giữ nhịp bình yên trong mọi cuộc trò chuyện.",
        },
        bride: {
            name: "Nguyễn Thị Quỳnh Trâm",
            shortName: "Quỳnh Trâm",
            image: "/couple-photo.png",
            description:
                "Cô gái làm thương hiệu, tinh tế trong từng chi tiết nhỏ và luôn mang đến cảm giác ấm áp cho những người bên cạnh.",
        },
        coverImage: "/couple-photo.png",
    },
    family: {
        groom: {
            title: "Nhà Trai",
            father: "Ông Đoàn Ngọc Trường",
            mother: "Bà Trịnh Thị Hồng Lê",
        },
        bride: {
            title: "Nhà Gái",
            father: "Ông Nguyễn Duy Hoàn",
            mother: "Bà Cù Thị Thanh",
        },
    },
    timeline: [
        {
            time: "17:30",
            title: "Đón khách",
            icon: "camera",
            description:
                "Khách mời check-in, chụp ảnh và gặp gỡ gia đình hai bên trong không gian tiền sảnh được chuẩn bị riêng.",
        },
        {
            time: "18:10",
            title: "Lễ Thành Hôn",
            icon: "ring",
            description:
                "Nghi thức chính bắt đầu với lời chào của gia đình, lời hẹn ước của cô dâu chú rể và nghi thức trao nhẫn.",
        },
        {
            time: "18:45",
            title: "Khai tiệc",
            icon: "cheers",
            description:
                "Cùng nâng ly chúc mừng, dùng tiệc tối và chia sẻ niềm vui trong một buổi tối ấm cúng, thân mật.",
        },
        {
            time: "20:00",
            title: "Nghi thức cắt bánh",
            icon: "cake",
            description:
                "Khoảnh khắc nhỏ nhưng đáng nhớ để đánh dấu ngày chính thức bắt đầu hành trình mới của hai đứa.",
        },
        {
            time: "21:15",
            title: "Gửi lời cảm ơn",
            icon: "heart",
            description:
                "Cô dâu chú rể gửi lời cảm ơn đến từng vị khách đã có mặt và cùng khép lại buổi tiệc bằng những cái ôm thân tình.",
        },
    ],
    quotes: [
        {
            content: "Yêu không chỉ là nhìn nhau, mà là cùng nhau nhìn về một hướng.",
            author: "Antoine de Saint-Exupéry",
        },
        {
            content: "Điều đẹp nhất trong cuộc đời là tìm thấy một người khiến ta muốn trở nên dịu dàng hơn mỗi ngày.",
            author: "Khuyết danh",
        },
    ],
    weddingDate: "2026-11-22T18:10:00",
    venue: {
        mapEmbedUrl:
            "https://www.google.com/maps?q=GEM%20Center%208%20Nguyen%20Binh%20Khiem%20District%201%20Ho%20Chi%20Minh%20City&z=15&output=embed",
    },
    events: [
        {
            title: "Lễ Vu Quy",
            icon: "🏠",
            time: "09:00 - 10:30",
            date: "22/11/2026",
            location: "Tư gia nhà gái, Khu đô thị Vạn Phúc, TP. Thủ Đức, TP. Hồ Chí Minh",
            mapLink: "https://www.google.com/maps/search/?api=1&query=Van+Phuc+City+Thu+Duc+Ho+Chi+Minh+City",
        },
        {
            title: "Lễ Thành Hôn",
            icon: "🏡",
            time: "11:30 - 12:15",
            date: "22/11/2026",
            location: "Tư gia nhà trai, 126 Lê Văn Sỹ, Phú Nhuận, TP. Hồ Chí Minh",
            mapLink: "https://www.google.com/maps/search/?api=1&query=126+Le+Van+Sy+Phu+Nhuan+Ho+Chi+Minh+City",
        },
        {
            title: "Tiệc Mừng",
            icon: "🎊",
            time: "17:30 - 21:30",
            date: "22/11/2026",
            location: "GEM Center, 8 Nguyễn Bỉnh Khiêm, Quận 1, TP. Hồ Chí Minh",
            mapLink: "https://www.google.com/maps/search/?api=1&query=GEM+Center+8+Nguyen+Binh+Khiem+District+1+Ho+Chi+Minh+City",
        },
    ],
    gallery: [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
            alt: "Khoảnh khắc cầu hôn dưới ánh hoàng hôn",
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=80",
            alt: "Bức ảnh đôi tình nhân trong khu vườn",
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80",
            alt: "Chân dung cô dâu chú rể phong cách cổ điển",
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&q=80",
            alt: "Khoảnh khắc nắm tay giữa thành phố",
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=80",
            alt: "Bộ ảnh cưới studio tone ấm",
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80",
            alt: "Cái ôm nhẹ trong ngày chụp ảnh cưới",
        },
        {
            id: 7,
            src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1200&q=80",
            alt: "Khoảnh khắc ngoại cảnh lãng mạn",
        },
        {
            id: 8,
            src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&q=80",
            alt: "Buổi tiệc tối lung linh ánh đèn",
        },
    ],
    guestbook: {
        initialMessages: [
            {
                id: 1,
                name: "Minh Anh",
                message: "Chúc hai bạn có một ngày cưới thật đẹp và một hành trình hôn nhân đầy yêu thương.",
                timestamp: "2026-10-15T00:00:00",
            },
            {
                id: 2,
                name: "Gia đình chị Hương",
                message: "Rất vui vì được chứng kiến khoảnh khắc hạnh phúc của hai con. Hẹn gặp trong ngày vui nhé.",
                timestamp: "2026-10-22T00:00:00",
            },
            {
                id: 3,
                name: "Tuấn và Nhi",
                message: "Chúc Phương Trình và Quỳnh Trâm trăm năm hạnh phúc, lúc nào cũng dịu dàng với nhau như bây giờ.",
                timestamp: "2026-11-01T00:00:00",
            },
        ],
    },
    loveStory: [
        {
            date: "Mùa hè 2022",
            title: "Lần đầu gặp nhau trong một dự án",
            description:
                "Một người quá lý trí, một người quá nhạy cảm. Từ những buổi họp ngắn và những lần tranh luận về chi tiết, hai đứa bắt đầu ghi nhớ nhau nhiều hơn dự kiến.",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
        },
        {
            date: "Tháng 10/2023",
            title: "Những buổi hẹn sau giờ làm",
            description:
                "Cà phê, những cuộc đi bộ sau mưa và những câu chuyện dài làm cả hai nhận ra đối phương là nơi mình có thể thật sự thư giãn.",
            image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=80",
        },
        {
            date: "Mùa thu 2025",
            title: "Lời cầu hôn bên bờ sông",
            description:
                "Không cần một buổi tối quá ồn ào, chỉ cần đúng người và một câu hỏi được nói ra đúng lúc. Từ đó, hai đứa biết đã đến lúc nghiêm túc cho một mái nhà chung.",
            image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80",
        },
        {
            date: "22/11/2026",
            title: "Ngày của chúng mình",
            description:
                "Sau nhiều mùa cùng trưởng thành, hai đứa muốn mời gia đình và bạn bè đến chung vui trong ngày chính thức bắt đầu hành trình mới cùng nhau.",
            image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&q=80",
        },
    ],
    dressCode: {
        description:
            "Để không gian buổi tiệc đồng điệu và lên hình đẹp hơn, chúng mình xin gợi ý quý khách ưu tiên những tone màu ấm, nhẹ và thanh lịch.",
        note: "Xin vui lòng hạn chế trang phục màu trắng toàn bộ và các tone màu quá neon.",
        palette: [
            {
                color: "#E7D8C4",
                name: "Champagne",
            },
            {
                color: "#C6A47A",
                name: "Caramel",
            },
            {
                color: "#5C6A56",
                name: "Olive Sage",
            },
            {
                color: "#6C4B3B",
                name: "Mocha",
            },
        ],
    },
    bankInfo: [
        {
            id: "groom",
            bankName: "Vietcombank",
            accountNumber: "1122334455",
            accountName: "DOAN PHUONG TRINH",
            branch: "Chi nhánh Sài Gòn",
            qrImage: "/qr-vcb.jpg",
            template: "compact",
        },
        {
            id: "bride",
            bankName: "Techcombank",
            accountNumber: "220026112026",
            accountName: "NGUYEN THI QUYNH TRAM",
            branch: "Chi nhánh Gia Định",
            qrImage: "/qr-mb.jpg",
            template: "compact",
        },
    ],
    content: {
        heroKicker: "Thiệp Mời Thành Hôn",
        heroHeadline: "Một ngày thật đẹp để chúng mình nói lời trọn đời",
        heroDescription:
            "Chúng mình thật sự hạnh phúc khi được mời bạn đến chung vui, cùng chứng kiến khoảnh khắc hai đứa chính thức bắt đầu một chương mới của cuộc đời.",
        storyIntro:
            "Không có một khoảnh khắc quá phô trương. Mọi thứ bắt đầu từ những lần gặp gỡ bình thường, rồi lớn dần thành sự đồng điệu và một lời hứa nghiêm túc.",
        timelineIntro:
            "Dưới đây là những cột mốc chính trong buổi tối để bạn dễ sắp xếp thời gian và tận hưởng trọn vẹn ngày vui cùng chúng mình.",
        scheduleIntro:
            "Mỗi điểm hẹn trong ngày cưới đều đã được chuẩn bị kỹ lưỡng để đón bạn một cách trọn vẹn và ấm áp.",
        galleryIntro:
            "Một vài khoảnh khắc nhỏ trước ngày chính thức về chung một nhà, lưu lại hành trình mà hai đứa luôn trân trọng.",
        registryIntro:
            "Sự hiện diện của bạn đã là món quà quý giá. Nếu bạn muốn gửi lời chúc hoặc quà mừng từ xa, chúng mình xin phép nhận tại đây.",
        faqTitle: "Thông tin nhanh",
        faqItems: [
            {
                question: "Có chỗ gửi xe tại địa điểm tiệc không?",
                answer: "Có. Khu vực gửi xe máy và ô tô nằm ngay trong khuôn viên, nhân viên sẽ hướng dẫn tại cổng chính.",
            },
            {
                question: "Gia đình có thể đưa trẻ em theo cùng không?",
                answer: "Hoàn toàn được. Chúng mình rất vui nếu cả gia đình có thể đến tham dự đầy đủ.",
            },
            {
                question: "Nên có mặt trước bao lâu?",
                answer: "Bạn có thể đến sớm khoảng 20 đến 30 phút để check-in, chụp ảnh và ổn định chỗ ngồi.",
            },
            {
                question: "Có cần mặc đúng theo bảng màu gợi ý không?",
                answer: "Không bắt buộc, nhưng nếu bạn chọn các tone màu gợi ý thì không gian buổi tiệc sẽ đồng điệu và lên ảnh đẹp hơn.",
            },
        ],
        footerMessage:
            "Cảm ơn bạn đã dành thời gian hiện diện trong ngày đặc biệt này. Sự có mặt của bạn sẽ là một phần ký ức đẹp mà chúng mình luôn nhớ.",
    },
};
