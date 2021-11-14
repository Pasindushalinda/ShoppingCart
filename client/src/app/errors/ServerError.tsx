import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { useHistory, useLocation } from "react-router";

export default function ServerError() {
    const { state } = useLocation<any>();
    const history = useHistory();
    return (
        <Container component={Paper}>
            {state?.error ? (
                <>
                    <Typography variant='h3' color='error' gutterBottom>{state.error.title}</Typography>
                    <Divider />
                    <Typography color='teal'>{state.error.detail || 'Internal server error'}</Typography>
                </>
            ) : (
                <Typography variant='h5' gutterBottom>Server error</Typography>
            )}
            <Button onClick={() => history.push('/catalog')}>Go back to the store</Button>
        </Container>
    )
}