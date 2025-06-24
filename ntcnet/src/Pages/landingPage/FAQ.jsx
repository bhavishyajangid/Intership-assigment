import React, { useState } from 'react';


const FAQ = () => {
  const faqs = [
    {
      question: "What is BEPJET and how does it work?",
      answer:
        "BEPJET is a crypto-based platform offering debit cards that let you spend your cryptocurrency directly at online and offline merchants. It connects seamlessly with wallets like MetaMask and Trust Wallet, allowing instant payments and rewards.",
    },
    {
      question: "Do I need KYC to use BEPJET cards?",
      answer:
        "No KYC is required. You can connect your decentralized wallet such as MetaMask or Trust Wallet to access all card features while maintaining complete control of your funds.",
    },
    {
      question: "What are the different card tiers and their benefits?",
      answer:
        "BEPJET offers Jet Lite, Jet Silver, and Jet Black cards. Each tier comes with increasing benefits such as higher spending limits, cashback rewards, NFT airdrops, airport lounge access, and more.",
    },
    {
      question: "How do BEPPOINTS work?",
      answer:
        "BEPPOINTS are loyalty rewards you earn by using your BEPJET card. Points can be redeemed for crypto tokens, NFTs, exclusive offers, or discounts from our partner platforms.",
    },
    {
      question: "Is BEPJET card accepted worldwide?",
      answer:
        "Yes, BEPJET cards are accepted globally anywhere major debit cards are accepted. The crypto is converted in real-time into fiat at competitive rates during the transaction.",
    },
    {
      question: "Can I top up my BEPJET card with fiat or only crypto?",
      answer:
        "BEPJET is designed for crypto-first users. You top up your card by transferring supported cryptocurrencies from your wallet. Fiat top-up options may be introduced in the future.",
    },
    {
      question: "Is there a mobile app for BEPJET?",
      answer:
        "No, currently there is no mobile app available. However, it may be launched in the future as the platform evolves",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white w-full px-8 mt-10 py-4">
      <h2 className="text-2xl font-bold mt-5">
        <span className="bg-[linear-gradient(to_right,_#6c6c70,_#f0f0f0)] bg-clip-text text-transparent">
          Frequently
        </span>{' '}
        Asked Questions
      </h2>

      <div className="mt-6 flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div key={index} className="w-full">
              <div
                className={`flex justify-between items-center cursor-pointer relative transition-colors duration-300 ${
                  isOpen ? 'text-white' : 'text-[#6c6c70]'
                }`}
                onClick={() => toggleDropdown(index)}
              >
                <h2 className="text-lg font-medium">{faq.question}</h2>
                <div className="flex justify-center items-center px-5">
        {/* Horizontal bar */}
        <div className="absolute w-[18px] h-[2px] bg-[#E0E4CC] transition-all duration-[250ms] ease-[cubic-bezier(0.17,0.67,0.09,0.97)]" />

        {/* Vertical bar */}
        <div
          className={`absolute w-[2px] h-[18px] bg-[#E0E4CC] transition-all duration-[250ms] ease-[cubic-bezier(0.17,0.67,0.09,0.97)] ${
            isOpen ? 'opacity-0 rotate-90' : 'opacity-100'
          }`}
        />
    </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                } capitalize text-sm font-semibold text-[#6c6c70]`}
              >
                <div className="py-2">
                  {faq.answer}
                  <hr className="h-[1px] w-full bg-gradient-to-r from-gray-200 to-black border-0 transform scale-y-[0.5] mt-5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
