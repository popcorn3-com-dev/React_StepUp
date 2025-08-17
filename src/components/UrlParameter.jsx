import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
    const { id } = useParams();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    console.log(query);
    return (
        <>
            <div>
                <h2>UrlParameterページ</h2>
                <p>URLパラメータは{id}です</p>
                <p>クエリパラメータは{query.get('name')}です</p>
            </div>
        </>
    )
}

