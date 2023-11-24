import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Image src={"/images/medpal.svg"} alt="logo" width={103} height={34} />
  );
}
