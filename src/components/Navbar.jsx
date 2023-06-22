import React, {useState, useReducer} from 'react';
import { Link } from 'react-router-dom';

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
    <div className='w-full h-20 navbar_shadow px-5 flex items-center justify-between z-10 fixed bg-white top-0'>
      <h1 className='font-semibold desktop_large:w-[20%] w-[50%] tablet:text-2xl text-black'>CRYPO DOYEN</h1>
        <div className={`desktop_large:h-full desktop_large:static fixed left-0 top-[81px] h-screen w-full desktop_large:w-[80%] ${navMenu ? 'bg-[#e1dfdfb7]' : 'bg-transparent'} transition-[all] ease duration-300`}>
            <ul className={`bg-white scrollbar_hide overflow-auto desktop_large:overflow-visible justify-end desktop_large:h-full desktop_large:flex gap-x-6 px-2 desktop_large:pt-0 pt-4 w-full text-black desktop_large:max-w-[100%] max-w-[400px] nav_menu_shadow transition-[margin-left] ease duration-300 ${navMenu ? 'ml-0' : 'desktop_large:ml-0 ml-[-100%]'} h-full`}>
                <li className='desktop_large:h-full hover:bg-[#F2F2F2] transition-bg ease duration-300 cursor-pointer desktop_large:py-0 py-4 desktop_large:flex items-center px-3 justify-center desktop_large:relative'>
                    <div className='flex items-center h-full' onClick={() => handleClick('button1')}>
                        <p>I speak</p>
                        <span className="material-symbols-outlined text-[#67CEF3]">
                            expand_more
                        </span>
                    </div>
                    {state.button1 && <div className='desktop_large:absolute desktop_large:w-[300px] min-h-[100px] bg-[#F2F2F2] left-0 top-20'>
                        <ul className='w-full'>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Motivational business and communication speaker</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Keynotes and Workshops</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Event MC Compere</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Online Compere and Event Host</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Testimonials</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Speech Club</Link></li>
                        </ul>
                    </div>}
                </li>
                <li className='desktop_large:h-full hover:bg-[#F2F2F2] transition-bg ease duration-300 cursor-pointer desktop_large:py-0 py-4 desktop_large:flex items-center px-3 justify-center desktop_large:relative'>
                    <div className='flex items-center h-full' onClick={() => handleClick('button2')}>
                        <p>You speak</p>
                        <span className="material-symbols-outlined text-[#67CEF3] ">
                            expand_more
                        </span>
                    </div>
                    {state.button2 && <div className='desktop_large:absolute desktop_large:w-[300px] min-h-[100px] bg-[#F2F2F2] left-0 top-20'>
                        <ul className='w-full'>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Public Speaking Coaching</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Presentation Skills Training</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Individual Coaching</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Compere Coaching</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Media Training</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Online Training Programmes</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>In-house speech coach</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Testimonials</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Critique Club</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>In-house Critique Club</Link></li>
                        </ul>
                    </div>}
                </li>
                <li className='desktop_large:h-full hover:bg-[#F2F2F2] transition-bg ease duration-300 cursor-pointer desktop_large:py-0 py-4 desktop_large:flex items-center px-3 justify-center desktop_large:relative'>
                    <div className='flex items-center h-full' onClick={() => handleClick('button3')}>
                        <p>Critical Friend</p>
                        <span className="material-symbols-outlined text-[#67CEF3]">
                            expand_more
                        </span>
                    </div>
                    {state.button3 && <div className='desktop_large:absolute desktop_large:w-[300px] min-h-[100px] bg-[#F2F2F2] left-0 top-20'>
                        <ul className='w-full'>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Critical Friend</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Communications Review</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Communication Consultancy</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Business Communication Mentor</Link></li>
                        </ul>
                    </div>}
                </li>
                <li className='desktop_large:h-full hover:bg-[#F2F2F2] transition-bg ease duration-300 cursor-pointer desktop_large:py-0 py-4 desktop_large:flex items-center px-3 justify-center desktop_large:relative'>
                    <div className='flex items-center h-full' onClick={() => handleClick('button4')}>
                        <p>About You and Me</p>
                        <span className="material-symbols-outlined text-[#67CEF3]">
                            expand_more
                        </span>
                    </div>
                    {state.button4 && <div className='desktop_large:absolute desktop_large:w-[300px] min-h-[100px] bg-[#F2F2F2] left-0 top-20'>
                        <ul className='w-full'>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>About You and Me</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>About You</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>About Me</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Working Together</Link></li>
                        </ul>
                    </div>}
                </li>
                <li className='desktop_large:h-full hover:bg-[#F2F2F2] transition-bg ease duration-300 cursor-pointer desktop_large:py-0 py-4 desktop_large:flex items-center px-3 justify-center desktop_large:relative'>
                    <div className='flex items-center h-full' onClick={() => handleClick('button5')}>
                        <p>Resources</p>
                        <span className="material-symbols-outlined text-[#67CEF3]">
                            expand_more
                        </span>
                    </div>
                    {state.button5 && <div className='desktop_large:absolute desktop_large:w-[300px] min-h-[100px] bg-[#F2F2F2] left-0 top-20'>
                        <ul className='w-full'>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Media Resources</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Blog & Useful Stuff</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>See me in action</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Newsletter</Link></li>
                            <li className='w-full hover:bg-white px-3 py-2'><Link to='/'>Download Resources</Link></li>
                        </ul>
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
