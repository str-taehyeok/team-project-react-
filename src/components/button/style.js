import styled, { css } from "styled-components"

const variantCSS = {
    yellow : css`
        background-color: ${({theme})=>theme.PALETTE.background.secondary["yellow200"]};
    `,
    blue : css`
        background-color: ${({theme})=>theme.PALETTE.background.main["300"]};
    `,
}

const shapeCSS = {

    default: css``,
    small: css`
        border-radius: 10px;
    `,
    large: css`
        border-radius: 20px;
    `,
    big: css`
        border-radius: 50px;
    `,
    round: css`
        border-radius: 50%;
    `
}

const sizeCSS = {

    default: css`
        width: 100%;
        height : 42px;
        padding: 15px 5px;
    `,
}

const colorCSS = {
    white: css`
        background-color: ${({theme}) => theme.PALETTE["white"]};
    `,
    black: css`
        background-color: ${({theme}) => theme.PALETTE["black"]};
    `
}

const Button = styled.button`

    ${({variant}) => variantCSS[variant]}
    ${({shape}) => shapeCSS[shape]}
    ${({size}) => sizeCSS[size]}
    ${({color}) => colorCSS[color]}

    cursor : pointer;
`

export default Button;