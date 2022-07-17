import { useState } from "react";

export const VisibilityControl = ({setshowCompleted, cleanTasks, isChecked}) => {
    

    const handleDelete = () => {
        if(window.confirm('Confirm delete')){
            cleanTasks();
        }
        
    }

    return(
        <div className='d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary'>
            <div className=" form-check form-switch">
                <input type="checkbox" checked={isChecked} onChange={(e)=> setshowCompleted(e.target.checked)}/>
                  
                <label>Show task done</label>
            </div>
                <button className="btn btn-danger btn-sm" onClick={handleDelete}>
                    Clear
                </button>
            
        </div>

    )

}    