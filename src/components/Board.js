import React, { useState, Fragment } from 'react'
import AddCard from './AddCard'
import Card from './Card'
import db from '../Firebase';
import { doc, deleteDoc } from "firebase/firestore";
import { MdDeleteSweep } from 'react-icons/md';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

function Board({ title, cards, boardId, owner, board }) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const deleteBoard = async () => {
        await deleteDoc(doc(db, `${owner}`, `${boardId}`))
    }

    return (
        <div className='w-80 mx-9 p-1  max-h-full h-full bg-deep-purple-100 rounded-lg'>
            <div className='flex mb-2 items-center' >
                <p className='flex flex-1 font-sans text-2xl ml-2'>{title}</p>
                <span className=' text-gray-600'>{cards.length}</span>
                <Fragment>
                    <MdDeleteSweep onClick={handleOpen} className='w-8 h-8 mx-2 cursor-pointer text-deep-purple-400' variant="gradient" />
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Sütünü silmek istediğinize emin misiniz?</DialogHeader>
                        <DialogBody divider className='flex flex-col gap-2'>
                            {
                                cards.map((card, i) => (
                                    <Card
                                        key={i}
                                        index={i}
                                        cards={cards}
                                        title={card.title}
                                        description={card.description}
                                        date={card.date}
                                        owner={owner}
                                        boardId={boardId}
                                    />))
                            }
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
                            <Button variant="gradient" color="green" onClick={deleteBoard}>
                                <span>Confirm</span>
                            </Button>
                        </DialogFooter>
                    </Dialog>
                </Fragment>
            </div>
            <div className='flex flex-col gap-2'>
                {
                    cards.map((card, i) => (
                        <Card
                            key={i}
                            index={i}
                            cards={cards}
                            title={card.title}
                            description={card.description}
                            date={card.date}
                            owner={owner}
                            boardId={boardId}
                        />))
                }
                <AddCard
                    titleB={title}
                    boardId={boardId}
                    cards={cards}
                    uid={owner}
                    board={board}
                />
            </div>
        </div>
    )
}

export default Board