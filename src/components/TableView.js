import React from 'react';

function ListView(props) {
    console.log(props);
    return (
        <div>
            <ul>
                {props.viewItem.map(item => (
                    <div key={item.key} onClick={() => alert(`You clicked ${item.name}`)}>
                        <li key={item.key}>
                            {item.name}
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ListView;