import React from "react";
import ProgressionSingle from "./ProgressionSingle";

function ProgressionList({ progressions }) {
    return(
        <div className="progression-list">
            {progressions.map(progression => (
                <ProgressionSingle 
                    id={progression.id}
                    chord1={progression.chord1}
                    chord2={progression.chord2}
                    chord3={progression.chord3}
                    chord4={progression.chord4}
                />
            ))}
            
        </div>
    )
}

export default ProgressionList;