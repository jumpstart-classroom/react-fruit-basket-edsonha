class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      fruits: [],
      inputField: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://my-json-server.typicode.com/thoughtworks-jumpstart/api/fruits"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ fruits: data });
      });
  }

  inputFieldHandle = () => {
    this.setState({ inputField: event.target.value });
  };

  render() {
    const filteredFruit = this.state.fruits.filter(fruit => {
      return fruit.type.includes(this.state.inputField.toLowerCase());
    });
    return (
      <React.Fragment>
        <h1>React Fruit Basket</h1>
        <InputField onChangeHandle={this.inputFieldHandle} />
        <FruitBasket fruitBasket={filteredFruit} />
      </React.Fragment>
    );
  }
}
