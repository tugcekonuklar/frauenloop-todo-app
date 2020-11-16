import {Todo} from '../todo/todo.component';

export function TodoList(props) {

    // const todos = props.tasks.map((task, index) => console.log(task + index));

    return (<div>
        {props.tasks.map((task, index) => <Todo key={index} task={task}></Todo>)}
    </div>);
}