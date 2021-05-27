import React from 'react';
import { Button } from 'react-bootstrap';

export default function Dashboard() {
    return (
        <div>
            <h1>Hiii</h1>
            <Button variant="dark"><a href="/api/logout">Logout</a></Button>
        </div>
    )
}
