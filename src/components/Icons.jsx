import {
  Sparkles,
  Heart,
  Package,
  Truck,
  Gift,
  PenLine,
  ArrowRight,
  MapPin,
  Clock,
  Navigation,
} from "lucide-react";

/*
  Clean, consistent line icons (lucide-react).
  Keeps the original <Icon name="..." /> API so every usage upgrades at once.
*/
const map = {
  sparkle: Sparkles,
  heart: Heart,
  box: Package,
  truck: Truck,
  truckFast: Truck,
  gift: Gift,
  pen: PenLine,
  arrow: ArrowRight,
  pin: MapPin,
  clock: Clock,
  directions: Navigation,
};

export function Icon({ name, className = "h-7 w-7", strokeWidth = 1.75 }) {
  const Cmp = map[name] || Gift;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
