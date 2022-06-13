import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex sticky bottom-0 z-50 justify-center py-2 px-4 space-x-4 h-10 bg-white border-gray-100 shadow-sm">
      <Link href="/about">
        <a>About</a>
      </Link>
      <hr className="h-8 border border-gray-100" />
      <Link href="/policy/terms">
        <a>Terms and conditions</a>
      </Link>
      <hr className="h-8 border border-gray-100" />
      <Link href="/policy/returns">
        <a>Returns and refunds</a>
      </Link>
      <hr className="h-8 border border-gray-100" />
      <Link href="/policy/privacy">
        <a>Privacy</a>
      </Link>
    </div>
  );
}

export default Footer;
