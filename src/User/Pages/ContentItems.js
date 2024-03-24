import { Link } from 'react-router-dom'
import './ContentItems.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const Contents = [
    {
        userImage: './man1.webp',
        Name: 'Ajay Singh',
        userName: '@Prem Singh',
        likes: 10,
        image: 'sec.jpg'
    },
]

function ContentItems() {

    let [contentsDatabase, setContentsDatabase] = useState([])

    let dataBase = async () => {
        let response = await axios.get('http://localhost:8000/')
        setContentsDatabase([...Contents, ...response.data])
    }

    useEffect(() => {
        dataBase()
    }, [])

    async function itemdelete(id) {
        try {
            let deletedRes = await axios.delete(`http://localhost:8000/${id}`)
            if (deletedRes.data) {
                setContentsDatabase(contentsDatabase.filter(p => p._id !== id)
                );
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }

    return (
        <div>
            {
                contentsDatabase.map((item, id) => (
                    <div className="contentItemsDiv" key={id}>
                        <div className='userInfo'>
                            <div className='userImage'>
                                <img src='./man1.webp' alt='man' />
                            </div>
                            <div className='userName'>
                                <p>{item.Name}</p>
                                <p>{item.userName}</p>
                            </div>
                            <div className='like' onClick={() => itemdelete(item._id)}>
                                <div>{item.likes}</div>
                                <i className="fa-regular fa-thumbs-up"></i>
                            </div>
                        </div>
                        <div className='Image'>
                            <Link to={`/ProjectsDetailsPage/${id}`}><img src={item.image} alt='sec' /></Link>
                        </div>
                    </div>
                )
                )
            }
        </div >
    )
}

export default ContentItems
