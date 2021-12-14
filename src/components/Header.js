import React from "react";

const navs = [
  { href: "/", title: "Main" },
  { href: "/gallery", title: "Gallery" },
  { href: "/projects", title: "projects" },
  { href: "/contact", title: "contact" },
];

export default function Header() {
  return (
    <>
      <div className="header-color">
        <div className="header">
          <div className="header-logo">
            <a href="/" rel="noreferrer">
              <img src="../images/footer.png" alt="noreferrer" />{" "}
            </a>
          </div>
          <div className="header-menu-btn">
            <i class="fas fa-bars fa-2x"></i>
          </div>

          <div className="header-navigation">
            {navs.map((nav, i) => (
              <a key={i} href={nav.href}>
                {nav.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
