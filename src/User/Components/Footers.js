import './Footers.css'

function Footer() {
    let footerContents = [
        {
            Name: 'Ajay',
            Experience: '20'
        }
    ]
    return (
        <div className='footerDiv'>
            <div className='about'>
                <div className='hr'></div>
                <div>
                    <p>About Us</p>
                </div>
                <div className='hr'></div>
            </div>
            <div className='footerUserInfo'>
                <div>
                    <img src='./man2.png' />
                </div>
                <div>
                    <p>Mr.Indra Suthar</p>
                    <p>Experience - <span className='expYrs'>30Yrs +</span></p>
                </div>
            </div>
            <div className='aboutEnd'>
                <div className='hr'></div>
            </div>
        </div>
    )
}

export default Footer