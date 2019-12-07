import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  }

  validateEmail(event) {
    const validation = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    const valid = validation.test(event.target.value);
    this.setState({ valid, email: event.target.value });
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

  addAvaliation(event) {
    const email = this.state.email;
    const textArea = this.state.textArea;
    const valueStar = this.state.valueStar;
    this.setState({
      registerEmail: email,
      registerTextArea: textArea,
      registerValueStar: valueStar,
    });
    this.saveComments(email, textArea, valueStar);
    this.props.onChange(event);
  }

  saveComments(email, textArea, valueStar) {
    const { id } = this.props;
    const object = { id, email, textArea, valueStar };
    if (!localStorage.comments) {
      const newComment = JSON.stringify([object]);
      localStorage.setItem('comments', newComment);
    } else {
      const actualComments = localStorage.comments;
      const formatedActualComments = JSON.parse(actualComments);
      const finalComments = [...formatedActualComments, object];
      localStorage.comments = JSON.stringify(finalComments);
    }
  }

  createFormForComments() {
    return (
      <form onSubmit={(e) => this.addAvaliation(e)}>
        <div className="avaliation">
          <input
            type="text"
            placeholder="Email"
            required
            className={this.state.valid ? 'valid' : 'invalid'}
            onChange={this.validateEmail}
          />
          <textarea placeholder="Mensagem(opcional)" onChange={this.comment} />
        </div>
        <Box display="flex" flexDirection="column">
          <Rating
            name="size-medium"
            onClick={this.avaliation}
            value={this.state.valueStar}
            size="large"
          />
        </Box>
        <button type="submit" value={this.state.email}>
          Avaliar
        </button>
      </form>
    );
  }

  render() {
    return <div>{this.createFormForComments()}</div>;
  }
}

CreateAvaliation.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CreateAvaliation;
