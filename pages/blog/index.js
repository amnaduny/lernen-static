// pages/blog/index.js

import BlogList from "../../components/BlogList";
import { getAllPosts } from "../../lib/posts";
import Head from "next/head";

export default function HomeBlog({ posts }) {
  return (
    <div className="blog-container">
      <Head>
        <title>Blog Beasiswa | Lernen Education</title>
      </Head>

      <section className="heroBlog">
        <div className="title text-center mt-5 responsive-text">
          <h2>Blog Beasiswa</h2>
          <p>
            <i>
              " Temukan berbagai informasi, tips, dan pengalaman seputar dunia beasiswa <br />
              mulai dari peluang terbaru, cara mendaftar, hingga kisah sukses penerima beasiswa. <br />
              Blog ini hadir untuk membantu kamu meraih mimpi pendidikan melalui beasiswa! "
            </i>
          </p>
        </div>
        <hr className="hr-hero-blog d-flex justify-center" />
      </section>

      <BlogList posts={posts} />
    </div>
  );
}

// Fetch all posts during build time
export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
