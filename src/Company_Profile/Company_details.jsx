import React, { useState } from 'react'
import Sidebar from './Sidebar.jsx'
import Company_Info from './Company_Info.jsx'
import Logo from './Logo_Info.jsx'
import Nav from './Nav.jsx'

const Company_detail = () => {

  const [active, setActive] = useState("Company_info")
  const [C_data, setC_data] = useState()

  const handleContinue = (data) => {
    setC_data(data)
    setActive("Logo & hiring plans")
  }

  const handleFinish = (data) => {
    setC_data(data)
  }

  return (
    <div className="h-full w-full flex flex-col mx-auto">

      <Nav />

      <Sidebar active={active} />

      <main className="h-full w-1/2 flex flex-col mx-auto">
        <div className="w-full flex flex-wrap bg-blue-100 px-3 py-5 xl:px-4 ">

          {active === "Company_info" ? (
            <Company_Info onContinue={handleContinue} />
          ) : (
            <Logo
              onfinish={handleFinish}
              onback={() => setActive("Company_info")}
            />
          )}

        </div>
      </main>

    </div>
  )
}

export default Company_detail