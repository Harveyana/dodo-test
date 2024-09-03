import React from 'react'
import Image from "next/image";

 type props = {
    toggleSidebar:()=> void
 }

const Navbar = ({toggleSidebar}:props) => {
  return (
    <nav className='w-full fixed top-0 left-0 border-b border-[#EAECF0]'>
        <div className='flex w-full py-3 px-4 sm:px-6 bg-white'>

            <button onClick={()=>toggleSidebar()} aria-expanded="true" aria-controls="sidebar" className="p-2 text-gray-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 focus-none">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>

            <div className='w-fit ml-auto mr-4  flex items-center gap-x-6 sm:gap-x-10'>

                <form className="hidden lg:block lg:pl-3.5 mr-20">
                    <div className="relative mt-1 lg:w-80">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                        <svg className="w-5 h-5 text-[#667085]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" name="email" className="bg-white AeonikRegular border border-gray-300 text-gray-900 text-md rounded-lg outline-none focus-none block w-full pl-12 p-1.5 " placeholder="Search" />
                    </div>
                </form>

                <button onClick={()=>toggleSidebar()} aria-expanded="true" aria-controls="sidebar" className=" lg:hidden text-gray-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 focus-none">
                    <svg className="w-5 h-5 text-[#667085]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg>
                </button>


                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 11.3V7C13 4.6 11.3 2.6 9 2.1V1C9 0.5 8.5 0 8 0C7.5 0 7 0.5 7 1V2.1C4.7 2.6 3 4.6 3 7V11.4C1.9 11.9 0 13.3 0 16C0 16.5 0.5 17 1 17H5C5 18.6569 6.34315 20 8 20C9.65685 20 11 18.6569 11 17H15C15.5 17 16 16.5 16 16C16 13.3 14.1 11.9 13 11.3ZM2.2 15H13.9C13.363 13.7469 12.2651 13.2549 11.8255 13.0579C11.774 13.0348 11.7315 13.0157 11.7 13C11.3 12.8 11 12.4 11 12V7C11 5.4 9.7 4 8 4C6.3 4 5 5.4 5 7V12C5 12.4 4.7 12.8 4.4 13C4.31604 13.056 4.19244 13.1105 4.04491 13.1755C3.48954 13.4204 2.59506 13.8148 2.2 15ZM8 18C7.44771 18 7 17.5523 7 17H9C9 17.5523 8.55228 18 8 18Z" fill="#667085"/>
                </svg>

                <Image
                    className="relative"
                    src="/Avatar.svg"
                    width={30}
                    height={30}
                    alt="profile image"
                    priority
                />


            </div>

            

        </div>

    </nav>
  )
}

export default Navbar