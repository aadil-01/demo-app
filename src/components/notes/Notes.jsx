import { useState } from 'react'
import { nanoid } from 'nanoid'
import './Notes.scss'

const Notes = () => {
    const [currentNotes, setCurrentNotes] = useState('')

    const onSave = () => {
        if(currentNotes !== ''){
            let ids = JSON.parse(localStorage.getItem('keys')) 
            let keys = ids?.keys ?? []
            let key = nanoid()
            localStorage.setItem(key, JSON.stringify(currentNotes))
            keys.push(key)
            localStorage.setItem('keys', JSON.stringify({keys}))
            setCurrentNotes('')
        } else alert('Empty notes')
    }

    return (
        <div className="notes-outer-container ocpy">
            <div className="notes-inner-container ocpy flx cntr">
                <div className="notes">
                    <div className='notes-heading flx cntr'>Notes App</div>
                    <div className='notes-body ocpy'>
                        <textarea className='notes-textarea ocpy' placeholder='Enter your notes here'
                            onChange={(e)=>setCurrentNotes(e.target.value)} value={currentNotes}>
                        </textarea>
                    </div>
                    <div className='notes-buttons grd col'>
                        <button onClick={onSave}>Save</button>
                        <button onClick={()=>{setCurrentNotes('')}}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes
