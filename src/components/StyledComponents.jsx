import styled from "styled-components";

export const StyledComponents = () => {
    return (
        <SContainer>
            <STitle>--styled-Components--</STitle>
            <SButton>FIGHT!!</SButton>
        </SContainer>
    )
}

const SContainer = styled.div`
    margin-top: 20px;
    border: solid 2px #e82043;
    border-radius: 20px;
    padding: 8px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const STitle = styled.p`
color: #008800;
`;

const SButton = styled.button`
background-color: #aaa;
    &:hover {
        background-color: #3aa;
    }
`;