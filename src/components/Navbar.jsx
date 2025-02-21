import { NavLink } from "react-router-dom";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/find-tutor", label: "Find Tutor" },
  { href: "/become-tutor", label: "Become a Tutor" },
  { href: "/signup", label: "Signup/Login" },
  { href: "/contact", label: "Contact Us" },
  { href: "/faqs", label: "FAQs" },
];

const Navbar = () => {

  return (
    <header>
      <nav className="nav-wrapper">
        <img src="/Tutor Finder.png" alt="Tutor Finder Logo" className="logo" />
        <div className="nav-buttons">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              className={({ isActive }) => (isActive ? "active nav-btn " : "nav-btn")}
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
