import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { Fade } from 'react-reveal'

export const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <Fade left cascade>
        <div className="container contact-container">
          <div className="contact-options">
            <article className="contact-option">
              <MdOutlineEmail />
              <h4>Email</h4>
              <a
                href="https://mail.google.com/mail/?view=cm&source=mailto&to=david.elbaz.pro@gmail.com"
                target="_blank"
              >
                Send me an Email ( Gmail )
              </a>
              <div className="link-to-gmail">
                <a href="mailto:david.elbaz.pro@gmail.com" target="_blank">
                  Send me an Email ( others )
                </a>
              </div>
            </article>

            <article className="contact-option">
              <BsLinkedin color="#0173AB" className="contact-option-icon" />
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/davidelbaz1" target="_blank">
                Connect with me on LinkedIn
              </a>
            </article>

            <article className="contact-option">
              <BsTwitter color="#1B93E3" className="contact-option-icon" />
              <h4>Twitter</h4>
              <a
                href="https://twitter.com/messages/compose?recipient_id=1144874629"
                target="_blank"
              >
                Reach me on Twitter
              </a>
            </article>

            <article className="contact-option">
              <BsWhatsapp color="#34A747" className="contact-option-icon" />
              <h4>Whatsapp</h4>
              <a
                href="https://web.whatsapp.com/send?phone=+330767633565"
                target="_blank"
              >
                Reach me on WhatsApp
              </a>
            </article>
          </div>

          {/* <ContactForm /> */}
        </div>
      </Fade>
    </section>
  )
}
