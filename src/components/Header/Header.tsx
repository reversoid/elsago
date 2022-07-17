import React, { useEffect } from "react";
import "./styles.scss";
export default function Header() {
  useEffect(() => {
    var header = $("#navbar"),
      scrollPrev = 0;

    $(window).on("scroll", function () {
      var scrolled = $(window).scrollTop() ?? 0;
      console.log("heu");

      if (scrolled > 100 && scrolled > scrollPrev) {
        header.addClass("navbar-out");
      } else {
        header.removeClass("navbar-out");
      }
      scrollPrev = scrolled;
    });
    return () => {header.off('scroll')};
  }, []);

  return (
    <header className="container">
      <nav className="navbar" id="navbar">
        <a href="">
          <div className="logo"></div>
        </a>
        {/* <button className="btn">Записаться</button> */}
      </nav>
    </header>
  );
}
