import React, { useState } from 'react'
import './AddProjects.css'
import axios from 'axios';

function AddProjects() {
    const [EditProfileName, setEditProfileName] = useState('');
    const [EditProfileUsername, setEditProfileUsername] = useState('');

    let PostDataBase = async (AllData) => {
        let PostResponse = await axios.post('http://localhost:8000/', AllData)
        console.log(PostResponse.data)
    }

    function adminButtonClicked(event) {
        event.target.classList.add('adminButtonClicked')
    }

    function adminButtonUp(event) {
        event.target.classList.remove('adminButtonClicked')
    }

    function editProfiletName(event) {
        setEditProfileName(event.target.value)
    }

    function editProfileUsername(event) {
        setEditProfileUsername(event.target.value)
    }

    function EditProfileLogo1(event) {
        //    setEditProfileLogo(event.target.files[0])
    }

    function EditProjectImage1(event) {
        //     setEditProjectImage(event.target.files[0])
    }

    function AddProjectsSubmited(e) {
        e.preventDefault();
        const sendData1 = {
            Name: EditProfileName,
            userName: EditProfileUsername,
            // ProfileLogo: EditProfileLogo,
            // ProjectImage: EditProjectImage
        };
        PostDataBase(sendData1)
    }

    return (
        <div className='addProjectsDiv'>
            <div>
                <div>
                    <form onSubmit={AddProjectsSubmited}>
                        <legend>Admin Form (Projects Information)</legend>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label>Enter Profile Name - </label></td>
                                    <td><input id='projectName' type='text' value={EditProfileName} onChange={editProfiletName} /></td>
                                </tr>
                                <tr>
                                    <td><label>Enter Profile Username - </label></td>
                                    <td><input type='text' value={EditProfileUsername} onChange={editProfileUsername} /></td>
                                </tr>
                                <tr>
                                    <td><label>Upload Profile Logo - </label></td>
                                    <td><input type='file' accept="image/*" onChange={EditProfileLogo1} /></td>
                                </tr>
                                <tr>
                                    <td><label>Upload Project Image - </label></td>
                                    <td><input type='file' accept="image/*" onChange={EditProjectImage1} /></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='adminButtonFirst'>
                            <button id='adminBTN1' className='adminBTN1' type='submit' onMouseDown={adminButtonClicked} onMouseUp={adminButtonUp} >Submit</button>
                            <button id='adminBTN2' className='adminBTN2' type='reset' onMouseDown={adminButtonClicked} onMouseUp={adminButtonUp} >Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProjects;
