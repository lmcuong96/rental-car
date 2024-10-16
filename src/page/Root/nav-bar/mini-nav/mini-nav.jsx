import {NavLink} from "react-router-dom";

export const MiniNav = ({contents, links}) => {
    const isActive = ({isActive}) => isActive ? "underline text-primary" : "";
    return (
        < >
            <NavLink className={isActive} to={links}>{contents}</NavLink>
            <i className="fa-solid fa-chevron-right"></i>
        </>
    )
}