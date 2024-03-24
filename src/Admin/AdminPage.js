import './AdminPage.css'
import { useEffect, useRef, useState } from 'react'
import AddProjects from './MainContentPages/AddProjects'
import FirstProject from './MainContentPages/FirstProject'
import Footer from './MainContentPages/Footer'

function AdminPage() {

    function sideBarFunction(event) {
        if (event.currentTarget.innerText == 'First Project') {
            refFirst.current.classList.add('sideBarButtonClicked')
            refSecond.current.classList.remove('sideBarButtonClicked')
            refThird.current.classList.remove('sideBarButtonClicked')
            setAdminside(refFirst)
        } else if (event.currentTarget.innerText == 'Add Projects') {
            refSecond.current.classList.add('sideBarButtonClicked')
            refFirst.current.classList.remove('sideBarButtonClicked')
            refThird.current.classList.remove('sideBarButtonClicked')
            setAdminside(refSecond)
        } else if (event.currentTarget.innerText == 'Footer') {
            refThird.current.classList.add('sideBarButtonClicked')
            refFirst.current.classList.remove('sideBarButtonClicked')
            refSecond.current.classList.remove('sideBarButtonClicked')
            setAdminside(refThird)
        }
    }

    let refFirst = useRef(null)
    let refSecond = useRef(null)
    let refThird = useRef(null)

    useEffect(() => {
        if (window.location.pathname === '/admin') {
            refFirst.current.classList.add('sideBarButtonClicked')
        }
    }, [window.location.pathname]
    )

    let [Adminside, setAdminside] = useState(refFirst)

    return (
        <div className='AdminPageDiv'>
            <div className='sideBarDiv'>
                <div id='sideBarFirst' className='addProjects' onClick={sideBarFunction} ref={refFirst} >
                    First Project
                </div>
                <div id='sideBarSecond' className='addProjects' onClick={sideBarFunction} ref={refSecond} >
                    Add Projects
                </div>
                <div id='sideBarThird' className='addProjects' onClick={sideBarFunction} ref={refThird}>
                    Footer
                </div>
            </div>
            <div className='adMainContent'>
                {Adminside == refFirst && <FirstProject />}
                {Adminside == refSecond && <AddProjects />}
                {Adminside == refThird && <Footer />}
            </div>
        </div>
    )
}

export default AdminPage