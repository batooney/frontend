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
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="mx-7 flex items-center">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
      <form className="flex flex-1 items-center space-x-2 border-gray-200 rounded-sm bg-gray-100 px-3 py-1">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Batooney"
        />
        <button type="submit" hidden />
      </form>
      <div className="text-gray-500 space-x-2 items-center mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />

        <hr className="h-10 border border-gray-100 " />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>

      {session ? (
        <div
          onClick={() => signIn()}
          className="hidden cursor-pointer items-center space-x-2 border-gray-100 p-2 lg:flex"
        >
          <div className="relative h-5 w-5 flex-shrink-0"></div>

          <p className="text-gray-400">Sign in</p>
        </div>
      ) : (
        <div
          onClick={() => signOut()}
          className="hidden cursor-pointer items-center space-x-2 border-gray-100 p-2 lg:flex"
        >
          <div className="relative h-5 w-5 flex-shrink-0"></div>

          <p className="text-gray-400">Sign out</p>
        </div>
      )}
    </div>
  );
}

export default Header;