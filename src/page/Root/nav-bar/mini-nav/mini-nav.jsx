import {NavLink} from "react-router-dom";

export const MiniNav = ({contents, links, index, lastEl}) => {
    const isActive = ({isActive}) => isActive ? "underline text-primary" : "";
    return (
        < >
            <NavLink className={isActive} to={links}>{contents}</NavLink>
            {index === lastEl && <i className="fa-solid fa-chevron-right"></i>}
        </>
    )
}