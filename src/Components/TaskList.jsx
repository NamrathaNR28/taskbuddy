export default function TaskList({ tasks, updatetask, deleteTask }) {
   const toggle = (index) => {
        const updatedtask = {...tasks[index], completed: !tasks[index].completed};
        updatetask(index, updatedtask);
   }
    
    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <li className ={task.completed ? "completed" : ""}>
                    <div>
                        <span>
                           {task.text}
                            <small>
                            ({task.priority} {task.category})
                            </small>
                       </span>
                    </div>
                    <div>
                        <button onClick = {() => {
                            toggle(index)
                            }}>
                            {task.completed ? "Undo" : "Complete"}
                        </button>
                        <button onClick = {() => {
                            deleteTask(index)
                        }}>
                            Delete</button>
                    </div>
                </li>
           ))}
        </ul>
    
    )
}