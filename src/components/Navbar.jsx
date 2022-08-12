import React, { useEffect} from 'react'
import { AiOutlineMenu as MenuIcon } from 'react-icons/ai'
import { FiShoppingCart as CartIcon } from 'react-icons/fi'
import { BsChatLeft as ChatIcon} from 'react-icons/bs'
import { RiNotification3Line as NotificationIcon } from 'react-icons/ri'
import { MdKeyboardArrowDown as ArrowDownIcon } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { AvatarImage } from '../data/images'
import { NavButton, Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'


const Navbar = () => {
  const { isMenuActive, setIsMenuActive, isClicked, setIsClicked, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  }, [screenSize, setIsMenuActive]);
  

  function handleClick(navElementName) {
    setIsClicked((prev) => {
      let newState = {...prev};
      for (let key in newState) {
        newState[key] = false;
      }

      return {
        ...newState,
        [navElementName]: true
      }
    })
  }

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton 
        title={"Menu"} 
        customFunction={() => setIsMenuActive(prev => !prev)} 
        icon={<MenuIcon/>} 
        color="red" 
        dotColor="blue"
      />
      <div className='flex align-middle justify-center'>
        <NavButton 
          title={"Cart"} 
          customFunction={() => handleClick('cart')} 
          icon={<CartIcon/>} 
          color="blue" 
        />
        <NavButton 
          title={"Chat"} 
          customFunction={() => handleClick('chat')} 
          icon={<ChatIcon/>} 
          color="blue" 
          dotColor="#03C9D7"
        />
        <NavButton 
          title={"Notification"} 
          customFunction={() => handleClick('notification')} 
          icon={<NotificationIcon/>} 
          color="blue" 
          dotColor="#03C9D7"
        />
        <TooltipComponent content="Profile" position='BottomCenter'>
          <div 
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('profile')}>
            <img 
              src={AvatarImage} 
              alt="avatar" 
              className='rounded-full w-8 h-8'/>
              <p>
                <span className="text-gray-400 text-14">Hi, </span>
                <span className="text-gray-400 text-14 font-bold ml-1">Sergei</span>
              </p>
              <ArrowDownIcon className='text-gray-400 text-14'/>
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.profile && <UserProfile/>}
        {isClicked.notification && <Notification/>}
      </div>
    </div>
  )
}

export default Navbar
