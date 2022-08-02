import React, { useState } from 'react'
import db from '../Firebase';
import { doc, setDoc } from "firebase/firestore";
import { Input, Button } from "@material-tailwind/react";
import { IoCloseOutline } from 'react-icons/io5';

function AddBoard({ uid }) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');

    /* const addBoard22 = async (e) => {
        e.preventDefault();
        let bid = Date.now() + Math.random()
        await addDoc(collection(db, `${uid}`), {
            owner: uid,
            boardId: bid,
            boardTitle: title,
            cards: []
        })
        setTitle('')
    } */

    const addBoard = async (e) => {
        e.preventDefault();
        let bid = Date.now() + Math.random()
        await setDoc(doc(db,`${uid}`,`${bid}`),{
            owner: uid,
            boardId: bid,
            boardTitle: title,
            cards: []
        })
        setTitle('')
        setShow(false)
    }

    return (
        <div>
            {show ?
                (<form onSubmit={addBoard} className='mt-3 p-4'>
                    <Input
                        label='Board Title'
                        color='indigo'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className='flex items-center justify-around mt-2'>
                        <Button color='indigo' size='sm' type='submit' >Add Board</Button>
                        <IoCloseOutline onClick={() => setShow(false)} className='w-8 h-8 cursor-pointer' />
                    </div>
                </form>)
                : <Button onClick={() => setShow(true)} className='shadow-md p-2 m-7 w-48 h-10 bg-indigo-500 hover:bg-indigo-600 hover:shadow-inner'>Add Board</Button>
            }
        </div>
    )
}

export default AddBoard