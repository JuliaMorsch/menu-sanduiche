import React, { useState } from 'react';
import './Coluna';
import Item from '../itens/Item';

const Hamburger = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const itens = [
    { title: "Pão",
      link: "/teste"
    },
    { title: "Alface" },
    { title: "Tomate" },
    { title: "Queijo" },
    { title: "Pão" },
  ]

  return (
    <div className="sandwich-menu">
      <button className="sandwich-menu-button" onClick={toggleMenu} onMouseEnter={toggleMenu} >
        ☰
      </button> 
      {isOpen && (
        <ul className="sandwich-menu-list">
          {
            itens.map((item, index) => (
              <a href={item.link}>
                <Item key={index}>{item.title}</Item>
              </a>
            ))
          }
        </ul>
      )}
    </div>
  );
};

export default Hamburger;

