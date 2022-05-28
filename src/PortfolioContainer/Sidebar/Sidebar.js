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
import Lang from "./../Lang/Lang";

const Sidebar = ({ isOpen, handleOpen, t }) => {
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
            {t("about.translated-text")}
          </SidebarLink>
          <SidebarLink to="skills" onClick={handleOpen}>
            {t("skills.translated-text")}
          </SidebarLink>
          <SidebarLink to="projects" onClick={handleOpen}>
            {t("projects.translated-text")}
          </SidebarLink>
          <SidebarLink to="contactme" onClick={handleOpen}>
            {t("contact.translated-text")}
          </SidebarLink>
          <SidebarLink to="" onClick={handleOpen}>
            <Lang />
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
