export type Theme = "luxury" | "pastel" | "traditional";

export const themes: Record<Theme, { primary: string; accent: string; background: string; bgImage: string; text: string; paperTexture: string }> = {
  luxury: {
    primary: "#2f2922",
    accent: "#b58a57",
    background: "#f7f1e7",
    text: "#4d4338",
    bgImage:
      "radial-gradient(circle at 12% 12%, rgba(181, 138, 87, 0.22), transparent 30%), radial-gradient(circle at 84% 10%, rgba(47, 41, 34, 0.08), transparent 28%), linear-gradient(180deg, #fcf7f0 0%, #f7efe3 58%, #f4e7d8 100%)",
    paperTexture:
      "radial-gradient(circle at 12% 12%, rgba(181, 138, 87, 0.22), transparent 30%), radial-gradient(circle at 84% 10%, rgba(47, 41, 34, 0.08), transparent 28%), linear-gradient(180deg, #fcf7f0 0%, #f7efe3 58%, #f4e7d8 100%)",
  },
  pastel: {
    primary: "#5e4b35",
    accent: "#d48c95",
    background: "#faf1ef",
    text: "#5e4b35",
    bgImage:
      "radial-gradient(circle at 8% 10%, rgba(212, 140, 149, 0.22), transparent 32%), radial-gradient(circle at 82% 14%, rgba(94, 75, 53, 0.08), transparent 28%), linear-gradient(180deg, #fff8f6 0%, #fcefee 56%, #f8e7e7 100%)",
    paperTexture:
      "radial-gradient(circle at 8% 10%, rgba(212, 140, 149, 0.22), transparent 32%), radial-gradient(circle at 82% 14%, rgba(94, 75, 53, 0.08), transparent 28%), linear-gradient(180deg, #fff8f6 0%, #fcefee 56%, #f8e7e7 100%)",
  },
  traditional: {
    primary: "#8B0000",
    accent: "#D4AF37",
    background: "#fff9ef",
    text: "#5a0a0a",
    bgImage:
      "radial-gradient(circle at 10% 8%, rgba(212, 175, 55, 0.2), transparent 28%), radial-gradient(circle at 88% 10%, rgba(139, 0, 0, 0.08), transparent 28%), linear-gradient(180deg, #fffdf5 0%, #fff5e1 58%, #fff0d4 100%)",
    paperTexture:
      "radial-gradient(circle at 10% 8%, rgba(212, 175, 55, 0.2), transparent 28%), radial-gradient(circle at 88% 10%, rgba(139, 0, 0, 0.08), transparent 28%), linear-gradient(180deg, #fffdf5 0%, #fff5e1 58%, #fff0d4 100%)",
  },
};
