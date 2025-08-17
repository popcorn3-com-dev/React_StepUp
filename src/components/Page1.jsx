import { Link, Outlet } from "react-router-dom";


export const Page1 = () => {
    const arr = [...Array(100).keys()];

    return (
        <div>
            <h1>Page1です</h1>
            <nav>
                <Link to='detailA' state={arr}>DetailA</Link><br />
                <Link to='detailB'>DetailB</Link><br />
            </nav>
            <Outlet />
        </div>
    )
}