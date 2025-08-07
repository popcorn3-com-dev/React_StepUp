import { useParams } from "react-router-dom";

export const UrlParameter = () => {
    const { id } = useParams();
    return (
        <>
            <div>
                <h2>UrlParameterページ</h2>
                <p>URLパラメータは{id}です</p>
            </div>
        </>
    )
}

