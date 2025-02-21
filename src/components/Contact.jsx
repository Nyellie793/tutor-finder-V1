import{Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram} from 'lucide-react';


const navItems = [
    {id: 'home', label: 'Home'},
    {id: 'about', label: 'About Us'},
    {id: 'find-tutor', label: 'Find Tutor'},
    {id: 'become-tutor', label: 'Become a Tutor'},
    {id: 'signup', label: 'Signup/Login'},
    {id: 'contact', label: 'Contact Us'},
    {id: 'faqs', label: 'FAQs'}
  ];

const Contact = () => {
  return (
    <section className="contact">
          <div className="contact-container">
            <div className="contact-grid">
              <div className="contact-info">
                <h3>Get In Touch</h3>
                <div className="contact-details">
                  <div className="contact-item">
                    <Mail className="contact-icon" size={24}/>
                    <p>tutorfinder@gmail.com</p>
                  </div>
                  <div className="contact-item">
                    <Phone className="contact-icon" size={24}></Phone>
                    <p>(+237) 674-094-478</p>
                  </div>
                  <div className="contact-item">
                    <MapPin className="contact-icon" size={24}></MapPin>
                    <p>237 Mayor Street, Buea</p>
                  </div>
                </div>
              </div>
              <div className="quick-links">
                <h3>Quick Links</h3>
                <ul>
                  {navItems.map(item => (
                    <li key={item.id}>
                      <a href={`#${item.id}`}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="social-links">
                <h3>Follow and Connect With Us</h3>
                <div className="social-icons">
                  <a href="#" className='social-icon'>
                    <Facebook size={32}/>
                  </a>
                  <a href="#" className='social-icon'>
                    <Twitter size={32} />
                  </a>
                  <a href="#" className='social-icon'>
                    <Linkedin size={32} />
                  </a>
                  <a href="#" className='social-icon'>
                    <Instagram size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

  )
}

export default Contact