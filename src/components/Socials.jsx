import Instagram from '../images/insta.png'
import Email from  '../images/email.png'
import Phone from '../images/phone.png'


const Socials = () => {
    return (
        <div className="socials">
            <div className='social-icons'>
                <a href="#" target="_blank"><img src={Phone}/></a>
                <a href="#" target="_blank"><img src={Email}/></a>
                <a href="#" target="_blank"><img src={Instagram}/></a> 
            </div>
            <div className='social-info'>
                <h2 className='s-phone'>01063112192</h2>
                <h3 className='s-email'>rahma.i.rezk2002@gmail.com</h3>
                <h3 className='s-insta'>rahma_ibrahim2002</h3>
            </div>
        </div>
    )
}

export default Socials