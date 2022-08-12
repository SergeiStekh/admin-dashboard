import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {SiShopware as ShopIcon} from 'react-icons/si'
import {MdOutlineCancel as CloseIcon} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import {links} from '../data/sidebarLinks'
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
    const {isMenuActive, setIsMenuActive, screenSize} = useStateContext();

    function handleSidebarClose() {
      if (isMenuActive && screenSize < 900) {
        setIsMenuActive(false);
      }
    }

    const activeLinkStyles = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2`;
    const regularLinkStyles = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2`;

    return (
        <div
            className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
            {isMenuActive && <> 
            <div className='flex justify-between items-center'>
                <Link to="/" onClick={handleSidebarClose}className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                  <ShopIcon/>
                  <span>Sales Dashboard</span>
                </Link>
                <TooltipComponent content={"Menu"} position={"BottomCenter"}>
                  <button type='button' onClick={() => setIsMenuActive(false)} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"><CloseIcon/></button>
                </TooltipComponent>
            </div> 
            <div className='mt-10'>
              {links.map(item => (
                <div key={item.title}>
                  <p className='text-gray-400 m-3 mt-3 uppercase'>
                    {item.title}
                  </p>
                  {item.links.map(link => (
                    <NavLink to={`/${link.name}`} key={link.name} onClick={handleSidebarClose} className={({isActive}) => isActive ? activeLinkStyles : regularLinkStyles}>
                      {link.icon} 
                      <span className='capitalize'>{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
            </>}
        </div>
    )
}

export default Sidebar