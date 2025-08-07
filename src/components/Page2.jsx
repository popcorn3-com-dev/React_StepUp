import { Link, Outlet } from "react-router";

export const Page2 = () => {
    return (
        <div>
            <h1>Page2です</h1>
            <nav>
                <Link to='999'>999</Link><br />
            </nav>
            <Outlet />
        </div>
    )
}