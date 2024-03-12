
// import { useRouter } from 'next/navigation'
import React from "react";
import './Button.css'
const Button = (props) => {
  // const router = useRouter()
  return (
    <div>
     <button  class="button4" role="button"><span class="text">{props.button_text}</span></button>
    </div>
  )
}

export default Button


















