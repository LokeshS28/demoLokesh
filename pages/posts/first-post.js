import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../component/layout'

function FirstPost() {
    return (
    
        <Layout>
        <Head>
            <title>first post</title>
        </Head>

        <h1>post</h1>
        <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </h2>
        </Layout>
    
    )
}

export default FirstPost
