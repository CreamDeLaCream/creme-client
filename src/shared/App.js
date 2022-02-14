import React from 'react';
import GlobalStyle from '../shared/GlobalStyle';

import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
// import { useDispatch, useSelector } from 'react-redux';

// pages
import IntroPage from '../pages/IntroPage';
import MainPage from '../pages/MainPage';
import AnalysisPage from '../pages/AnalysisPage';
import ResultPage from '../pages/ResultPage';
import DiaryPage from '../pages/DiaryPage';
import TeamPage from '../pages/TeamPage';

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <GlobalStyle />
        <Route exact path="/" component={IntroPage} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/analysis" component={AnalysisPage} />
        <Route exact path="/result" component={ResultPage} />
        <Route exact path="/diary" component={DiaryPage} />
        <Route exact path="/team" component={TeamPage} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
