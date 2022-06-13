import React from "react";
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import {
  ChevronDownIcon,
  MenuIcon,
  HomeIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

function Header() {
  return (
    <div className="flex sticky top-0 z-50 py-2 px-4 bg-white shadow-sm">
      <Link href="/">
        <div className="flex items-center mx-7">
          <HomeIcon className="w-5 h-5" />
          <p className="hidden flex-1 ml-2 lg:inline">Home</p>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </Link>
      <form className="flex flex-1 items-center py-1 px-3 space-x-2 bg-gray-100 rounded-sm border-gray-200">
        <SearchIcon className="w-6 h-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Batooney"
        />
        <button type="submit" hidden />
      </form>
      <div className="hidden items-center mx-5 space-x-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />

        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="flex items-center ml-5 lg:hidden">
        <MenuIcon className="icon" />
      </div>

      <div className="hidden items-center p-2 space-x-2 border-gray-100 cursor-pointer lg:flex">
        <div className="relative flex-shrink-0 w-5 h-5"></div>

        <p className="text-gray-400">Sign in</p>
      </div>
    </div>
  );
}

export default Header;
