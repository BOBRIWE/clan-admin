import React from 'react';
import './App.scss';
import MembersList from '../MembersList/MembersList';
import MemberInfo from '../MemberInfo/MemberInfo';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">


      </header>
      <article className="App-article">
        <MembersList />

        <MemberInfo />
      </article>
    </div>
  );
};

export default App;
