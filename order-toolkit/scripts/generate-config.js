#!/usr/bin/env node

/**
 * 🎊 Wedding Invitation - Config Generator
 * Sinh config.json từ dữ liệu form
 * 
 * Cách sử dụng:
 * 1. Export Google Form responses ra file CSV
 * 2. Chạy: node generate-config.js input.csv output.json
 */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");

// Dữ liệu mẫu - Thay đổi theo form response của bạn
const sampleData = {
    // Thông tin cô dâu chú rể
    groomFullName: "Đoàn Phương Trình",
    groomShortName: "Phương Trình",
    groomDescription: "Chàng kỹ sư yêu công nghệ",
    brideFullName: "Nguyễn Thị Quỳnh Trâm",
    brideShortName: "Quỳnh Trâm",
    brideDescription: "Cô gái dịu dàng, yêu cái đẹp",

    // Ngày cưới
    weddingDate: "2026-04-10",
    weddingTime: "10:00",

    // Sự kiện
    groomCeremonyTime: "08:00 - 10:00",
    groomCeremonyAddress: "Số 123, Đường ABC, Quận 1, TP.HCM",
    groomCeremonyMapLink: "https://maps.google.com",

    brideCeremonyTime: "11:00 - 12:00",
    brideCeremonyAddress: "Số 456, Đường XYZ, Quận 3, TP.HCM",
    brideCeremonyMapLink: "https://maps.google.com",

    receptionTime: "17:00 - 21:00",
    receptionAddress: "Nhà hàng Diamond Palace, Quận 7, TP.HCM",
    receptionMapLink: "https://maps.google.com",

    // Theme
    theme: "luxury", // luxury | pastel | traditional

    // Ngân hàng
    groomBankName: "Vietcombank",
    groomAccountNumber: "1234567890",
    groomAccountName: "DOAN PHUONG TRINH",

    brideBankName: "Techcombank",
    brideAccountNumber: "0987654321",
    brideAccountName: "NGUYEN THI QUYNH TRAM",

    // Album ảnh (URLs sau khi upload)
    galleryImages: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80",
        "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
    ],

    // Love Story
    loveStory: [
        { date: "2022", title: "Lần Đầu Gặp Gỡ", description: "Chúng mình gặp nhau..." },
        { date: "2023", title: "Yêu Nhau", description: "Tình yêu nảy nở..." },
        { date: "2024", title: "Cầu Hôn", description: "Anh đã cầu hôn em..." },
    ]
};

function generateConfig(data) {
    const formattedDate = data.weddingDate.split('-').reverse().join('/');

    return {
        meta: {
            title: `Thiệp Cưới | ${data.groomShortName} & ${data.brideShortName}`,
            description: "Trân trọng kính mời bạn đến dự đám cưới của chúng mình",
            themeColor: "#2D3E33",
            theme: data.theme,
            musicUrl: "/music/wedding-song.mp3",
            seoKeywords: `wedding, invitation, thiệp cưới, ${data.groomShortName.toLowerCase()}, ${data.brideShortName.toLowerCase()}`
        },
        couple: {
            groom: {
                name: data.groomFullName,
                shortName: data.groomShortName,
                image: "/couple-photo.png",
                description: data.groomDescription
            },
            bride: {
                name: data.brideFullName,
                shortName: data.brideShortName,
                image: "/couple-photo.png",
                description: data.brideDescription
            },
            coverImage: "/couple-photo.png"
        },
        quotes: [
            {
                content: "Tình yêu không nhìn bằng mắt mà bằng trái tim.",
                author: "William Shakespeare"
            },
            {
                content: "Yêu không chỉ là nhìn nhau, mà là cùng nhau nhìn về một hướng.",
                author: "Antoine de Saint-Exupéry"
            }
        ],
        weddingDate: `${data.weddingDate}T${data.weddingTime}:00`,
        venue: {
            mapEmbedUrl: data.receptionMapLink.replace('/maps/', '/maps/embed?pb=')
        },
        events: [
            {
                title: "Lễ Cưới Nhà Trai",
                icon: "🏠",
                time: data.groomCeremonyTime,
                date: formattedDate,
                location: data.groomCeremonyAddress,
                mapLink: data.groomCeremonyMapLink
            },
            {
                title: "Lễ Cưới Nhà Gái",
                icon: "🏡",
                time: data.brideCeremonyTime,
                date: formattedDate,
                location: data.brideCeremonyAddress,
                mapLink: data.brideCeremonyMapLink
            },
            {
                title: "Tiệc Cưới",
                icon: "🎊",
                time: data.receptionTime,
                date: formattedDate,
                location: data.receptionAddress,
                mapLink: data.receptionMapLink
            }
        ],
        gallery: data.galleryImages.map((src, index) => ({
            id: index + 1,
            src: src,
            alt: `Ảnh cưới ${index + 1}`
        })),
        guestbook: {
            initialMessages: []
        },
        loveStory: [
            ...data.loveStory.map(story => ({
                date: story.date,
                title: story.title,
                description: story.description,
                image: "/couple-photo.png"
            })),
            {
                date: formattedDate,
                title: "Về Chung Một Nhà",
                description: "Chúng mình chính thức trở thành vợ chồng, cùng nhau xây dựng tổ ấm hạnh phúc.",
                image: "/couple-photo.png"
            }
        ],
        dressCode: {
            description: "Để buổi tiệc thêm phần trang trọng và lên hình thật đẹp, mong quý khách vui lòng diện trang phục theo tone màu chủ đạo nhé!",
            note: "Xin vui lòng tránh trang phục màu trắng nguyên bộ.",
            palette: [
                { color: "#E5D4C0", name: "Beige" },
                { color: "#C9A87C", name: "Gold" },
                { color: "#2D3E33", name: "Dark Green" },
                { color: "#8B5E3C", name: "Brown" }
            ]
        },
        bankInfo: [
            {
                id: "groom",
                bankName: data.groomBankName,
                accountNumber: data.groomAccountNumber,
                accountName: data.groomAccountName,
                branch: "CN Hồ Chí Minh",
                qrImage: "/qr-code-placeholder.png",
                template: "compact"
            },
            {
                id: "bride",
                bankName: data.brideBankName,
                accountNumber: data.brideAccountNumber,
                accountName: data.brideAccountName,
                branch: "CN Hồ Chí Minh",
                qrImage: "/qr-code-placeholder.png",
                template: "compact"
            }
        ]
    };
}

// Main
function main() {
    const args = process.argv.slice(2);

    if (args.includes('--demo')) {
        // Chạy demo với dữ liệu mẫu
        const config = generateConfig(sampleData);
        const output = JSON.stringify(config, null, 4);

        if (args[1]) {
            fs.writeFileSync(args[1], output);
            console.log(`✅ Đã tạo config tại: ${args[1]}`);
        } else {
            console.log(output);
        }
    } else {
        console.log(`
🎊 Wedding Config Generator

Cách sử dụng:
  node generate-config.js --demo [output.json]    Tạo config từ dữ liệu mẫu
  
Để tùy chỉnh:
  1. Mở file này
  2. Chỉnh sửa object 'sampleData' với thông tin khách hàng
  3. Chạy lại script
        `);
    }
}

main();
