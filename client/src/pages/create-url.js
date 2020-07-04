import React, { useState } from 'react';
import { Link } from 'gatsby';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';

import Layout from '../components/layout';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: 'rebeccapurple',
    },
}));

const CreateURL = () => {
    const classes = useStyles();
    const [shortURL, setShortURL] = useState('');

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = async data => {
        console.log(data);
        let response = await fetch('http://localhost:5000/api/url/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(data),
        });
        response = await response.json();
        console.log(response);
        if (response.shortUrl) {
            setShortURL(response.shortUrl);
        } else {
            setShortURL(response);
        }
    };

    return (
        <Layout>
            <Container component='main' maxWidth='md'>
                <CssBaseline />
                <div className={classes.paper}>
                    {/* <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar> */}
                    <Typography component='h1' variant='h5'>
                        Create a new short URL
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='longUrl'
                            label='Long URL'
                            id='longUrl'
                            inputRef={register({ required: true })}
                        />
                        {errors.longUrl && <span>This field is required</span>}
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.submit}>
                            Create
                        </Button>
                    </form>
                    <Link to={shortURL}>{shortURL}</Link>
                </div>
            </Container>
        </Layout>
    );
};
export default CreateURL;
