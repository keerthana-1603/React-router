import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

export const Header = () => {
  return (
    <div className="header-conatiner">
    <Link className="header-link" to="/">
      Careers
    </Link>
    <Link className="header-link" to="/Full-stack-developer">
      Full Stack Developer
    </Link>
    <Link className="header-link" to="/data-science">
      Data Science
    </Link>
    <Link className="header-link" to="/cyber-security">
      Cyber Security
    </Link>
  </div>
  );
}


// import React from 'react';
// import { Link } from 'react-router-dom';
// // import './Header.css'; // Import the CSS file

// const Header = () => {
//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/services">Services</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;