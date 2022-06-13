import type { NextPage } from "next";

const Refund: NextPage = () => {
  return (
    <div className="flex flex-col py-4 px-4 space-y-4 bg-gray-200">
      <div className="flex justify-center py-4 px-4 bg-white">
        <p className="text-xl">Returns and refunds policy</p>
      </div>
      <div className="flex-initial justify-center py-4 px-4 bg-white">
        <iframe src="/returns.pdf" width="100%" className="h-screen"></iframe>
      </div>
    </div>
  );
};

export default Refund;
