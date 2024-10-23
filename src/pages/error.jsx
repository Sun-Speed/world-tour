import { NavLink } from "react-router-dom";


export const Error = () => {
    return (<>
        <h1>404 not found...</h1>
        <NavLink to="/"><button>home</button></NavLink>
    </>)
}