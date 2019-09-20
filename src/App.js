import React from 'react';
import './App.css';
import Typist from 'react-typist';
import './App.scss';

class App extends React.Component {
  state = {
    renderMsg: false,
  }

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  }

  render() {
    const docs = 'https://wildcards.world';
    return (
      <div className="TypistExample">
        <Typist
          className="TypistExample-header"
          avgTypingDelay={80}
          startDelay={2000}
          onTypingDone={this.onHeaderTyped}
        >
          <a href={docs}>alwaysforsale ad space</a>
        </Typist>
        <div className="TypistExample-content">
          {this.state.renderMsg ? (
            <Typist
              className="TypistExample-message"
              cursor={{ hideWhenDone: true }}
            >
              Rethink online advertising
              <Typist.Delay ms={1250} />
              <br />
              <br/>
              * Ethical advertising
              <Typist.Delay ms={1250} />
              <br />
              * Set up in a matter of minutes
              <Typist.Delay ms={1250} />
              <br />
              * Hard to receive pay<Typist.Delay ms={500} />ments
              <Typist.Backspace count={24} delay={1000} />
              <Typist.Delay ms={750} />
              Receive ad revenue directly to your crypto wallet
              <Typist.Delay ms={1250} />
              <br />
              ... coming soon
              <Typist.Delay ms={1250} />
              <br />
              <br />
              <span>Meanwhile --> <a href={docs} className="flash">visit wildcards</a></span>
              <br />

              {''}
            </Typist>
          ) : null }
        </div>
      </div>
    );
  }

}

export default App;
