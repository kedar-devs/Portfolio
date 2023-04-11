import React from 'react'
import {ReactComponent as Logo} from './../../assets/logo.svg'
import { Link,NavLink } from 'react-router-dom'

function Navbar() {
  return (
    
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-black">
  <div className="container flex flex-wrap items-center justify-around mx-auto">
    <Link href="https://flowbite.com/" className="flex items-center">
        <Logo/>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
        <li>
          <NavLink exact to='/'   
           className={({isActive})=>{
            return "block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white dark:hover:text-tint "+
             (isActive?'dark:text-tint underline':'dark:text-gray-400 no-underline')
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
          <NavLink exact to='/Github'   
          className={({isActive})=>{
            return 'block py-2 pl-3 pr-4  rounded hover:bg-gray-100 hover:text-tint md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-tint md:dark:hover:bg-transparent '+
            (isActive?'dark:text-tint underline':'dark:text-gray-400 no-underline')
            
            }}>Github</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar

//className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:hover:text-tint md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400  dark:hover:bg-gray-700  md:dark:hover:bg-transparent"