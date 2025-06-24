import { useState } from "react"

const AllCard = () => {
     const cards = [
        {
          miniImg: "minicardgold.png",
          fullImg: "public/cardgold.png",
        },
        {
          miniImg: "public/minicardau.png",
          fullImg: "public/cardau.png",
        },
    ]

    const [selectedImg , setSelectedImg] = useState(0)
  return (
    <>
   <div className='w-full p-5 relative flex flex-col gap-5'>
        <div className='px-3 py-1 bg-[#1f1f1f] w-fit rounded-md absolute right-8 '>
         <span className='bg-[linear-gradient(to_right,_#f8f32b,_#fff)] bg-clip-text text-transparent '>Limited Edition</span>
        </div>
        <img  src={cards[selectedImg].fullImg} alt="cards img" className='mt-10' />
        

        <div className='flex flex-col gap-3'>
            <h1 className='text-xl text-[#fff]'>Tangam Wallet</h1>
                <p className='text-xs text-[#6c6c70]'>Collection Sun Drop</p>
            <div>
                <div className='w-full relative overflow-x-scroll scrollbar-none flex gap-3 '>
                    {
                        cards.map((item , index) => (
                           <div className={`w-18 h-10 p-1 rounded-sm cursor-pointer ${selectedImg == index ? "border border-solid border-blue-400 " : ""}` } onClick={() => { setSelectedImg(index)}} >
       <img className=' w-full h-full' src={item.miniImg}alt="" />
    </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>


   {/* Guaranteed page */}

    <div className=" text-white w-full  mt-16   ">
    {/* Image section */}
    <div className="px-5">
    <img
      src="/man.jpg" // Replace with actual image URL or import
      alt="Man holding Bepjet card"
      className="w-full h-96 object-cover rounded-md "
    />
    </div>
    

    {/* Text Section */}
    <div className="p-6">
      <h2 className="text-4xl font-semibold bg-[linear-gradient(to_right,_#6c6c70,_#f0f0f0)] bg-clip-text text-transparent ">Guaranteed</h2>
      <h3 className="text-white text-2xl font-bold mb-4">for 25+ years</h3>
      <p className="text-sm text-[#6c6c70] font-medium mb-6">
        <span className="text-[#fff]"> Your Bepjet hardware wallet can last for at least 25 years with proper care.</span>
        Its monolithic design ensures the chip remains functional, even in extreme conditions.
      </p>
      
      {/* Button */}
      <button className="bg-[linear-gradient(to_right,_#66ccffb3,_#09f)] text-white text-lg px-5 py-2 font-semibold rounded-lg">
  Get Bepjet
</button>
    </div>
  </div>
    </>
  )
}

export default AllCard