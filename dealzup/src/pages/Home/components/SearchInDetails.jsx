import React from 'react'

const SearchInDetails = () => {
    let selectLable = [
        {
            img: '../../public/redirect.png',
            label: 'For Rent',
            icon: '../../public/downarrow.png'
        }, {
            img: '../../public/home.png',
            label: 'House',
            icon: '../../public/downarrow.png'
        }, {
            img: '../../public/locationpin.png',
            label: 'Indonesia',
            icon: '../../public/downarrow.png'
        },
    ]
    return (
        <div className='bg-[#FFFFFF] w-10/12  max-md:hidden rounded-[46px] py-3 px-5 lg:py-5 xl:py-6 lg:px-5 xl:px-8 absolute left-1/2 -translate-x-1/2 -bottom-13  shadow-[8px_12px_48.9px_3px_#00000026] z-50 flex justify-between items-center '>



            {/* // dropDown  */}

            {
                selectLable.map((item) => (
                    <div className='w-1/4 h-[50px] lg:h-[58px] border border-[#979797] rounded-[31px] bg-[#FFFFFF] px-3 lg:px-6  flex justify-between items-center '>
                        <div className='flex items-center gap-2 lg:gap-4 xl:gap-6'>

                            <img className='w-5 h-5' src={item.img} alt="icon" />
                            <span className='text-lg text-[#1E1E1E]'>{item.label}</span>
                        </div>
                        <img className='w-5 h-5 ' src={item.icon} alt="" />
                    </div>
                ))
            }

            <button className='w-1/5 xl:w-[194px] h-[58px] rounded-[31px] bg-[#1E3A8A] text-[#FFFFFF] font-semibold text-md lg:text-lg  py-[15px]  '>
Find Property
            </button>

        </div>
    )
}

export default SearchInDetails