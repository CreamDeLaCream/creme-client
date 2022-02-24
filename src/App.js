import React from 'react';
import GlobalStyle from './common/styles/GlobalStyle';

import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './common/redux/configureStore';
// import { useDispatch, useSelector } from 'react-redux';

// pages
import {
  IntroPage,
  MainPage,
  AnalysisPage,
  ResultPage,
  MyPetPage,
  TeamPage,
} from './pages';
import { Template } from './common/components';

// const Center = styled.div`
//   height: 100vh;
//   display: flex;
//   flex-direction: row;
//   border: 2px solid purple;
//   max-width: 1440px;
// `;

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <GlobalStyle />
        {/* <Center> */}
        <Template>
          <Switch>
            <Route exact path="/" component={IntroPage} />
            <Route exact path="/main" component={MainPage} />
            <Route exact path="/analysis" component={AnalysisPage} />
            <Route exact path="/result" component={ResultPage} />
            <Route exact path="/mypet" component={MyPetPage} />
            <Route exact path="/team" component={TeamPage} />
          </Switch>
        </Template>
        {/* </Center> */}
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
