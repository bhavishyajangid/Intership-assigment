import React from 'react'
import Profile from '../../../componenets/Profile'
import Balance from '../../../componenets/Balance'
import Table from '../../../componenets/Table'

const Home = () => {

  const tableData = [
    {

    tittle : "My team" , 
    value : [
      {val : 0 , name : "Community rewards" }, 
      {val : 0 , name : "Valid Members"}, 
      {val : 0 , name : "A enthusiast" }, 
      {val : 0 , name : "B+C enthusiasts" }, 
      ],

      icons : [
                {val : "enthu.webp" , name : "Community enthusiasts" } ,
                {val : "community.webp" , name : "Community contributions" }   ,
                {val : "contribute.webp" , name : "Community Orders" }   ,
                {val : "refferal.webp" , name : "Referral" }   ,
              ]
    },

    {

      tittle : "My orders" , 
      value : [
        {val : 0 , name : "Orders" }, 
        {val : 0 , name : "Processing"}, 
        {val : 0 , name : "Bought" }, 
        {val : 0 , name : "Sold" }, 
        ],
  
        icons : [
                  {val : "bid.webp", name : "My Bid" } ,
                  {val : "details.webp" , name : "Details" }   ,
                  {val : "deposite.webp" , name : "Deposit" }   ,
                  {val : "withdraw.webp" , name : "Withdraw" }   ,
                ]
      },

      {

        tittle : "Common Functions" , 
          icons : [
                    {val : "tutorails.webp", name : "Tutorials" } ,
                    {val : "setting.webp", name : "Settings" }   ,
                    {val : "mint.webp" , name : "Mint" }   ,
                    {val : "collection.webp" , name : "Collection" }   ,
                  ]
        },




  ]

  return (
    <div className='pb-10'>
    
     <Profile/>
     <Balance/>

     {
        tableData.map((item) => (
           <Table data={item}/>
        ))
     }

      </div>
  )
}

export default Home