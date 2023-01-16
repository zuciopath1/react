import icon from '../icon/icon.png'
const button = [
  {
    text:"submit",
    className:"btn"
  }
]

function Button() {
  return (
    <div>
    {
      button.map((button,props)=>{
        return (
          <div key={props} className='rltv'>
             <button key={props} className={button.className} text={button.text} >
        </button>
        <img className='icon' src={icon} alt='icon'/>
          </div> 
        )
      })
    }
   </div>
  )
}

export default Button
