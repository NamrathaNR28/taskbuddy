import React, { useState } from "react";
import { PlusCircle } from "lucide-react";
import '../Style.css';
export default function TaskForm({ addTask }) {
    let [task, setTask] = useState('');
    let [priority, setPriority] = useState('Medium');
    let [category, setCategory] = useState('General');
    const handleSubmit = (e) => {
        e.preventDefault();// prevents default refreshing of the page
        addTask({text : task, priority, category, completed: false});// Send data to addTask method
        setTask(" ");
        setPriority("Medium");
        setCategory("General");
    };
    return (
        <form onSubmit ={handleSubmit} className = "task-form">
            <div id = "inp">
            <input onChange = {(e) => setTask(e.target.value)} value = {task}></input>
            
            <button>
                <PlusCircle size = {29} />
            </button>
            </div>
            <div>
            <select onChange = {(e) => setPriority(e.target.value)} value = {priority}>
                <option value = "Medium">Medium</option>
                <option value = "High">High</option>
                <option value = "Low">Low</option>
            </select>

            <select onChange = {(e) => setCategory(e.target.value)} value = {category}>
                <option value = "General">General</option>
                <option value = "Work">Work</option>
                <option value = "Personal">Personal</option>
            </select>
            </div>
        </form>
    )
}