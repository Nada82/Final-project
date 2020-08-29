import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return ({
         comments: state 
    })
}

const CommentList = (state) => {
    console.log(state);
    return (
        <div className="commentbox">
            { state.comments.map((comment) => (
                        <p key={comment.id}>
                            {comment.text} </p>
                    ))  }

        </div>
    )
}

export default connect(mapStateToProps)(CommentList);