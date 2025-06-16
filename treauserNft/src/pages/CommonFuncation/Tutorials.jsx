import React from "react";

const videos = [
  {
    title: "How to sign up",
    src: "/videos/signup.mp4"
  },
  {
    title: "How to deposit",
    src: "/videos/deposit.mp4"
  },
  {
    title: "How to reserve NFT",
    src: "/videos/reserve-nft.mp4"
  },
  {
    title: "How to withdraw",
    src: "/videos/withdraw.mp4"
  },
  {
    title: "How to withdraw",
    src: "/videos/withdraw.mp4"
  }
];

const Tutorial = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4  overflow-x-hidden ">
      <div className="grid grid-cols-2 sm:grid-cols-2  max-sm:gap-3 gap-6 max-w-4xl mx-auto mt-5">
        {videos.map((video, index) => {
          return (
            
          <div className="w-full p-5 border border-gray-300 rounded-md">
              <video className="w-46 h-40 z-0 rounded-md" src="" controls>

              </video>
              <p className="text-center mt-4 text-base font-semibold text-gray-800">
                {video.title}
              </p>
          </div>
            
          );
        })}
      </div>

     
    </div>
  );
};

export default Tutorial
