import './FirstProject.css'

function FirstProject() {
    function adminButtonClicked(event) {
        event.target.classList.add('adminButtonClicked')
    }
    function adminButtonUp(event) {
        event.target.classList.remove('adminButtonClicked')
    }
    return (
        <div className='firstProject'>
            <div>
                <form>
                    <legend>Admin Form (First Project Information)</legend>
                    <table>
                        <tbody>
                            <tr>
                                <td><label>Enter Profile Name - </label></td>
                                <td><input type='text' /></td>
                            </tr>
                            <tr>
                                <td><label>Enter Profile Username - </label></td>
                                <td><input type='text' /></td>
                            </tr>
                            <tr>
                                <td><label>Enter Project Name - </label></td>
                                <td><input type='text' /></td>
                            </tr>
                            <tr>
                                <td><label>Enter Project Discription - </label></td>
                                <td><input type='text' /></td>
                            </tr>
                            <tr>
                                <td><label>Upload Profile Logo - </label></td>
                                <td><input type='file' accept="image/*" /></td>
                            </tr>
                            <tr>
                                <td><label>Upload Project Image - </label></td>
                                <td><input type='file' accept="image/*" /></td>
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
    )
}

export default FirstProject
