import Header from "./User/Components/Header"
import MenuBar from "./User/Components/MenuBar"
import FirstProject from "./User/Pages/FirstProject"
import Content from "./User/Pages/Content"
import Footer from "./User/Components/Footers"
import AdminPage from "./Admin/AdminPage"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import ProjectsDetailsPage from "./User/Pages/ProjectsDetailsPage"
import { useEffect, useState } from "react"
import FirstProjectsDetails from "./User/Pages/FirstProjectsDetails"
import EditAddedProject from "./Admin/MainContentPages/editAddedProject"
import EditFooter from "./Admin/MainContentPages/editFooter"

function App() {
    return (
        <div>
            <BrowserRouter>
                <Allcontent />
            </BrowserRouter>
        </div>
    )
}

function Allcontent() {
    let location = useLocation()
    let [ShowHF, setShowHF] = useState(true)
    let index = location.pathname.split('/')[3]

    useEffect(() => {
        let indexToShowHF = location.pathname === '/admin' ? location.pathname !== '/admin' : location.pathname === `/admin/editFooter/${index}` ? location.pathname !== `/admin/editFooter/${index}` : location.pathname !== `/admin/edit/${index}`
        setShowHF(indexToShowHF)
    }, [location, index])

    return (
        <div>
            {ShowHF && <Header />}
            <Routes>
                <Route path="/" element={
                    <div>
                        <FirstProject />
                        <MenuBar />
                        <Content />
                    </div>
                } />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/ProjectsDetailsPage/:id" element={<ProjectsDetailsPage />} />
                <Route path="/FirstProjectsDetails" element={<FirstProjectsDetails />} />
                <Route path="/admin/edit/:index" element={<EditAddedProject />} />
                <Route path="/admin/editFooter/:index" element={<EditFooter />} />
            </Routes>
            {ShowHF && <Footer />}
        </div>
    )
}

export default App