import React, {useState, useReducer} from 'react';

const Navbar = () => {

    const [navMenu, setNavMenu] = useState(false);

    const handleNavMenu = (id) => {
        if (id === 'open') {
            setNavMenu(true)
        } else {
            setNavMenu(false);
        }
    }

    const initialState = {
        button1: false,
        button2: false,
        button3: false,
        button4: false,
        button5: false,
    };

    const reducer = (state, action) => {
        switch (action.type) {
        case 'TOGGLE_BUTTON':
        const { button } = action.payload;
        const newState = { ...initialState };

        if (state[button]) {
            newState[button] = false;
        } else {
            Object.keys(newState).forEach((key) => {
            newState[key] = key === button;
            });
        }

        return newState;
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleClick = (button) => {
        dispatch({ type: 'TOGGLE_BUTTON', payload: { button } });
    };

  return (
    <div className='w-full h-20 navbar_shadow px-5 flex items-center justify-between fixed bg-white top-0'>
      <h1 className='font-semibold w-[20%] tablet:text-2xl '>CRYPO DOYEN</h1>
        <div className={`desktop_large:h-full desktop_large:static fixed left-0 top-[81px] h-screen w-full desktop_large:w-[80%] ${navMenu ? 'bg-[#e1dfdfb7]' : 'bg-transparent'} transition-[all] ease duration-300`}>
            <ul className={`bg-white justify-end desktop_large:h-full desktop_large:flex gap-x-6 px-2 desktop_large:pt-0 pt-4 w-full desktop_large:max-w-[100%] max-w-[400px] nav_menu_shadow transition-[margin-left] ease duration-300 ${navMenu ? 'ml-0' : 'desktop_large:ml-0 ml-[-100%]'} h-full`}>
                <li className='desktop_large:h-full hover:bg-[#F2F2F2] transition-bg ease duration-300 cursor-pointer desktop_large:py-0 py-4 desktop_large:flex items-center px-3 justify-center desktop_large:relative'>
                    <div className='flex items-center h-full' onClick={() => handleClick('button1')}>
                        <p>I speak</p>
                        <span className="material-symbols-outlined text-[#67CEF3]">
                            expand_more
                        </span>
                    </div>
                    {state.button1 && <div className='desktop_large:absolute desktop_large:w-[300px] h-[300px] bg-[#F2F2F2] left-0 top-20'>
                        
                    </div>}
                </li>
                <li className='desktop_large:h-full hover:bg-[#F2F2F2] transition-bg ease duration-300 cursor-pointer desktop_large:py-0 py-4 desktop_large:flex items-center px-3 justify-center desktop_large:relative'>
                    <div className='flex items-center h-full' onClick={() => handleClick('button2')}>
                        <p>You speak</p>
                        <span className="material-symbols-outlined text-[#67CEF3] ">
                            expand_more
                        </span>
                    </div>
                    {state.button2 && <div className='desktop_large:absolute desktop_large:w-[300px] h-[300px] bg-[#F2F2F2] left-0 top-20'>
                        
                    </div>}
                </li>
                <li className='desktop_large:h-full hover:bg-[#F2F2F2] transition-bg ease duration-300 cursor-pointer desktop_large:py-0 py-4 desktop_large:flex items-center px-3 justify-center desktop_large:relative'>
                    <div className='flex items-center h-full' onClick={() => handleClick('button3')}>
                        <p>Critical Friend</p>
                        <span className="material-symbols-outlined text-[#67CEF3]">
                            expand_more
                        </span>
                    </div>
                    {state.button3 && <div className='desktop_large:absolute desktop_large:w-[300px] h-[300px] bg-[#F2F2F2] left-0 top-20'>
                        
                    </div>}
                </li>
                <li className='desktop_large:h-full hover:bg-[#F2F2F2] transition-bg ease duration-300 cursor-pointer desktop_large:py-0 py-4 desktop_large:flex items-center px-3 justify-center desktop_large:relative'>
                    <div className='flex items-center h-full' onClick={() => handleClick('button4')}>
                        <p>About You and Me</p>
                        <span className="material-symbols-outlined text-[#67CEF3]">
                            expand_more
                        </span>
                    </div>
                    {state.button4 && <div className='desktop_large:absolute desktop_large:w-[300px] h-[300px] bg-[#F2F2F2] left-0 top-20'>
                        
                    </div>}
                </li>
                <li className='desktop_large:h-full hover:bg-[#F2F2F2] transition-bg ease duration-300 cursor-pointer desktop_large:py-0 py-4 desktop_large:flex items-center px-3 justify-center desktop_large:relative'>
                    <div className='flex items-center h-full' onClick={() => handleClick('button5')}>
                        <p>Resources</p>
                        <span className="material-symbols-outlined text-[#67CEF3]">
                            expand_more
                        </span>
                    </div>
                    {state.button5 && <div className='desktop_large:absolute desktop_large:w-[300px] h-[300px] bg-[#F2F2F2] left-0 top-20'>
                        
                    </div>}
                </li>
                <li className='desktop_large:h-full h-[60px] flex items-center desktop_large:px-6 px-3 cursor-pointer bg-[#EF5487] text-white'>
                    <p>Speak to Me</p>
                </li>
            </ul>
        </div>
            <div className='desktop_large:hidden'>
                {!navMenu ? (
                    <span className="material-symbols-outlined cursor-pointer text-[#67CEF3]" onClick={() => {handleNavMenu('open')}}>
                        menu
                    </span>
                )
                :
                (
                    <span className="material-symbols-outlined cursor-pointer text-[#67CEF3]" onClick={() => {handleNavMenu('close')}}>
                    close
                    </span>
                )
            }
            </div>
    </div>
  )
}

export default Navbar;
