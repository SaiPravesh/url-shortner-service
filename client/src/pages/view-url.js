import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';

import Moment from 'react-moment';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const ViewURL = () => {
    // State declaation and initialization
    const [urls, setUrls] = useState([]);
    const [error, setError] = useState({});
    const classes = useStyles();

    // Function to fetch data
    const fetchData = async () => {
        let response = await fetch('http://localhost:5000/api/url/view-url')
            .then(res => res.json())
            .then(res => setUrls(res))
            .catch(err => {
                console.log(err.message);
                setError(err);
            });
        console.log(response);
    };

    // Hook to handle side effect of component, in this case this is a replacement for componentDidMount life-cycle
    useEffect(() => {
        fetchData();
    }, []);

    // JSX markup
    return (
        <Layout>
            <section id='view-url' style={{ marginTop: '5rem' }}>
                {/* {urls.map(url => (
                    <div key={url._id}>{url.shortUrl}</div>
                ))} */}
                {error === undefined && (
                    <div
                        style={{
                            margin: `0 auto`,
                            textAlign: `center`,
                            color: `red`,
                            fontWeight: `bold`,
                            fontSize: `xx-large`,
                        }}>
                        Failed to fetch data from backend
                    </div>
                )}
                {error !== undefined && (
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label='simple table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center' style={{ paddingLeft: '1rem' }}>
                                        ID
                                    </TableCell>
                                    <TableCell align='center'>Short URL</TableCell>
                                    <TableCell align='center'>Actual URL</TableCell>
                                    {/* <TableCell align='right'>URL code</TableCell> */}
                                    <TableCell align='center'>Date created</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {urls.map((url, index) => (
                                    <TableRow key={url._id}>
                                        <TableCell
                                            component='th'
                                            scope='row'
                                            align='center'
                                            style={{ paddingLeft: '1rem' }}>
                                            {index + 1}
                                        </TableCell>
                                        <TableCell align='center'>
                                            <a href={url.shortUrl}>{url.shortUrl}</a>
                                        </TableCell>
                                        <TableCell align='center' style={{ colWidth: '2em' }}>
                                            <a href={url.longUrl}>{url.longUrl}</a>
                                        </TableCell>
                                        {/* <TableCell align='right'>{url.urlCode}</TableCell> */}
                                        <TableCell align='center' style={{ width: '20%' }}>
                                            <Moment format='YYYY-MM-DD HH:mm'>{url.date}</Moment>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </section>
        </Layout>
    );
};

export default ViewURL;
