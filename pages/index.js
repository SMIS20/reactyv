import React from 'react';
import Link from "next/link";

const flexCenterAlign = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export default () => <div style={flexCenterAlign}>
                        <p>Hello, <Link href="/about">Reactyv</Link>!</p>
                    </div>

