import "./ContactFormStyles.css";

function ContactForm() {
  var message = ''
  var url = `https://wa.me/263719509816?text=${JSON.stringify({message})}&app_absent=0`
  const getInputValue = (e) => {
    const msg = e.target.value
    let  message = msg
    console.log(message);
  }
  return (
    <>
      <div className="contactus">
        <h1>send message<i class="fa-brands fa-whatsapp"></i></h1>
        <div className="form">
        <textarea placeholder="Message..." rows="4" onChange={getInputValue}></textarea>
          <a href={url}>send</a>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
