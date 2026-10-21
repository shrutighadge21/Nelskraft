import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
}

export default function Logo({
  className = "",
  variant = "dark",
  showTagline = false
}: LogoProps) {
  const isDarkVariant = variant === "light"; // "light" means light text on dark background

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-95 ${className}`}
      aria-label="Nelskraft Refractory Pvt. Ltd. - Home"
    >
      <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 flex-shrink-0">
        <Image
          src={isDarkVariant ? "/images/logo-white.png" : "/images/logo-icon.png"}
          alt="Nelskraft Logo Emblem"
          fill
          sizes="(max-width: 640px) 36px, 44px"
          className="object-contain"
          priority
        />
      </div>

      <div className="flex flex-col justify-center">
        <span
          className={`font-sans font-extrabold tracking-[0.14em] text-sm sm:text-base md:text-lg leading-tight ${
            isDarkVariant ? "text-white" : "text-[#000d15]"
          }`}
        >
          NELSKRAFT
        </span>
        <span
          className={`font-sans font-semibold tracking-[0.16em] text-[7.5px] sm:text-[8.5px] md:text-[9px] uppercase leading-none mt-0.5 ${
            isDarkVariant ? "text-gray-300" : "text-[#4b5563]"
          }`}
        >
          REFRACTORY PVT. LTD.
        </span>

        {showTagline && (
          <span className="text-[10px] tracking-wider text-[#54a937] font-medium mt-1 uppercase">
            Building Durability, Enabling Sustainability.
          </span>
        )}
      </div>
    </Link>
  );
}
