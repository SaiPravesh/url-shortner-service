import React from 'react';
import { Link } from 'gatsby';

export default function menu() {
    return (
        <section className='menu'>
            <ul className='list'>
                <li>
                    <Link to='/view-url'>View URL</Link>
                </li>
                <li>
                    <Link to='/create-url'>Create URL</Link>
                </li>
            </ul>
        </section>
    );
}
