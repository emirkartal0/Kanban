import React, { useState, Fragment } from 'react'
import { MdDelete, MdTitle } from 'react-icons/md';
import { BiComment } from 'react-icons/bi';
import { BsCalendar } from 'react-icons/bs';
import { doc, updateDoc } from "firebase/firestore";
import db from '../Firebase';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

function Card({ title, description, date, cards, index, owner, boardId }) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const deleteCard = () => {
        let array = [...cards]
        array.splice(index, 1)
        updateDoc(doc(db, `${owner}`, `${boardId}`), {
            cards: array
        })
        handleOpen()
    }
    /* const [tempCard, setTempCard] = useState({
        cardId: 'default',
        title: 'default',
        description: 'default',
        date: 'default'
    })
    //var arrayCard = cards
    const handleDragStart = (card, boardId) => {
        setTempCard({
            cardId: card[index].cardId,
            title: card[index].title,
            description: card[index].description,
            date: card[index].date
        })
         arrayCard.splice(index, 1)
        updateDoc(doc(db, `${owner}`, `${boardId}`), {
            cards: arrayCard
        }) 
        console.log(tempCard)
    }
    const handleDragEnter = () => {
        e.preventDefault()
        console.log(objCard)
        arrayCard.splice(index, 0, objCard)
        updateDoc(doc(db, `${owner}`, `${boardId}`), {
            cards: arrayCard
        })  
    }  */

    return (
        <div
            //draggable
            //onDragStart={() => handleDragStart(cards, boardId)}
            //onDragEnter={() => handleDragEnter()}
        >
            <div className='flex justify-between items-end p-2 bg-gray-200 rounded-2xl'>
                <div className='flex flex-col gap-1.5'>
                    <div className='flex items-center'>
                        <MdTitle className='w-6 h-6 text-indigo-400' />
                        {title}
                    </div>
                    <div className='flex items-center gap-1'>
                        <BiComment className='w-5 h-5 ml-0.5 text-indigo-400' />
                        {description}
                    </div>
                    <div className='flex items-center gap-2 ml-1'>
                        <BsCalendar className='text-indigo-400' />
                        {date}
                    </div>
                </div>
                <div>
                    <Fragment>
                        <MdDelete onClick={handleOpen} className='w-6 h-6 text-indigo-400 cursor-pointer' variant="gradient" />
                        <Dialog open={open} handler={handleOpen}>
                            <DialogHeader>Kartı silmek istediğinizden emin misiniz?</DialogHeader>
                            <DialogBody divider>
                                <div className='flex flex-col gap-1.5'>
                                    <div className='flex items-center'>
                                        <MdTitle className='w-6 h-6 text-indigo-400' />
                                        {title}
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <BiComment className='w-5 h-5 ml-0.5 text-indigo-400' />
                                        {description}
                                    </div>
                                    <div className='flex items-center gap-2 ml-1 '>
                                        <BsCalendar className='text-indigo-400' />
                                        {date}
                                    </div>
                                </div>
                            </DialogBody>
                            <DialogFooter>
                                <Button
                                    variant="text"
                                    color="red"
                                    onClick={handleOpen}
                                    className="mr-1"
                                >
                                    <span>Cancel</span>
                                </Button>
                                <Button variant="gradient" color="green" onClick={deleteCard}>
                                    <span>Confirm</span>
                                </Button>
                            </DialogFooter>
                        </Dialog>
                    </Fragment>
                </div>
            </div>
        </div >
    )
}

export default Card