import Date from '../../components/date';
import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
  
    return {
      props: {
        postData,
      },
    };
  }
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
import Date from '../../components/date';

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          {/* Define your page-specific metadata here */}
          <title>{postData.title}</title>
          <meta name="description" content={postData.description} />
          {/* Add any other meta tags or elements you need */}
        </Head>
  
        {/* Keep the existing code here */}
  
        {/* Replace {postData.date} with this */}
        <Date dateString={postData.date} />
  
        {/* Keep the existing code here */}
      </Layout>
    );
  }
  