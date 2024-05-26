import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {FaBarsStaggered, FaXmark} from "react-icons/fa6"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems=[
    {path: "/", title:"Start a Search"},
    {path: "/my-jobs", title:"My Jobs"},
    {path: "/salary", title:"Salary Estimate"},
    {path: "/post-job", title:"Post a Job"},
  ]
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <nav className='flex justify-between items-center py-6'>
        <a href="/" className='flex items-center gap-2 text-2xl'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path stroke="#306cfe" d="M6.25 33.333h4.167m-2.084 8.334V8.333a2.083 2.083 0 0 1 2.084-2.083h31.25a2.083 2.083 0 0 1 2.083 2.083v33.334a2.083 2.083 0 0 1-2.083 2.083h-31.25a2.083 2.083 0 0 1-2.084-2.083m-2.083-25h4.167zm0 8.333h4.167z"/><path stroke="#344054" d="M41.667 43.75h-6.25V6.25h6.25a2.083 2.083 0 0 1 2.083 2.083v33.334a2.083 2.083 0 0 1-2.083 2.083"/></g></svg>
        <span>JOB PORTAL</span></a>

        <ul className='hidden md:flex gap-12'>
          {
            navItems.map(({path,title})=>(
              <li key={path} className='text-base text-primary'>
                <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "active" : ""
                    }
                  >
                    {title}
                  </NavLink>
              </li>
            ))
          }
        </ul>

        <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
          <Link to="/login" className='py-2 px-5 border rounded'>Log in</Link>
          <Link to="/sign-up" className='py-2 px-5 border rounded bg-blue text-white'>Sign UP</Link>
        </div>

        <div className='md:hidden block'>
          <button onClick={handleMenuToggler}>
            {
              isMenuOpen? <FaXmark className='w-5 h-5 text-primary'/>:<FaBarsStaggered className='w-5 h-5 text-primary'/>
            }
          </button>
        </div>


      </nav>

      {/* <div className={'px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}'}>
        <ul>{
        navItems.map(({path,title})=>(
              <li key={path} className='text-base text-white'>
                <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "active" : ""
                    }
                  >
                    {title}
                  </NavLink>
              </li>
            ))}
        </ul>
      </div> */}
    </header>
  )
}

export default Navbar