

const FeaturedCard = () => {
    const cards = [
  {
    id: 1,
    title: "Instant Crypto Payments",
    text: "Spend your crypto directly at any POS terminal or online platform—BEPJET handles the conversion with best rates.",
    badge: "New",
    image: "/swap.png",
  },
  {
    id: 2,
    title: "Earn BEPPOINTS on Every Swipe",
    text: "Our powerful rewards engine lets you earn points that convert into tokens, NFTs, and partner perks.",
    badge: "Featured",
    image: "/optimise.png",
  },
  {
    id: 3,
    title: "Choose Your Card Tier",
    text: "From Jet Lite to Jet Black—each card offers exclusive limits, cashback, lounge access, and NFT airdrops.",
    badge: "Premium",
    image: "/opt.png",
  },
 
];
  return (
    <>
    <div className="bg-black text-white px-6 mt-10">
          <h2 className="text-4xl font-bold mb-2 text-center"><span className=" bg-[linear-gradient(to_right,_#6c6c70,_#f0f0f0)] bg-clip-text text-transparent">Unlock</span> the Future of Spending</h2>
          <p className="text-center text-sm text-[#6c6c70]">
            Use BEPJET to turn your crypto into everyday payments, rewards, and lifestyle benefits.
          </p>

        <div className="flex flex-col gap-8 mt-10">
          {cards.map((card) => (
             <div
              key={card.id}
              className="bg-zinc-900/50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-zinc-700 relative "
            >
                  <span className="text-xs bg-sky-300 font-semibold text-gray-900 py-1 px-4 rounded-full absolute right-5">
                  {card.badge}
                </span>
              <div className="my-11 ">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 object-contain  rounded-xl"
                />
              
              </div>
              <div className="text-xl font-semibold mb-2 text-white">
                {card.title}
              </div>
              <p className="text-sm text-[#6c6c70] leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      </>
  )
}

export default FeaturedCard