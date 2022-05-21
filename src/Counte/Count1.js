
import React, {useState} from "react";


function Count1({ data }) {
   
    return(
        <div className={'container ${data.featured ? "border_featured" : ""}'}>
            <div className="data">
                <div className="job3">
                    <div className="count">
                        <img src={data.logo} alt="logo" />
                    </div>
                    <div className="job">
                        <h6> {data.company} </h6>
                        <h5>{data.position} </h5>
                        {data.posteAt}
                        {data.contract}
                        {data.location}

                    </div>
                </div>
                <div className="job1">
                    {data.role}
                    {data.level}
                    {data.languages}
                </div>
            </div>
        </div>
        
    );
}
export default Count1;