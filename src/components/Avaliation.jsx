import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import './avaliation.css';

class Avaliation extends React.Component {
  static showComments(comment) {
    return (
      <div className="container-comment">
        <div className="elements-comment">
          <div className="email-comment">
            <p>{comment.email}</p>
            <Box display="flex" flexDirection="column">
              <Rating
                name="size-medium"
                value={comment.valueStar}
                size="large"
              />
            </Box>
          </div>
          <div>
            <p>{comment.textArea}</p>
          </div>
        </div>
      </div>
    );
  }

  shouldComponentUpdate(prevProps) {
    const { update } = this.props;
    if (prevProps !== update) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    this.findComments();
  }

  findComments() {
    const { id } = this.props;
    if (localStorage.comments) {
      const commentsFromLocalStorage = localStorage.comments;
      const formatedComment = JSON.parse(commentsFromLocalStorage);
      const comments = formatedComment.filter((key) => key.id === id);
      return (
        <div>{comments.map((comment) => Avaliation.showComments(comment))}</div>
      );
    }
    return <div>Nenhum comentário feito!</div>;
  }

  render() {
    return (
      <fieldset>
        <legend>Comentários</legend>
        {this.findComments()}
      </fieldset>
    );
  }
}

Avaliation.propTypes = {
  id: PropTypes.string.isRequired,
  update: PropTypes.string.isRequired,
};

export default Avaliation;
