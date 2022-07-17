import { useState } from "react";

export const TaskRow = ({task, toggleTask}) => {
    return(

        <tr key={task.name}>
         <td className="d-flex justify-content-between">{task.name}</td>
         <td><input className='text-center' type="checkbox" checked={task.done} onChange={()=> toggleTask(task)}/></td>
        </tr>
    )
}