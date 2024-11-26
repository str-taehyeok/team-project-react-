import styled from "styled-components";

const S = {}

    S.LayoutWrapper = styled.div`
        display: flex;
        flex-direction: column;
        width: 100dvw;
        height : 100dvh;
        padding: 118px 0 0 0;
    `;

    S.Header = styled.header`
        width: 100dvw;
        height : 118px;
        border : solid 1px #000;
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        background-color: white;
    `

    S.Main = styled.main`
        flex: 1;    
    `;


    // header
    
    
    S.MenuWrap = styled.div`
            display: flex;
            align-items: center;
            width: 1440px;
            margin: 28px 0;
            gap: 72px;
            padding-left: 28px;
            position: relative;
            
            & span{
                font-weight: bold;
                font-size: 20px;
                margin-top: 4px;
            }
            
            & img{
                cursor: pointer;
            }
        `;
    
        S.MenuFrame = styled.div`
            display: none;
            flex-direction: column;
            width: 1440px;
            align-items: start;
            animation: lift-detail 0.1s;
            position: absolute;
            top: 85px;
            left: 35px;
        `;
        
        S.MenuHeader = styled.div`
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0;
            margin: 0;
            min-width: 200px;
        `;
        
        S.Welcome = styled.div`
            font-size: 14px;
            text-align: left;
            vertical-align: bottom;
        `;
        
        
        // S.Logout = styled.button`
        //     font-size: 10px;
        //     color: #ffc303;
        //     background-color: white;
        //     border: none;
        //     margin-left: auto;
        //     font-weight: bold;
        //     cursor: pointer;
        //     margin-right: 24px;
        //     vertical-align: bottom;
        // `;

    S.MenuForm = styled.div`
        & ul{
            list-style: none;
            padding: 0;
            width: 200px;
            position: absolute;
            z-index: 1000;
        }
        
        & li{
            width: 200px;
            background-color : white;
        }
        
        & p{
            width: 200px;
            height: 40px;
            background: #828282;
            color: white;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
            padding-left: 15px;
            margin: 16px 0;
        }
        
        & div{
            height: 0;
            overflow: hidden;
            transition: height 0.3s ease;
            padding-left: 15px;
        }
    `;

    S.SubMenu = styled.div`
        style

    = {
    {
        height: activeSubmenu = = = index ? \` ${item.submenu.length * 40}px \`: '0'
    }
    }
    `

export default S;