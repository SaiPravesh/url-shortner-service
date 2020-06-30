import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title='Home' />
        <h1>URL shortner service</h1>
        <p>
            This application provides a way to create a new unique short URL for any given long URL
        </p>
        {/* <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <Link to='/page-2/'>Go to page 2</Link> <br />
        <Link to='/using-typescript/'>Go to "Using TypeScript"</Link> */}
    </Layout>
);

export default IndexPage;
