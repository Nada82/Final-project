import React from 'react';
import { connect } from 'react-redux';
import { addCom} from "./actions"


const AddComment = ({dispatch}) => {
    let input;

    const addComment = (e) => {
        e.preventDefault();

        if(!input.value.trim()) return;

        dispatch(addCom(input.value));
        input.value = '';

    }
    return (
        <div>
            <form onSubmit={addComment} >
                <input ref={node => input = node} placeholder='What did you think? Dont forget to sign your name!' className="comment"/>
                <button type="submit" className="combtn">
                    Post Comment
                </button>
            </form>
        </div>
    )
}

export default connect()(AddComment);