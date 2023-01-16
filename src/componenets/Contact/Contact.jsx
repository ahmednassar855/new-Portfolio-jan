import React, { useContext } from 'react'
import { SwitchThemeContext } from './../../Context/SwitchThemeStore';

const Contact = () => {
    let { switchTheme  } = useContext(SwitchThemeContext);
  return (
    <div id='contact' className={switchTheme ? "" : "bg-[#001b5e]"}>
        <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className={switchTheme ? 'py-4 text-4xl font-bold text-center text-[#001b5e]' :'py-4 text-4xl font-bold text-center text-stone-300'}>
        Contact
       </h1>
       <form action="" method='POST' encType='multipart/form-data' className={switchTheme ? "text-[#001b5e]" : "text-stone-300"}>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
                <label htmlFor="name" className='uppercase text-sm py-2'>Name</label>
                <input type="text" name='name'id='name' className='border-2 rounded-lg flex border-gray-300 '/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="phone" className='uppercase text-sm py-2'>Phone</label>
                <input type="text" name='phone' id='phone'  className='border-2 rounded-lg flex border-gray-300 '/>
            </div>
            <div className='flex flex-col py-2'>
                <label htmlFor="email" className='uppercase text-sm py-2'>Email</label>
                <input type="email" name='email' id='email'  className='border-2 rounded-lg p-3 flex border-gray-300 py-2'/>
            </div>
            <div className='flex flex-col py-2'>
                <label htmlFor="subject" className='uppercase text-sm py-2'>Subject</label>
                <input type="text" name='subject' id='subject'  className='border-2 rounded-lg p-3 flex border-gray-300 py-2'/>
            </div>
            <div className='flex flex-col col-span-2 py-2 w-full'>
                <label htmlFor="message" className='uppercase text-sm py-2'>message</label>
                <textarea rows='10' name='message' id='message'  className='border-2 rounded-lg flex border-gray-300 '></textarea>
            </div>
            <button className={switchTheme ? 'bg-[#001b5e] text-gray-100  mt-4 w-full p-4 rounded-lg  hover:bg-stone-300 hover:text-[#001b5e]  ease-in duration-700' : 'bg-stone-300 text-[#001b5e]  mt-4 w-full p-4 rounded-lg hover:bg-slate-600 hover:text-stone-300  ease-in duration-700'}>
                Send Message
            </button>
        </div>

       </form>
        </div>
       
    </div>
  )
}

export default Contact