import { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const[isOpen, setIsOpen] = useState(false)
  const toggleMenu = () =>{
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    if(!isOpen){
      document.body.style.overflow ="hidden";

    }
    
  else { 
    document.body.style.overflow = "auto";
  }

  }, [isOpen])
  return (
    <nav className="fixed right-0 top-0 z-30 p-4">
      <button onClick={toggleMenu} className="rounded-md p-2">
        {isOpen ? (
          <FaTimes className="h-6 w-6"/>
        ) : (
          <FaBars className="h-6 w-6"/>
        )} </button>
    </nav>
  )
}

export default Navbar
