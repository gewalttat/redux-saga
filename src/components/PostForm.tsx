import React from 'react'

export default class PostForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: ''
        }
    }

    submitHandler = (event: any) => {
        event.preventDefault()
        const {title} = this.state;
        const newPost = {
            title, id: Date.now().toString()
        };
        this.setState({title: ''})
        console.log(newPost);
    };

    changeInputHandler = (event: any) => {
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