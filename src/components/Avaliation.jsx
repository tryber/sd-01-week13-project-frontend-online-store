import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

class Avaliation extends Component {
  constructor(props) {
    super(props);
      this.state = {
        valid: false,
        value: 2,
      };
    this.validateEmail = this.validateEmail.bind(this);
    this.avaliation = this.avaliation.bind(this);
  }

  validateEmail(event) {
    const validation = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    const valid = validation.test(event.target.value);
    this.setState({ valid });
  }

  avaliation(event) {
    this.setState({
      value: Number(event.target.value),
      });
  }

  render() {
    return (
      <div>
        <div className="avaliation">
          <input type="text" placeholder="Email" className={this.state.valid ? "valid" : "invalid"} required="required" onChange={this.validateEmail} />
          <textarea placeholder="Mensagem (opcional)"></textarea>
          <button type="button">Avaliar</button>
        </div>
        <Box display="flex" flexDirection="column">
          <Rating name="size-medium" onClick={this.avaliation} value={this.state.value} size="large" />
        </Box>
     </div>
    );
  }
}

export default Avaliation;