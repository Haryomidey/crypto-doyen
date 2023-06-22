import React, {useState} from 'react';

const ScrollToTop = () => {

    // const [scrollToTop, setScrollToTop] = useState(0);

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
    <div onClick={handleScrollToTop} className="fixed bottom-3 right-3 bg-[#eb256777] hover:bg-[#EB2566] cursor-pointer w-10 h-10 z-10 rounded-xl flex items-center justify-center">
        <span className='material-symbols-outlined rotate-90 text-white'>chevron_left</span>
    </div>
  )
}

export default ScrollToTop;
