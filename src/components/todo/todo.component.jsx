import './todo.style.css'

export function Todo(props){
    return (
    <div className='list-item'>
        {props.task} - 
        {props.index}
        <button className="delete is-pulled-right" onClick={() => {props.onDelete(props.index)}}></button>
    </div>
    );
}
