import { Link, Outlet } from "react-router";

export const Page1 = () => {
    return (
        <div>
            <h1>Page1です</h1>
            <nav>
                <Link to='detailA'>DetailA</Link><br />
                <Link to='detailB'>DetailB</Link><br />
            </nav>
            <Outlet />
        </div>
    )
}