import { useParams } from "react-router-dom";

export const Page1DetailB = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <>
            <div>
                <h2>Page1DetailB</h2>
                <p>URLパラメータは{id}です</p>
            </div>
        </>
    )
}

