import React, { useEffect, useState } from "react";
import { Backdrop, Container, Sidebar } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export const BurgerMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setIsOpen(false);
    });

    window.addEventListener("click", (event) => {
      const origin = event.target.closest("a");
      if (origin) setIsOpen(false);
    });
  }, []);

  return (
    <Container>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <GiHamburgerMenu />
      </button>
      {isOpen && (
        <>
          <Backdrop onClick={() => setIsOpen(false)} />
          <Sidebar>
            <button className="close" onClick={() => setIsOpen(false)}>
              <AiOutlineClose />
            </button>
            {children}
          </Sidebar>
        </>
      )}
    </Container>
  );
};
