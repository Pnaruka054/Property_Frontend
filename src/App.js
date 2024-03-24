import Header from "./User/Components/Header"
import MenuBar from "./User/Components/MenuBar"
import FirstProject from "./User/Pages/FirstProfect"
import Content from "./User/Pages/Content"
import Footer from "./User/Components/Footers"
import AdminPage from "./Admin/AdminPage"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import ProjectsDetailsPage from "./User/Pages/ProjectsDetailsPage"
import { useEffect, useState } from "react"

console.log(Header)

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
    useEffect(() => {
        setShowHF(location.pathname !== '/admin')
    }, [location])
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
            </Routes>
            {ShowHF && <Footer />}
        </div>
    )
}

export default App