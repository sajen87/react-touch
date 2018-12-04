import React, {Component} from 'react';
import './App.css';
import ValueLength from './ValidationComponent'
import Box from './CharComponent'

class App extends Component {
    state = {
        letters: [],
        wordLength: 0,
    };
    lengthHandler = (event) => {
        const inputLength = event.target.value.length;
        const letter = event.target.value;
        this.setState({wordLength: inputLength});
        this.setState({letters: letter.split('')})
    };
    removeBoxHandler = (event, id) => {
        const newWord = this.state.letters.join('');
        this.setState({letter: newWord});
        console.log(event.target)
    };

    render() {
        return (
            <div className="App">
                <ol>
                    <li>Render a list of CharComponents where each CharComponent receives a different letter of the
                        entered text (in the initial input field) as a prop.
                    </li>
                    <li>When you click a CharComponent, it should be removed from the entered text.</li>
                </ol>
                <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
                <input onChange={this.lengthHandler} type="text"/>
                <ValueLength value={this.state.wordLength}/>
                <Box letter={this.state.letters}
                     click={this.removeBoxHandler}
                />
            </div>
        );
    }
}

export default App;
