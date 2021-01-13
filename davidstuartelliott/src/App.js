import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Project from "./Project";
//import Home from "./Home";
import Header from "./Header";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/project">
              <Project />
            </Route>
            <Route exact path="/">
              <StandBy>
                <div>.... please stand by... updating...</div>
                <div>
                  In the meantine, please visit{" "}
                  <a href="https://www.howpeopletalk.com">HowPeopleTalk.com</a>
                </div>
              </StandBy>

              {/* <Home /> */}
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const StandBy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  padding-top: 20px;x
  /* identical to box height, or 36px */

  /* SUNRISE / Charcoal */
  color: #37313c;
`;

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Lato', sans-serif;

  }

.nav-items
{
  padding-right: 5px;
}

nav
{
  display: flex;

}

/* Link{
  padding-right: 0px;
  color:green;
  font-size: 50px;

  :visited {
    text-decoration: none;
  }

} */

/* adopted from https://polaris.shopify.com/design/typography#section-display-styles */

displayXlarge
{
  font-size: 42px;
  line-height: 44px;
  font-weight: 500;

  @media (max-width: 800px) {
    font-size: 27px;
    line-height: 36px;
    font-weight: 500;
    }
}

displayLarge
{
  font-size: 28;
  line-height: 32px;
  font-weight: 500;

  @media (max-width: 800px) {
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
    }
}

displayMedium
{
  font-size: 26px;
  line-height: 32px;
  font-weight: 400;

  @media (max-width: 800px) {
    font-size: 21px;
    line-height: 28px;
    font-weight: 400;
    }
}

displaySmall
{
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    }
}

heading
{
  font-size: 16px;
line-height: 24px;
font-weight: 500;

  @media (max-width: 800px) {
    font-size: 17px;
line-height: 24px;
font-weight: 500;
    }
}

subHeading
{
  font-size: 12px;
line-height: 16px;
font-weight: 600;
text-transform: uppercase;

  @media (max-width: 800px) {
    font-size: 13px;
line-height: 16px;
font-weight: 600;
text-transform: uppercase;
    }
}
body
{
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;

  @media (max-width: 800px) {
    font-size: 15px;
line-height: 20px;
font-weight: 400;
    }
}

caption
{
  font-size: 12px;
line-height: 16px;
font-weight: 400;

  @media (max-width: 800px) {
    font-size: 13px;
line-height: 20px;
font-weight: 400;
    }
}

ul li {
  margin-left: -22px;
  padding-left: -10px;
}






`;

export default App;
