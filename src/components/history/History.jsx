import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import './History.scss'

const History = () => {

    const [notes, setNotes] = useState([])

    const checkNotes = () => {
        let ids = JSON.parse(localStorage.getItem('keys'))
        let keys = ids?.keys ?? []
        let tmpNotes = []
        keys.forEach((key)=>{
            tmpNotes.push(JSON.parse(localStorage.getItem(key)))
        })
        setNotes(tmpNotes)
    }

    useEffect(() => {
        checkNotes()
    },[])

    return (
        <div className="history-outer-container ocpy">
            <div className="history-inner-container ocpy flx cntr">
                <div className="history">
                    <div className='history-heading flx cntr'>History</div>
                    <div className='history-body ocpy rel'>
                        {notes.length 
                            ? (
                            <div className='ocpy flx col abs'>
                                {notes.map(note => {
                                    return <span className='history-item flx cntr' key={nanoid()}>{note}</span>
                                })}
                            </div>
                            )
                            : <div className='ocpy flx cntr'>No items here</div>
                        }
                    </div>
                    <div className='history-buttons grd ocpy'>
                        {notes.length ? <button onClick={()=>{
                            localStorage.clear()
                            checkNotes()
                        }}>Delete All</button> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History
