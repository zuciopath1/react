import {useState} from 'react'
import Button from "./Button"
const Form = ()=>{
    const [value, setValue] = useState('');
    function handleSubmit (e){
        e.preventDefault();
        alert(`form is submited! Value: ${value}`)
    }
    return (
        <form className='form' onSubmit={(e)=>handleSubmit(e)} action="">
             <label className='lable' htmlFor='submit'>
                rooms
             <input className='input' type="text" placeholder='Rooms' value={value} onChange={(e) =>setValue(e.target.value)}/>
             </label>
            <Button />
        </form>
    )
}

export default Form