import './todo.style.css'

export function Todo(props){
    return (
    <div className='list-item'>
        {props.task}
        <button className="delete is-pulled-right"></button>
    </div>
    );
}