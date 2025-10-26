import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <Image
          src="/mp-logo.svg"
          alt="Mercado Productivo"
          width={32}
          height={32}
          className="object-contain"
          priority
        />
      </div>
      <span className="font-bold text-lg hidden sm:block">Mercado Productivo</span>
    </Link>
  );
}
