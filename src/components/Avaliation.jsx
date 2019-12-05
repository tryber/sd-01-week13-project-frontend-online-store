import React from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

class Avaliation extends React.Component {
    findComments() {
        const { id } = this.props;
        if(localStorage.comments) {
        const comments = localStorage.comments.filter((key) => key === id)
        return (
            <div>
                {comments.map((comment) => {
                    const formatedComment = JSON.parse(comment);
                    this.showComments(formatedComment)
                })}
            </div>
        )
    }
    }

    showComments(comment) {
        return (
            <div>
                <div>
                    <p>Email: </p>
        <p>{comment.email}</p>
                </div>
                <div>
                    <p>Comentário: </p>
        <p>{comment.textArea}</p>
                </div>
                <Box display="flex" flexDirection="column">
                    <Rating
                        name="size-medium"
                        value={comment.valueStar}
                        size="large"
                    />
                </Box>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.findComments()}
            </div>
        )
    }
}

export default Avaliation;
