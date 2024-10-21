import {NavLink} from "react-router-dom";

 const MiniNav = ({contents, links,index,lastElement}) => {
    const isActive = ({isActive}) => isActive ? "underline text-primary" : "";
    return (
        < >
            <NavLink className={isActive} to={links}>{contents}</NavLink>
            {index !== lastElement && <i className="fa-solid fa-chevron-right"></i>}
        </>
    )
}
export default MiniNav