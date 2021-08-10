import Calculator from './components/Calculator';
import './styles.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Calculator />
    );
  }
}

export default App;
