import './FooterStyles.css'

function Footer(){
   return(
      <div className='footer'>
         <div className='left'>
            <h1>takumbohla</h1>
            <p>bringing you the perfect kitchen buddies</p>
         </div>
         <div className='center'>
            <p>copyright@2023</p>
         </div>
         <div className='right'>
            <h5>contact us</h5>
            <a href="https://wa.me/263732566006">B Mguni<i className="fa-brands fa-whatsapp"></i></a>
            <a href="https://wa.me/263719509816">T mupezeni<i className="fa-brands fa-whatsapp"></i></a>
         </div>
      </div>
   )
}

export default Footer