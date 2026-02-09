export type Theme = "luxury" | "pastel" | "traditional";

export const themes: Record<Theme, { primary: string; accent: string; bgImage: string; text: string; paperTexture: string }> = {
  luxury: {
    primary: "#2f2922",
    accent: "#b58a57",
    text: "#4d4338",
    bgImage: "url('/bg-luxury-v2.png')",
    paperTexture: "url('/bg-luxury-v2.png')",
  },
  pastel: {
    primary: "#5e4b35",
    accent: "#d48c95",
    text: "#5e4b35",
    bgImage: "url('/bg-pastel-v2.png')",
    paperTexture: "url('/bg-pastel-v2.png')",
  },
  traditional: {
    primary: "#8B0000",
    accent: "#D4AF37",
    text: "#5a0a0a",
    bgImage: "linear-gradient(to bottom right, #fffdf5, #fff0d4)",
    paperTexture: "linear-gradient(to bottom right, #fffdf5, #fff0d4)",
  },
};
