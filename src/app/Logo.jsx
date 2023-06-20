import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image src={`/mapato-logo-long.png`} width={`180`} height={`60`} />
    </Link>
  );
};

export default Logo;
