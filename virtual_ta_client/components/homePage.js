import Image from "next/image";

export default function HomePage() {
  return (
    <div id="img">
      <Image
        src="/utdallas-img.jpeg"
        alt="utdallas-background-image"
        layout="fill"
        width="500"
        height="500"
      ></Image>
    </div>
  );
}
