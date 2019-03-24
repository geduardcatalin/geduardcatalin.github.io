class App extends React.Component{
  constructor(props) {
    parent(props);
  }
  render() {
    const backgroundStyle = {
     'width': '100%',
     'height': '100%',
     'top': '0',
     'left': '0',
     'zIndex': '-999',
     'backgroundColor': 'grey',
     'position': 'fixed'
    };
    return (
      <div style={backgroundStyle}></div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('root'));
