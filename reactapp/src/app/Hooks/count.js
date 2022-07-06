import React from "react";

function Count({ text, count}) { //destructuring of props
    console.log(`rendering ${text}`);
    return <div>{text} - {count}</div>
}

export default React.memo(Count);
//export default Count;