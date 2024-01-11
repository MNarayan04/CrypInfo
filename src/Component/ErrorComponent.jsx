import { Alert, AlertIcon } from '@chakra-ui/react';
import React from 'react';

function ErrorComponent(props) {
    return (
        <Alert
        status='error'
        position={"fixed"}
        top={"10%"}
        left={"50%"}
        transform={"translate(-50%)"}
        w={"container.lg"}
        >
            <AlertIcon/>
            {props.message}
        </Alert>
    );
}

export default ErrorComponent;