import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard';
import QuizStart from './components/Quiz/QuizStart';
import QuizQuestion from './components/Quiz/QuizQuestion';
import QuizResult from './components/Quiz/QuizResult';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/quiz/start" component={QuizStart} />
          <Route path="/quiz/question" component={QuizQuestion} />
          <Route path="/quiz/result" component={QuizResult} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;