import styled from 'styled-components'
import { logoSVG } from '../../assets'
import { v } from '../../styles/variables'

export const SLogo = styled.div`
    width: 166px;
    height: 56px;
    gap: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        max-width: 100%;
        height: auto;
    }
    cursor: pointer;

    margin-bottom: ${v.lgSpacing};

    .logo-text {
        font-weight: bold;
        font-size: 20px;
    }
    .logo-desc {
        font-size: 10px;
    }
`

export const Logo =() =>{
    return (
    <SLogo>
        <img src={logoSVG} alt="logo"/>
        <div style={{margin:"10px"}}>
            <div className="logo-text">MyNFT</div>
            <div className="logo-desc">NFT Marketplace</div>
        </div>
    </SLogo>
    )
}