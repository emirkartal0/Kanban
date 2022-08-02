import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import db from '../Firebase'
import AddBoard from './AddBoard'
import Board from './Board'
import Header from './Header'
import toast, { Toaster } from 'react-hot-toast';

function Home({ user }) {

    const [tempBoards, setTempBoards] = useState([])

    useEffect(() => {
        const unsub = onSnapshot(
            collection(db, `${user.uid}`),
            (snapShot) => {
                let list = [];
                snapShot.docs.forEach((doc) => {
                    list.push({ id: doc.boardId, ...doc.data() });
                })
                setTempBoards(list);
                toast.success('Successfully Process!')
            },
            (error) => {
                console.log(error);
            }
        );
        return () => {
            unsub();
        };
    }, [user])


    return (
        <div className='h-screen w-full flex flex-col'>
            <Header user={user} />
            <div className='flex-1 w-full overflow-x-auto scroll-smooth'>
                <div className='flex w-min-fit h-full bg-deep-purple-50'>
                    {
                        tempBoards.map((item) => (
                            <Board
                                key={item.boardId}
                                board={item}
                                boardId={item.boardId}
                                title={item.boardTitle}
                                cards={item.cards}
                                owner={item.owner}
                            />
                        ))
                    }
                    <div>
                        <AddBoard uid={user.uid} />
                        <Toaster />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home