import React from "react";
import Navbar from "@theme-original/Navbar";

const SCROLL_THRESHOLD = 10;

export default function NavbarWrapper(props) {
  React.useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      document.documentElement.classList.toggle(
        "navbar-scrolled",
        window.scrollY > SCROLL_THRESHOLD,
      );
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("navbar-scrolled");
    };
  }, []);

  return <Navbar {...props} />;
}
