import React, { useState } from 'react'
import { Input, Button } from "@material-tailwind/react";
import { IoCloseOutline } from 'react-icons/io5';
import db from '../Firebase';
import { doc, updateDoc } from "firebase/firestore";

function AddCard({ boardId, cards, uid, titleB, board }) {
    const [show, setShow] = useState(false);

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();


    const updateCard = (e) => {
        e.preventDefault()
        let arr = [...cards]
        const card = {
            cardId: Date.now() + Math.random() * 2,
            title: title,
            description: description,
            date: date
        }
        arr.push(card)
        updateDoc(doc(db, `${uid}`, `${boardId}`), {
            cards: arr
        })
        setTitle('')
        setDescription('')
        setDate('')
        setShow(false)
    }


    return (
        <div>
            {
                show ?
                    (<form onSubmit={updateCard} className='flex flex-col gap-2'>
                        <div>
                            <Input value={title} onChange={(e) => setTitle(e.target.value)} label='Title' color='purple' />
                        </div>
                        <div>
                            <Input value={description} onChange={(e) => setDescription(e.target.value)} label='Description' color='purple' />
                        </div>
                        <div>
                            <Input value={date} onChange={(e) => setDate(e.target.value)} label='Date' color='purple' />
                        </div>
                        <div className='flex items-center justify-around'>
                            <Button type='submit' color='purple'>Add Card</Button>
                            <IoCloseOutline onClick={() => setShow(false)} className='w-9 h-9 cursor-pointer' />
                        </div>
                    </form>)
                    : <div>
                        <Button className='ml-20 mt-5 shadow-md w-36 h-10 bg-purple-500 hover:bg-purple-600 hover:shadow-inner' color='teal' onClick={() => setShow(true)} >Add Card</Button>
                    </div>
            }
        </div>
    )
}

export default AddCard