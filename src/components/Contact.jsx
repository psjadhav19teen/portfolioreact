import { useRef } from "react";
import  emailjs from 'emailjs-com';

const Contact=()=>
    {
    const form=useRef();
    const sendEmail=(e)=>
    {
        e.preventDefault();
        emailjs.sendForm()
        .then(()=>{
        alert("Message Sent")
        },(error)=>{console.error(error.text)})
        e.target.reset()
    }
    return(
    <section className="container p-10">
        <div className="box">
            <h2 className="text-2xl font-bold mb-4">
                Contact Me
            </h2>
            <form ref={form} onSubmit={sendEmail}  className="flex flex-col gap-4 max-w-md">
                <input type="text" name="uname" placeholder="Your Name" required className="p-2 border rounded" />
                <input type="email" name="uemail" placeholder="Your Email" required className="p-2 border rounded" />
                <textarea name="message" rows="5" placeholder="Your Message"/>
                <button type="submit" className="bg-blue-500 text-white py-2">Send</button>

            </form>
        </div>
    </section>
)}

export default Contact;