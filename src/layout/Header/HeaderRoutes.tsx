import { Route, Routes } from "react-router-dom"
import headers from "../../routes/headerRoutes"

const HeaderRoutes = () => {
    return(
        <Routes>
            {headers.map((page) => (
                <Route key={page.path} {...page}/>
            ))}
        </Routes>
    )
}

export default HeaderRoutes