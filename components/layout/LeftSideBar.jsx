import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeftSideBar = () => {
  return (
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden 2xl:w-[350px] pr-20 custom-scrollbar">
      <Link href="/">
        <Image src="/assets/christmas.jpg" alt="logo" width={100} height={100} />
      </Link>
    </div>
  );
};

export default LeftSideBar;
