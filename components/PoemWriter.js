const React = require('react');

function countWords(line) {
  if (line) {
    return line.split(' ').filter(l => l).length;
  }
  else {
    return 0
  }

}

function isValidPoem(poem) {
  const poemLines = poem.split('\n').filter(l => l);
  const isRightAmountOfLines = poemLines.length === 3;
  const hasRightAmountOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
  return isRightAmountOfLines && hasRightAmountOfWords;
}

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {poem: '', isValid: false};
    this.setPoem = this.setPoem.bind(this)
  }

  setPoem(event) {
    var poem = event.target.value
    this.setState({ poem: poem, isValid: isValidPoem(poem)})
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.setPoem} />
        {this.state.isValid ? <p>Sick Poem!</p> : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}

// The poem has three lines.

// The first line has five words.
// The second line has three words.
// The third line has five words.

module.exports = PoemWriter;
