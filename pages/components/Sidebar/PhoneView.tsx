import React from 'react'
import { AiOutlineTrophy } from 'react-icons/ai'
import { BiHomeAlt } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { FiSettings } from 'react-icons/fi'

const PhoneView = () => {
    return (
        <ul
            style={{ bottom: "0", width: "100%" }}
            className="flex md:hidden lg:hidden bg-white fixed justify-evenly p-3"
        >
            <li
                // onClick={() => takeTo("")}
                style={{ cursor: "pointer" }}
                className="text-lg font-bold-10000 flex flex-row items-center gap-1"
            >
                <BiHomeAlt size={30} />{" "}
            </li>
            <li
                // onClick={() => takeTo(`profile/${""}`)}
                style={{ cursor: "pointer" }}
                className="text-lg font-bold-10000 flex flex-row items-center gap-1"
            >
                <CgProfile size={30} />
            </li>
            <li
                // onClick={() => takeTo("challenge")}
                style={{ cursor: "pointer" }}
                className="text-lg font-bold-10000 flex flex-row items-center gap-1"
            >
                <AiOutlineTrophy size={30} />
            </li>
            <li
                // onClick={() => takeTo("settings")}
                style={{ cursor: "pointer" }}
                className="text-lg font-bold-10000 flex flex-row items-center gap-1"
            >
                <FiSettings size={30} />
            </li>
        </ul>
    )
}

export default PhoneView;