import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "../../common/SidebarElements";
import "./Sidebar.css";
import { FaHome } from "react-icons/fa";

const Sidebar = ({ isOpen, handleOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={handleOpen} className="sidebar">
      <Icon onClick={handleOpen}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={handleOpen}>
            <FaHome className="home-icon" />
          </SidebarLink>
          <SidebarLink to="about" onClick={handleOpen}>
            About
          </SidebarLink>
          <SidebarLink to="skills" onClick={handleOpen}>
            Skills
          </SidebarLink>
          <SidebarLink to="projects" onClick={handleOpen}>
            Projects
          </SidebarLink>
          <SidebarLink to="contactme" onClick={handleOpen}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
