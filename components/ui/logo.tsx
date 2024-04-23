import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <div style={{ cursor: 'pointer' }}>
        <Image
          width={40}
          height={40}
          src="https://res.cloudinary.com/di6go353l/image/upload/v1711152821/ogwp6p1cpjabzbm0n9dr.png"
          alt=""
        />
      </div>
    </Link>
  );
}
