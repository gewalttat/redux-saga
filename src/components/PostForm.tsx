import React from 'react';
import {connect} from 'react-redux';
import {createPosts} from "../redux/actions";

class PostForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: ''
        }
    }

    submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const {title} = this.state;
        const newPost = {
            title, id: Date.now().toString()
        };
        this.props.createPosts(newPost);
        this.setState({title: ''})
    };

    changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        this.setState((prev: any) => ({...prev,
            ...{[event.target.name]: event.target.value}
        }));
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className='form-group'>
                    <label htmlFor='title'>Post header</label>
                    <input
                        type='text'
                        className='form-control'
                        id='title'
                        value={this.state.title}
                        name='title'
                        onChange={this.changeInputHandler}/>
                </div>
                <button className='btn btn-success' type='submit'>Create</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPosts
}

export default connect(null, mapDispatchToProps)(PostForm)