import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

class Avaliation extends React.Component {
  static showComments(comment) {
    return (
      <div>
        <div>
          <p>Email: {comment.email}</p>
        </div>
        <div>
          <p>Comentário: </p>
          <p>{comment.textArea}</p>
        </div>
        <Box display="flex" flexDirection="column">
          <Rating name="size-medium" value={comment.valueStar} size="large" />
        </Box>
      </div>
    );
  }

  shouldComponentUpdate(prevProps) {
    if (prevProps !== this.props.update) {
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
    return <div>{this.findComments()}</div>;
  }
}

Avaliation.propTypes = {
  id: PropTypes.string.isRequired,
  update: PropTypes.string.isRequired,
};

export default Avaliation;
