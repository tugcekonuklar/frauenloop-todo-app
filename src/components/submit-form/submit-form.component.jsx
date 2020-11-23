import React from 'react'

export class SubmitForm extends React.Component {

    state ={content:''};

    handleSubmit =(e)=>{
        e.preventDefault();
        this.props.onCreate(this.state.content);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className="input"
                        placeholder="Enter item"
                        value={this.state.content}
                        onChange={(e) => this.setState({content: e.target.value})}
                    />
                    <button className="button">Add</button>
                </form>
            </div>
        )
    };
}