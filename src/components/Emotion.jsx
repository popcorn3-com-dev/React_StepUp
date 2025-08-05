/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

export const Emotion = () => {
    const containerStyle = css({
        marginTop: '20px',
        border: 'solid 2px #e82043',
        borderRadius: '20px',
        padding: '8px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    });


    return (
        <div css={containerStyle}>
            <p>--Emotion--</p>
            <SButton>FIGHT!!</SButton>
        </div>
    )
}

const SButton = styled.button`
 background-color: #aaa;
    &:hover {
        background-color: #3aa;
    }
`