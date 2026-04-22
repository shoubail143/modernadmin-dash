import React from 'react'
import {ChevronDown, Menu, Settings} from 'lucide-react'
import { Search } from 'lucide-react';
import {Filter} from 'lucide-react';
import {Plus} from 'lucide-react';
import {Sun} from 'lucide-react';
import {Bell} from 'lucide-react';






function Header () {
  return (
    <div className=' bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4'>
      <div className='flex items-center justify-between'>
        {/*Left sec */}
        <div className='flex items-center space-x-4'>
          <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 
          dark:hover:bg-slate-800 transition-colors'>
            <Menu className='w-5 h-5' />
           </button>
           <div className='hidden md:block'>
            <h1 className='text-xl  font-black text-slate-800 dark:text-white'>Dashboard</h1>
            <p className='font-black text-slate-800 dark:text-white'>
              Welcome! Here whats new </p>
           </div>
        </div>
        {/*center*/}
        <div className='flex-1 max-w-md mx-8'>
          <div className='relative'>
            <Search className='w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400' />
            <input type='text' placeholder='Search' className='w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder-slate-500 focus-outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'/>
           <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400
           hover::text-slate-600 dark:hover:text-slate-300">
             <Filter />
           </button>

          </div>
        </div>
        {/*right div */}
        <div className='flex items-cnter space-x-3 '>
          { /*Quick Action */} 
          <button className='hidden lg:flex items-center space-x-1 py-2 px-3 bg-linear-to-r from-blue-500 t0-purple-600 text-white rounded-xl hover:shadow-lg transition-0'>
           <Plus className='w-3 h-3'/>
           <span className='text-sm font-medium '>New</span>
          </button>
          {/*toggle */}
          <button className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors '>
            <Sun className='w-6 h-6' />
          </button>
          {/*Notification */}
          <button className='relative p-2.5 rounded-xl text-slate-600 dark: text-slate-300
          hover:hover-bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            <Bell className='w-5 h-6' />
            <span className='absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center'>3</span>
          </button>
          {/*Setting */}
          <button className='relative p-2.5 rounded-xl text-slate-600 dark: text-slate-300
          hover:hover-bg-slate-100 dark:hover:bg-slate-800 transition-colors' >
            <Settings className='w-5 h-5' />
          </button>
          {/* user profile */}
           <div className='flex items-center space-x-3 pl-3  border-l border-slate-200
           dark:border-slate-700'>
            <img src="" alt="user" className='w-5 h-5 rounded-full ring-2 ring-blue-500'
            />
            <div className='hidden md:block'>
              <p className='text-sm font-medium text-slate-500 dark:text-slate-400'>Shoubail</p>
              <p className='text-xs text-slate-500 dark:text-slate-400'>
                Administrator</p>
               </div>
            <ChevronDown  className='w-4 h-4 text-slate-400'/>
           </div>


          </div>

      </div>
    </div>
  )
}


export default Header;