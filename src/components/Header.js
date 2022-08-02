import React from 'react'
import { auth } from '../Firebase';
import { signOut } from "firebase/auth";
import { AiFillCloseCircle } from 'react-icons/ai';


function Header({user}) {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex  justify-between h-24 inset-x-0 top-0 items-center text-3xl font-sans font-light bg-gradient-to-r from-purple-600 to-blue-500 text-white'>
                <span className='ml-10'>TEAM BOARD</span>
                <div className='flex gap-5 items-center'>
                    <span className='text-xl'>Kullanıcı: {user.displayName}</span>
                    <AiFillCloseCircle onClick={() => signOut(auth)} className='mr-16 w-10 h-10 cursor-pointer'>
                        EXIT
                    </AiFillCloseCircle>
                </div>
            </div>
        </div>
    )
}

export default Header