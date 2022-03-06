import React from 'react';
import GlobalStyle from './common/styles/GlobalStyle';

// redux
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './common/redux/configureStore';

// components
import { Template } from './common/components';
import ScrollToTop from './common/utils/ScrollToTop';

// pages
import {
  IntroPage,
  MainPage,
  AnalysisPage,
  ResultPage,
  MyPetPage,
  TeamPage,
  AddPetPage,
  AddUserLifePage,
  KakaoRedirect,
} from './pages';

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <GlobalStyle />
        <Template>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={IntroPage} />
            <Route exact path="/main" component={MainPage} />
            <Route exact path="/analysis" component={AnalysisPage} />
            <Route exact path="/result/:slug" component={ResultPage} />
            {/* <Route exact path="/result" component={ResultPage} /> */}
            <Route exact path="/mypet" component={MyPetPage} />
            <Route exact path="/team" component={TeamPage} />
            <Route exact path="/addpet" component={AddPetPage} />
            <Route exact path="/adduserlife" component={AddUserLifePage} />
            <Route
              path="/oauth/callback/kakao"
              component={KakaoRedirect}
            ></Route>
          </Switch>
        </Template>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
