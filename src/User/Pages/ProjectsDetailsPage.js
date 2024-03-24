import { useParams } from 'react-router-dom'
import './ProjectsDetailsPage.css'
import { Contents } from './ContentItems'

function ProjectsDetailsPage() {
    let id = useParams().id
    return (
        <div>
            <div className='projectDetailUserInfo'>
                <div className='userImage'>
                    <img src={Contents[id].image} alt='user' />
                </div>
                <div className='userName'>
                    <p>{Contents[id].Name}</p>
                    <p>{Contents[id].userName}</p>
                </div>
                <div className='like'>
                    <div>{Contents[id].likes}</div>
                    <i className="fa-regular fa-thumbs-up"></i>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default ProjectsDetailsPage