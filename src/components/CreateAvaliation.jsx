import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

class CreateAvaliation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
      valueStar: 2,
      email: '',
      textArea: '',
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.avaliation = this.avaliation.bind(this);
    this.addAvaliation = this.addAvaliation.bind(this);
    this.comment = this.comment.bind(this);
    this.avaliationStar = this.avaliationStar.bind(this);
  }

  validateEmail(event) {
    const validation = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    const valid = validation.test(event.target.value);
    this.setState({ valid,
      email: event.target.value,
    });
  }

  avaliation(event) {
    this.setState({
      valueStar: Number(event.target.value),
    });
  }

  comment(event) {
    this.setState({
      textArea: event.target.value,
    });
  }

  avaliationStar(register) {
    return (
      <Box display="flex" flexDirection="column">
        <Rating
          name="size-medium"
          value={register}
           size="large"
        />
      </Box>
    )
  }

  addAvaliation() {
    let email = this.state.email;
    let textArea = this.state.textArea;
    let valueStar = this.state.valueStar;
    this.setState({
      registerEmail: email,
      registerTextArea: textArea,
      registerValueStar: valueStar,
    })
    this.saveComments(email, textArea, valueStar);
  }

  saveComments(email, textArea, valueStar) {
    const {id} = this.props;
    const object = { id, email, textArea, valueStar };
    const newComment = JSON.stringify(object);
    if(!localStorage.comments){
      localStorage.setItem('comments', newComment);
    } else {
    const actualComments = [localStorage.comments]
    actualComments.push(newComment);
    localStorage.comments = actualComments;
    }
    
  }

  render() {
    return (
      <form>
        <div className="avaliation">
          <input type="text"
          placeholder="Email"
          className={this.state.valid ? 'valid' : 'invalid'}
          required="required"
          onChange={this.validateEmail}
          />
          <textarea placeholder="Mensagem(opcional)" onChange={this.comment}/>
        </div>
        <Box display="flex" flexDirection="column">
          <Rating
            name="size-medium"
            onClick={this.avaliation}
            value={this.state.valueStar}
            size="large"
          />
        </Box>
        <button type="submit" value={this.state.email}  onClick={this.addAvaliation}>Avaliar</button>
        <div>
          <p>Email: {this.state.registerEmail}</p>
          <p>Comentário: {this.state.registerTextArea}</p>
          <div>Avaliação: {this.avaliationStar(this.state.registerValueStar)}
          </div>
        </div>
      </form>
    );
  }
}

export default CreateAvaliation;
