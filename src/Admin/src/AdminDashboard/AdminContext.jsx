import React, { createContext, useState } from 'react'
export const AdminContexts = createContext()
const AdminContext = (props) => {
    const [showCards, setshowCards] = useState("all")
    const [pending, setpending] = useState(0)
    const [rejected, setrejected] = useState(0)
    const [verfied, setverified] = useState(0)
    const [allcards, setallcards] = useState(0)
    const [searchComp, setsearchComp] = useState("")


    return (

        <div>
            <AdminContexts.Provider value={{ searchComp, setsearchComp, allcards, setallcards, showCards, setshowCards, pending, setpending, rejected, setrejected, verfied, setverified }}>
                {props.children}
            </AdminContexts.Provider>
        </div>
    )
}

export default AdminContext







