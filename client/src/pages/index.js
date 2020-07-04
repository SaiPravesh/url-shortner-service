import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title='Home' />
        <div
            style={{
                margin: `5em auto`,
                maxWidth: `960px`,
                padding: `0 1.0875rem 1.45rem`,
            }}>
            <h1>URL shortner</h1>
            <p>
                This application provides a way to create a new unique short URL for any given long
                URL, similar to bit.ly
            </p>
            <p>This is a fullstack app, build using the following tech:</p>
            <ul>
                <li>
                    <b>Gatsby.js</b> for static site generation
                </li>
                <li>
                    <b>React.js</b> for fromtend using only functional components with hooks
                </li>
                <li>
                    <b>Material UI</b> for styling
                </li>
                <li>
                    <b>React-hook-form</b> to submit create URL form
                </li>
                <li>
                    <b>Node.js</b> as the backend server
                </li>
                <li>
                    <b>Express.js</b> as routing framework
                </li>
                <li>
                    <b>MongoDB</b> to persist data
                </li>
                <li>
                    <b>Netlify</b> as a cloud provider to host this app
                </li>
            </ul>
            {/* </p> */}
        </div>
    </Layout>
);

export default IndexPage;
