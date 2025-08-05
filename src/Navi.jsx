import { Link } from "react-router";

export const Navi = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link><br />
                <Link to='/page1'>Page1</Link><br />
                <Link to='/page2'>Page2</Link>
            </nav>
        </div>
    )
}