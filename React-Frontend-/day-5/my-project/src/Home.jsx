import React from 'react'


function Home(props) {
  const arr =["Single User","50GB Storage","Unlimited Public Projects",
  "Community Access", "Unlimited Private Projects", "Dedicated Phone Support","Free Subdomain","Monthly Status Report"]

  return (
    <>
   <div className='home'> 
    <div>
    <h1>{props.home1}</h1>
      <h2>$0/month</h2>
      <ul>
        {
          arr.map((item) => (
            <li>{item}</li>
          ))
        }
      </ul>
      <button>BUTTON</button>
      </div>
    </div>
    </>
  )
}

export default Home