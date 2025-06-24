import React from 'react'
import MiniCard from './MiniCard'
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { FiBox } from "react-icons/fi";
import { RiUser6Line } from "react-icons/ri";
const Allcards = () => {
    const cardData = [
  {
    title: "Cash",
    value: "0",
    icon: MdOutlineAccountBalanceWallet,
  },
  {
    title: "Crypto",
    value: "0",
    icon: RiUser6Line,
  },
  {
    title: "Spend In May",
    value: "0",
    icon: HiUserGroup,
  },
  {
    title: "Grow",
    value: "0",
    icon: FiBox,
    subTittle : "May 17 Next Payment"
  },
];
  return (
     <div className="grid  gap-4 grid-cols-2 grid-rows-2 ">
                {cardData.map((card, index) => (
              <MiniCard
                key={index}
                title={card.title}
                value={card.value}
                icon={card.icon}
                subTittle={card.subTittle}
              />
            ))}
              </div>
  )
}

export default Allcards