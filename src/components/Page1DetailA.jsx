import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
    const location = useLocation();
    console.log(location);

    return (
        <div>
            <h2>Page1DetailA</h2>
        </div>
    )
}