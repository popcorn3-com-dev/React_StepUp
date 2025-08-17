import { useLocation, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
    const location = useLocation();
    console.log(location);

    const navigation = useNavigate();
    const onClickBack = () => {
        navigation(-1)
    }

    return (
        <div>
            <h2>Page1DetailA</h2>
            <button onClick={onClickBack}>戻る</button>
        </div>
    )
}