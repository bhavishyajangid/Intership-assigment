
import  { useRef, useState, useEffect } from 'react';
const scrollItems = [
  {
  id: 1,
  title: "Stake & Earn",
  text: "Earn passive income by staking your crypto directly on BEPJET. Let your assets grow while you hold.",
  badge: "Passive",
  image: "/img1.png",
  },
  {
  id: 2,
  title: "Auto Staking",
  text: "Enable automatic staking and compounding to maximize returns without manual effort.",
  badge: "Smart",
  image: "/img2.png",
  },
  {
  id: 3,
  title: "Flexible Lock",
  text: "Choose between flexible or fixed staking terms. Unlock anytime or stake long-term for higher rewards.",
  badge: "Flexible",
  image: "/img3.png",
  },
  {
  id: 4,
  title: "Multi-Token Staking",
  text: "Stake a variety of tokens including BEPJET, ETH, USDT, and more—all from one dashboard.",
  badge: "Diverse",
  image: "/img4.png",
  },
  {
  id: 5,
  title: "Tiered Rewards",
  text: "The more you stake, the more you earn. Unlock exclusive tiers with enhanced APY and perks.",
  badge: "Premium",
  image: "/img5.png",
  },
  {
  id: 6,
  title: "Secure Protocols",
  text: "All staking operations are secured by audited smart contracts, ensuring transparency and trust.",
  badge: "Secure",
  image: "/img6.png",
  }
  ];

const ScrollWithImage = () => {
    
     const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.clientWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  useEffect(() => {
    const ref = scrollRef.current;
    ref.addEventListener('scroll', handleScroll);
    return () => ref.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
     <div className="w-full mt-20 flex flex-col gap-5">
      {/* Image Section */}
      <div className="w-full h-96  ">
        <img
          src={scrollItems[activeIndex].image}
          alt="Dynamic"
          className="w-full h-full object-contain rounded-lg"
        />
           <hr className="h-[1.5px] w-full bg-gradient-to-r from-black via-gray-500   to-black border-0 transform scale-y-[0.5] mt-2" />
      </div>

      {/* Scrollable Section */}
      <div
        className="w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none mt-8"
        ref={scrollRef}
      >
        {scrollItems.map((item) => (
          <div
            key={item.id}
            className=" snap-start flex-shrink-0 px-5"
          >
             <div className="h-40 max-w-80 bg-[#1f1f1f]/35 text-white p-5 rounded-lg shadow-md ">
      <h1 className="text-2xl font-semibold">{item.title}</h1>
      <p className=" text-[#6c6c70] mt-3">{item.text}</p>
    </div>
          </div>
        ))}
      </div>

      {/* Indicator Line */}
      <div className="flex justify-center mb-5 gap-2">
        {scrollItems.map((_, idx) => (
          <div
            key={idx}
            className={`h-[1.5px] w-12 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-[#fff]' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>





 <div className=" text-white px-5 py-10 space-y-6 mt-10 ">
     <h1 className='text-[35px] text-[#fff] font-semibold'> <span className='bg-[linear-gradient(to_right,_#6c6c70,_#f0f0f0)] bg-clip-text text-transparent'>End-to-End </span> Private Key Integrity.</h1>

      <p className="text-[#6c6c70] text-lg font-semibold ">
      Advanced technology engineered for unmatched protection.
      </p>

<div className='flex flex-col gap-8 mt-10'>


      <div className="flex gap-3 ">
        <img className='w-16 h-14 ' src="/one.jpg" alt="img" />

        <p className="text-sm text-[#6c6c70] leading-relaxed">
        Each device <span className="font-semibold text-[#fff]"> creates a unique, non-recoverable.</span>. cryptographic key
        </p>
      </div>

      <div className="flex gap-3">
      <img className='w-16 h-14 ' src="/two.jpg" alt="img" />
        <p className="text-sm leading-relaxed text-[#6c6c70]">
        A secure channel is
          <span className="font-semibold text-[#fff]">  established to transmit your encrypted </span> credentials.
        </p>
      </div>

      <div className="flex  gap-3">
      <img className='w-16 scale-110 h-14 ml-2' src="/three.jpg" alt="img" />
        <p className="text-sm leading-relaxed text-[#6c6c70]">
        Keys remain solely on the chip, <span className="font-semibold text-[#fff]">with zero backups or cloud storage no other copies</span> exist across space and time.
        </p>
      </div>
      </div>
    </div>
<div className='w-full h-60 relative  mb-12'>
<hr className="h-[1.5px] w-full bg-gradient-to-r from-black via-gray-500  to-black border-0 transform scale-y-[0.5]" />
    <img className='w-full h-full' src="/stone.png" alt="" />
    <div className='w-full h-full  absolute bg-transparent top-0 flex flex-col justify-center items-center text-center '>
        <h1 className='text-3xl text-[#fff] font-semibold'>Zero Out Of 
          <br />
          2,000,000</h1>
        <p className='bg-[linear-gradient(to_right,_#6c6c70,_#f0f0f0)] bg-clip-text text-transparent '>cards hacked since creation</p>
       
    </div>
    <hr className="h-[1.5px] w-full bg-gradient-to-r from-black via-gray-500  to-black border-0 transform scale-y-[0.5]" />
</div>
</>
  )
}

export default ScrollWithImage