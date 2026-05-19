import {
  BookOpen,
  CakeSlice,
  Clapperboard,
  Dumbbell,
  Gamepad2,
  Mail,
  Moon,
  Rocket,
  Soup,
  Sparkles,
  WandSparkles,
  Wine,
} from "lucide-react";

export function CardSymbol({ symbol }: { symbol: string }) {
  const commonProps = {
    size: 86,
    strokeWidth: 1.25,
    "aria-hidden": true,
  };

  switch (symbol) {
    case "rocket":
      return <Rocket {...commonProps} />;
    case "sparkles":
      return <Sparkles {...commonProps} />;
    case "cake":
      return <CakeSlice {...commonProps} />;
    case "ramen":
      return <Soup {...commonProps} />;
    case "moon":
      return <Moon {...commonProps} />;
    case "book":
      return <BookOpen {...commonProps} />;
    case "dumbbell":
      return <Dumbbell {...commonProps} />;
    case "film":
      return <Clapperboard {...commonProps} />;
    case "wand":
      return <WandSparkles {...commonProps} />;
    case "gamepad":
      return <Gamepad2 {...commonProps} />;
    case "wine":
      return <Wine {...commonProps} />;
    case "letter":
    default:
      return <Mail {...commonProps} />;
  }
}
