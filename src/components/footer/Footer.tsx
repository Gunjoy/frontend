import React from "react";
import { ToTheListBtn } from "../buttons/ToTheListBtn";
import { CreatePostBtn } from "../buttons/CreatPostBtn";
import { ProfileBtn } from "../buttons/ProfileBtn";

import "../styles/Footer.css"

export const Footer = () => {
    return(
        <div className="footer-wrapper">
            <ToTheListBtn></ToTheListBtn>
            <CreatePostBtn></CreatePostBtn>
            <ProfileBtn></ProfileBtn>
        </div>
    )
}
