import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex sticky bottom-0 z-50 justify-center items-center bg-white space-x-2 px-4 py-2 shadow-sm h-10">
      <Link href="/about">
        <a>About</a>
      </Link>
      <hr className="h-8 border border-gray-100 " />
      <Link href="/policy/terms">
        <a>Terms and conditions</a>
      </Link>
      <hr className="h-8 border border-gray-100 " />
      <Link href="/policy/refund">
        <a>Refund and Return</a>
      </Link>
      <hr className="h-8 border border-gray-100 " />
      <Link href="/policy/privacy">
        <a>Privacy</a>
      </Link>
    </div>
  );
}

export default Footer;
