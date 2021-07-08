import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src='/images/cta-logo-one.svg' alt='some image' />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>Get Premier access to raya and the last dragon for an additional fee with a disney+ subscription. as of 13/06/2021, the price of disney+ and the disney bundle will increase by $1</Description>
                    <MyH2>PETER'S DISNEY+ CLONE</MyH2>
                    <CTALogoTwo src='/images/cta-logo-two.png' alt='two' />
                </CTA>
                <BgImage />
            </Content> 
        </Container>
    )
}
const MyH2 = styled.h2`
color: #c05407;
`
const Container = styled.section`
overFlow: hidden;
display:flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div `
margin-bottom: 10vh;
width: 100%;
position: relative;
min-height:100vh;
box-sizing: border-box;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`;

const BgImage = styled.div `
height: 100%;
background-position: top;
background-size:cover;
background-repeat:no-repeat;
background-image:url("/images/login-background.jpg");
position: absolute;
top:0;
right:0;
left:0;
z-index: -1;
`;
const CTA = styled.div `
max-width: 650px;
width:100%;
display:flex;
flex-direction: column;
`;
const CTALogoOne = styled.img `
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
`;
const SignUp = styled.a `
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover {
    background-color: #0483ee;
}
`
const Description = styled.p `
text-transform:capitalize;
font-size: 14px;
// line-height: 1.5px;
letter-spacing: 1.5px;
margin: 0 0 24px;
`
const CTALogoTwo = styled.img `
max-width: 600px;
margin-bottom: 20px;
display: inline-block;
vertical-align: bottom;
width: 100%;
`
export default Login
