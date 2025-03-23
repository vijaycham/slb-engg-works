import { Link } from "react-scroll";

const navItems = ["home", "about", "services", "machines", "contact"];
const NavLinks = ({ onClick }) => { 
  return (
    <nav className="flex justify-center gap-6">
      {navItems.map((section) => {
        return (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-blue-600 transition"
            onClick={onClick}
          >
            {section.charAt(0).toUpperCase()}
            {section.slice(1)}
          </Link>
        );
      })}
    </nav>
  );

};
export default NavLinks;