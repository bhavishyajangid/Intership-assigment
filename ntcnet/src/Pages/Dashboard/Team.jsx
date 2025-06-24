
import React from 'react'
import { Table } from '../../exports'

const Team = () => {
 const  data = [
  [
    { label: "USDT Address", value: "0xEe85FA7B2FA23423BA6..." },
    { label: "Sponsor", value: "0x1234...abcd" },
    { label: "Join Date", value: "2024-06-18" },
    { label: "Package", value: "Pro" },
    { label: "Total Business", value: "$1,500" }
  ],
  [
    { label: "USDT Address", value: "0x1234567890abcdef..." },
    { label: "Sponsor", value: "0x5678...efgh" },
    { label: "Join Date", value: "2024-05-10" },
    { label: "Package", value: "Basic" },
    { label: "Total Business", value: "$750" }
  ],[
    { label: "USDT Address", value: "0x1234567890abcdef..." },
    { label: "Sponsor", value: "0x5678...efgh" },
    { label: "Join Date", value: "2024-05-10" },
    { label: "Package", value: "Basic" },
    { label: "Total Business", value: "$750" }
  ],[
    { label: "USDT Address", value: "0x1234567890abcdef..." },
    { label: "Sponsor", value: "0x5678...efgh" },
    { label: "Join Date", value: "2024-05-10" },
    { label: "Package", value: "Basic" },
    { label: "Total Business", value: "$750" }
  ],[
    { label: "USDT Address", value: "0x1234567890abcdef..." },
    { label: "Sponsor", value: "0x5678...efgh" },
    { label: "Join Date", value: "2024-05-10" },
    { label: "Package", value: "Basic" },
    { label: "Total Business", value: "$750" }
  ],[
    { label: "USDT Address", value: "0x1234567890abcdef..." },
    { label: "Sponsor", value: "0x5678...efgh" },
    { label: "Join Date", value: "2024-05-10" },
    { label: "Package", value: "Basic" },
    { label: "Total Business", value: "$750" }
  ],[
    { label: "USDT Address", value: "0x1234567890abcdef..." },
    { label: "Sponsor", value: "0x5678...efgh" },
    { label: "Join Date", value: "2024-05-10" },
    { label: "Package", value: "Basic" },
    { label: "Total Business", value: "$750" }
  ],[
    { label: "USDT Address", value: "0x1234567890abcdef..." },
    { label: "Sponsor", value: "0x5678...efgh" },
    { label: "Join Date", value: "2024-05-10" },
    { label: "Package", value: "Basic" },
    { label: "Total Business", value: "$750" }
  ],[
    { label: "USDT Address", value: "0x1234567890abcdef..." },
    { label: "Sponsor", value: "0x5678...efgh" },
    { label: "Join Date", value: "2024-05-10" },
    { label: "Package", value: "Basic" },
    { label: "Total Business", value: "$750" }
  ],
]

  const option = ["usdt", "sponsor", "joinDate", "package", "business"];
  return (
   <Table data={data} title="My Team" subHeading="View your team structure and performance" option={option}/>
  )
}

export default Team