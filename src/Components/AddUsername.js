import React from 'react';
import { connect } from 'react-redux';
import { addCom} from "./actions"


const AddUsername = ({dispatch}) => {
    let input;

    const addComment = (e) => {
        e.preventDefault();

        if(!input.value.trim()) return;

        dispatch(addCom(input.value));
        input.value = '';

    }
    return (
        <div>
            <form onSubmit={addComment}>
                <input ref={node => input = node} placeholder='Name' className="name"/>
                <button type="submit">
                    Post
                </button>
            </form>
        </div>
    )
}

export default connect()(AddUsername);