import type { NextPage } from "next";

const TermsAndConditions: NextPage = () => {
  return (
    <div className="flex flex-col bg-gray-200 space-y-4 px-4 py-4">
      <div className="flex justify-center bg-white px-4 py-4">
        <p className="text-xl">Terms and Conditions</p>
      </div>
      <div className="justify-center bg-white px-4 py-4 flex-initial">
        <iframe src="/terms.pdf" width="100%" className="h-screen"></iframe>
      </div>
    </div>
  );
};

export default TermsAndConditions;
