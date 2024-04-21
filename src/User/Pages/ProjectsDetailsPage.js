import { useParams } from 'react-router-dom'
import './ProjectsDetailsPage.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function ProjectsDetailsPage() {
    const { id } = useParams()
    const [findedData, setFindedData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/get')
                setFindedData(response.data[id])
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, )

    if (!findedData) {
        return <div>Loading Please Wait...</div>
    }

    return (
        <div className='projectDetailsMain'>
            <div className='projectDetailUserInfo'>
                <div className='ProjectDetailsUserImage'>
                    <img src={findedData.ProfileLogo} alt='user' />
                </div>
                <div className='ProjectDetailsUserName'>
                    <p>{findedData.Name}</p>
                    <p>{findedData.userName}</p>
                </div>
                <div className='ProjectDetailslike'>
                    <div>{findedData.likes}</div>
                    <i className="fa-regular fa-thumbs-up"></i>
                </div>
            </div>
            <div className='ProjectDetailsPageInfo'>
                <h1>{findedData.projectTitle}</h1>
                <div className='ProjectDetailsImage'>
                    <img src={findedData.ProjectImage} alt='project' />
                </div>
                <p>{findedData.projectDiscription}</p>
            </div>
        </div>
    )
}

export default ProjectsDetailsPage