import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <div className="container mx-auto p-4 overflow-hidden">
      <Image
        className="rounded"
        src="/dannylines.jpg"
        layout="responsive"
        width={900}
        height={1600}
        alt="Random pic"
      />
    </div>
  );
}
