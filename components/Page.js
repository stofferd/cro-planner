import React, { Component } from 'react';
import Header from './Header'
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal} from 'styled-components';

const theme = {
    green: '#009955',
    shadow1: 'box-shadow: 0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24)',
    greyLight: '#FAFAFA'
};
  
const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.black};
`;
  
const Inner = styled.div`
    /* max-width: ${props => props.theme.maxWidth}; */
    margin: 0 auto;
    /* padding: 2rem; */
`;

injectGlobal`
    @font-face {
        font-family: 'anton';
        src: url('/static/fonts/anton-regular-webfont.woff'); 
    } 
    @font-face {
        font-family: 'montserrat';
        font-weight: normal;
        src: url('/static/fonts/montserrat-regular-webfont.woff'); 
    } 
    @font-face {
        font-family: 'montserrat';
        font-weight: bold;
        src: url('/static/fonts/montserrat-semibold-webfont.woff'); 
    } 
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'montserrat';
        font-weight: normal;
    }
    a {
        text-decoration: none;
        color: ${theme.black};
    }
    fieldset {
        border: 0;
    }
    .select-box {
        background: ${theme.blueTrans};
        border: 1px solid ${theme.blue};
    }
    img {
        max-width: 100%;
    }
`;

class Page extends Component {
    render() {        
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta title={this.props.title} />
                    <Header />
                    <Inner>
                        {this.props.children}
                    </Inner>
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;