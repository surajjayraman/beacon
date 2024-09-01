"use client";

import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const LeftSideBar = () => {
  const { user, isLoaded } = useUser();
  // console.log("from leftsidebar:", user);
  return (
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden 2xl:w-[350px] pr-20 custom-scrollbar">
      <Link href="/">
        <Image
          src="/assets/christmas.jpg"
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-light-1">
          <Link href={`/`}>
            <Image
              src="/assets/Andrew.jpg"
              alt="profile photo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
          <p className="text-small-bold">Little Lemon</p>
        </div>
        <div className="flex text-light-1 justify-between">
          <div className="flex flex-col items-center">
            <p className="text-base-bold">10</p>
            <p className="text-tiny-medium">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">40</p>
            <p className="text-tiny-medium">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">2</p>
            <p className="text-tiny-medium">Following</p>
          </div>
        </div>
      </div>
      <hr />
      <Menu />

      <hr />

      <div className="flex gap-4 items-center">
        <UserButton
          appearance={{ baseTheme: dark }}
          afterSignOutUrl="/sign-in"
        />
        <p className="text-light-1 text-body-bold">Manage Account</p>
      </div>
    </div>
  );
};

export default LeftSideBar;
