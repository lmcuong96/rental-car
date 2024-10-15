import {NavLink} from "react-router-dom";

export const MiniNav = ({content,link1,link2}) => {
    const isActive = ({isActive}) => isActive ? "underline text-primary" : "";
    return (
        <div className={"mini-nav-123"}>
            <NavLink className={isActive} to={link1}>Home</NavLink>
            <i className="fa-solid fa-chevron-right"></i>
            <NavLink className={isActive} to={link2}>{content}</NavLink>
        </div>
    )
}