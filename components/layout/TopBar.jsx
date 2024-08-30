"use client";

import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Add, Person, Search } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

const TopBar = () => {
  const [ search, setSearch ] = useState("");
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="relative">
        <input
          type="text"
          className="search-bar"
          placeholder="Search posts, people, ..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Search
          className="search-icon"
          // onClick={() => router.push(`/search/posts/${search}`)}
        />
      </div>

      <button
        className="create-post-btn"
        // onClick={() => router.push("/create-post")}
      >
        <Add /> <p>Create A Post</p>
      </button>

      <div className="flex gap-4 md:hidden">
        <Link href="">
          <Person sx={{ fontSize: "35px", color: "white" }} />
        </Link>

        <UserButton
          appearance={{ baseTheme: dark }}
          afterSignOutUrl="/sign-in"
        />
      </div>
    </div>
  );
};

export default TopBar;
