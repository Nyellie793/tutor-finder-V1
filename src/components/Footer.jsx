import {
  Mail,
   Phone,
   MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const expertise = [
    { id: "math", label: "Mathematics" },
    { id: "sciences", label: "Sciences" },
    { id: "languages", label: "Languages" },
    { id: "humanities", label: "Humanities" },
    { id: "programming", label: "Programming" },
    { id: "test-prep", label: "Test Preparation" },
    { id: "music", label: "Music & Arts" },
    { id: "specialneeds", label: "Special Needs" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/find-tutor", label: "Find Tutor" },
    { href: "/gigs", label: "Gigs" },
    { href: "/learner-dashboard", label: "Learner Dashboard" },
  ];

  const industryLinks = [
    { id: "k12", label: "K-12 Education" },
    { id: "college", label: "College" },
    { id: "professional", label: "Professional Exams" },
    { id: "homeschooling", label: "Homeschooling" },
    { id: "international", label: "International Students" },
    { id: "online", label: "Online Learning" },
  ];

  const supportLinks = [
    { id: "resources", label: "Learning Resources" },
    { id: "events", label: "Webinars & Events" },
    { id: "tutorials", label: "Tutorials" },
    { id: "help", label: "Help Center" },
    { id: "community", label: "Tutor Community" },
  ];

  // const contactUs =[
  //   {id: 'mail', label: 'tutorfinder@gmail.com'},
  //   {id: 'phone', label: '(+237)- 674-094-478'},
  //   {id: 'address', label: '237 Mayor Street Buea'}

  // ];

  return (
    <footer className="bg-white  py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Expertise Column */}
          <div>
            <h3 className="text-xl font-medium pb-2 mb-4 border-b border-teal-500">
              Expertise
            </h3>
            <ul className="space-y-2">
              {expertise.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xl font-medium pb-2 mb-4 border-b border-teal-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h3 className="text-xl font-medium pb-2 mb-4 border-b border-teal-500">
              Industries
            </h3>
            <ul className="space-y-2">
              {industryLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn & Support Column */}
          <div>
            <h3 className="text-xl font-medium pb-2 mb-4 border-b border-teal-500">
              Learn & Support
            </h3>
            <ul className="space-y-2">
              {supportLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Get in touch section*/}
        <div>
          <h3 className="text-xl font-medium pb-2 mb-4 mt-4 border-b border-teal-500">
            Get In Touch
          </h3>
          <div className="">
            <div className="flex gap-3 mb-3 hover:text-teal-400 transition-colors">
              <Mail className="" size={24} />
              <p>tutorfinder@gmail.com</p>
            </div>
            <div className="flex gap-3 mb-3 hover:text-teal-400 transition-colors">
              <Phone className="" size={24}></Phone>
              <p>(+237) 674-094-478</p>
            </div>
            <div className="flex gap-3 mb-3 hover:text-teal-400 transition-colors">
              <MapPin className="" size={24}></MapPin>
              <p>237 Mayor Street, Buea</p>
            </div>
          </div>
        </div>

        {/* Bottom Section with Contact Info and Social Media */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-semibold">TutorFinder</h2>
              <p className="text-gray-900 mt-2">
                © 2025 TutorFinder. All rights reserved.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Contact Details */}
              <div className="flex items-center mr-6">
                <Mail className="text-teal-400 mr-2" size={20} />
                <span className="text-gray-900">support@tutorfinder.com</span>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
