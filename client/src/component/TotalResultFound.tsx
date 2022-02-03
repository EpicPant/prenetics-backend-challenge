import React from 'react';

export const TotalResultFound = (props: { children?: any }) => {
    return (
        <div>{props.children} records in total</div>
    )
}