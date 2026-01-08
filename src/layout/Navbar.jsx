import React from 'react'
const navItems = [
  {
    navName: "Home",
    href: "#home"
  },
   {
    navName: "About",
    href: "#about"
  },
   {
    navName: "Skills",
    href: "#skills"
  },
   {
    navName: "Projects",
    href: "#projects"
  },
   {
    navName: "Testimonials",
    href: "#testimonials"
  },
]
const Navbar = () => {
  return (
    <div>
      <header>

        {/* developer name or logo */}
        <nav>
          <h1>Abdlazeez <span>.</span></h1>
          <div>
            {navItems.map((navItem, index) =>(
              <a key={index}>{navItem.navName}</a>
            ))}
        </div>
        
        </nav>

        {/* navigation menus */}
        
      </header>
    </div>
  )
}

export default Navbar
