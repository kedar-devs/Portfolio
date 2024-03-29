import React,{useState} from 'react'
import {ReactComponent as Logo} from './../../assets/logo.svg'
import { Link,NavLink } from 'react-router-dom'

function Navbar() {
  const [navbar,setnavbar]=useState(false)
  return (
    
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-black">
  <div className="container flex flex-wrap items-center justify-around mx-auto">
    <Link href="https://flowbite.com/" className="flex items-center" to='/'>
        <Logo/>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={()=>{setnavbar(!navbar)}}>
      <span className="sr-only">Open main menu</span>
      {navbar? <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>:<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" 
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                       clip-rule="evenodd"></path>
                                       </svg>}
    </button>
    <div className={`w-full md:block md:w-auto ${navbar?'block':'hidden'}`} id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
        <li>
          <NavLink exact to='/'   
           className={({isActive})=>{
            return "block py-2 pl-3 pr-4  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white dark:hover:text-tint "+
             (isActive?'dark:text-tint underline ':'dark:text-gray-400 no-underline')
           }} aria-current="page">Home</NavLink>
        </li>
        <li>
          <NavLink exact to='/About'   
          className={({isActive})=>{
            return 'block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:hover:text-tint md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700  md:dark:hover:bg-transparent '+
            (isActive?'dark:text-tint underline':'dark:text-gray-400 no-underline')
          }}
          >About</NavLink>
        </li>
        <li>
          <NavLink exact to='/Project'   
          className={({isActive})=>{
            return 'block py-2 pl-3 pr-4  rounded hover:bg-gray-100 hover:text-tint md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   dark:hover:bg-gray-700 dark:hover:text-tint md:dark:hover:bg-transparent '+
            (isActive?'dark:text-tint underline':'dark:text-gray-400 no-underline')
          }}>Projects</NavLink>
        </li>
        <li>
          <NavLink exact to='/Experience'   
          className={({isActive})=>{
            return 'block py-2 pl-3 pr-4  rounded hover:bg-gray-100 hover:text-tint md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   dark:hover:bg-gray-700 dark:hover:text-tint md:dark:hover:bg-transparent '+
            (isActive?'dark:text-tint underline':'dark:text-gray-400 no-underline')
          }}>Experience</NavLink>
        </li>
        <li>
          <NavLink exact  
          className={({isActive})=>{
            return 'block py-2 pl-3 pr-4  rounded hover:bg-gray-100 hover:text-tint md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-tint md:dark:hover:bg-transparent '+
            (isActive?'dark:text-tint underline':'dark:text-gray-400 no-underline')
            
            }}><button onClick={()=>{window.location.href='https://github.com/kedar-devs'}}>Github</button></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar

//className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:hover:text-tint md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400  dark:hover:bg-gray-700  md:dark:hover:bg-transparent"