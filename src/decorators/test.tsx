import * as React from 'react'

export function withStoreContext<C extends React.ComponentClass>(Component: C): C {
    return (<Component />);
}