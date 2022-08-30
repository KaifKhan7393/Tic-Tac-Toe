import React from 'react';

const History = ({ history }) => {
    return (
        <ul>
            {
                history.map(() => {
                    return (
                        <li>
                            <button type="button">OK</button>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default History;