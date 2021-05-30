import './App.css';
import Layout from './components/Layout'
import Main from './components/main'
 /*import Form from './components/Form' */

function App () {
  return (
    <div className="App">
      <Layout>
        {/*<Form/> */}
        <Main />
      </Layout>
    </div>
  );
}

export default App;
