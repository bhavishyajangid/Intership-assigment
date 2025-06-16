export default function Referral() {
  return (
    <div className="bg-[#1C1F26] rounded-2xl p-5 shadow-md">
      <h2 className="text-white text-lg font-bold mb-2">Referral Link</h2>
      <hr className="border-[#00D1B2] w-20 mb-3" />
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <p className="text-sm break-words">
          https://ntcnet.biz?refer=0xEe58d5471B85f1A60aB5BdcCAB3b5171E03BA6
        </p>
        <button className="border border-[#00D1B2] px-3 py-1 rounded hover:bg-[#00D1B2] hover:text-black">
          Copy
        </button>
      </div>
    </div>
  );
}