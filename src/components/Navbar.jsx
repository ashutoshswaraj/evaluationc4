import { Link } from "react-router-dom";
import{NavLink} from "react-router-dom"

const links = [
  {
    title: "Home",
    link: "/",
  },
  //   add the other link as well
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Products",
    link: "/products",
  },
];
export const Navbar = () => {
  return (
    //map through the link ad display it in header
    <ul style={{textDecoration:"none",listStyle:"none"}}>
       {links.map(({ title, link }, index) => {
        return (
          <NavLink
            key={index}
            to={link}
            style={() => ({
            
              padding: 10,
            })}
          >
            {title}
          </NavLink>
        );
      })}
      
    </ul>
  );
};
