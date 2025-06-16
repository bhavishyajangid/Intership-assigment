import React from 'react'
import MiniCard from './MiniCard'
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { FiBox } from "react-icons/fi";
import { RiUser6Line } from "react-icons/ri";
const Allcards = () => {
    const cardData = [
  {
    title: "Balance",
    value: "0",
    icon: MdOutlineAccountBalanceWallet,
  },
  {
    title: "Active Direct",
    value: "0",
    icon: RiUser6Line,
  },
  {
    title: "Active Team",
    value: "0",
    icon: HiUserGroup,
  },
  {
    title: "Packages",
    value: "0",
    icon: FiBox,
  },
];
  return (
     <div className="grid md:grid-cols-4 gap-4 max-xl:grid-cols-2 ">
                {cardData.map((card, index) => (
              <MiniCard
                key={index}
                title={card.title}
                value={card.value}
                icon={card.icon}
              />
            ))}
              </div>
  )
}

export default Allcards