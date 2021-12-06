import React from "react";

const navs = [
  { href: "/", title: "Main" },
  { href: "/gallery", title: "Gallery" },
  { href: "/projects", title: "projects" },
  { href: "/certification", title: "certification" },
  { href: "/contacts", title: "contacts" },
];

export default function Header() {
  return (
    <>
      <div className="header-color">
        <div className="header">
          <div className="header-logo">
            <img src="../images/footer.png" alt="noreferrer" />
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
