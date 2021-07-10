import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getMenuApi } from "../../../api/menu";
import { Link } from "react-router-dom";


const Ul = styled.ul`
  list-style: none;
  display: flex;
  color: #fff;
  flex-flow: row nowrap;
  
  li {
    padding: 18px 10px;
  }

  a {
      
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    background: linear-gradient(currentColor, currentColor);
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: all 0.5s;
  }

  a:hover{
    color: rgb(15, 148, 224);
    background-size: 50% 2px;
  }

  span{
    margin-left: 10px;
    font-size: 2rem;
    background-size: 0%;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    
    li {
      color: #fff;
      text-align: center;
      font-size: 20px;
      
    }
     
  }
`;

const RightNav = ({ open }) => {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    getMenuApi().then((response) => {
      const arrayMenu = [];
      response.menu.forEach((item) => {
        item.active && arrayMenu.push(item);
      });
      setMenuData(arrayMenu);
    });
  }, []);
  return (
   
    <Ul open={open} class="menu-bar">
      <li><a href="/">Home</a></li>
      <li><a href="#nosotros">Nosotros</a></li>
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#porfolio">Porfolio</a></li>
      <li><a href="#clientes">Clientes</a></li>
      <li><a href="#contacto">Contacto</a></li>
      <li>
      <>
                  {menuData.map((item) => {
                    const external =
                      item.url.indexOf("http") > -1 ? true : false;

                    if (external) {
                      return (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          class="enlaces"
                        >
                          {item.title}
                        </a>
                      );
                    }
                    return <Link to={item.url}>{item.title}</Link>;
                  })}
                </>
      </li>
      <li>
     <div class="sociales">
     <a href="https://www.facebook.com/Sinaptic.ES" target="_blank">
       <span class="fab fa-facebook"></span>
     </a>
     <a href="https://www.instagram.com/sinaptic_ar/" target="_blank">
       <span class="fab fa-instagram"></span>
     </a>
     <a
       href="https://api.whatsapp.com/send?phone=+542214205710"
       target="_blank"
     >
       <span class="fab fa-whatsapp"></span>
     </a>
     <a href="https://www.linkedin.com/company/sinaptic" target="_blank">
       <span class="fab fa-linkedin"></span>
     </a>
   </div>
   

      </li>

    </Ul>
     );
};

export default RightNav;
