#!/bin/bash

# 🎊 Wedding Invitation QR Generator
# Sinh QR code từ URL thiệp cưới
#
# Yêu cầu: curl (có sẵn trên macOS)
#
# Cách sử dụng:
#   ./generate-qr.sh <URL> <output-file.png>
#
# Ví dụ:
#   ./generate-qr.sh https://tencuoi.vercel.app qr-thiep.png

URL=$1
OUTPUT=$2

if [ -z "$URL" ] || [ -z "$OUTPUT" ]; then
    echo "❌ Thiếu tham số!"
    echo ""
    echo "Cách sử dụng:"
    echo "  ./generate-qr.sh <URL> <output-file.png>"
    echo ""
    echo "Ví dụ:"
    echo "  ./generate-qr.sh https://tencuoi.vercel.app qr-thiep.png"
    exit 1
fi

# Encode URL
ENCODED_URL=$(echo -n "$URL" | jq -sRr @uri 2>/dev/null || echo "$URL" | sed 's/ /%20/g; s/:/%3A/g; s/\//%2F/g')

# Sinh QR bằng API miễn phí
QR_API="https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${ENCODED_URL}"

echo "🔄 Đang tạo QR code..."
curl -s -o "$OUTPUT" "$QR_API"

if [ -f "$OUTPUT" ]; then
    echo "✅ Đã tạo QR code: $OUTPUT"
    echo "📎 URL: $URL"
    
    # Mở file trên macOS
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open "$OUTPUT"
    fi
else
    echo "❌ Lỗi khi tạo QR code"
    exit 1
fi
