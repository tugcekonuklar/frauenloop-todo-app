
export function Header (props){
    return (
        <div className="card-header">
            <h1 className="card-header-title header">You Have {props.numberTodos} Todos</h1>
        </div>
    );
};
