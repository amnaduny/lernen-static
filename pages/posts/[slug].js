// pages/posts/[slug].js

import { useRouter } from "next/router";
import Head from "next/head";
import { getAllPosts } from "../../lib/posts";
import MarkdownIt from "markdown-it";
import Link from "next/link";

// Initialize Markdown parser
const md = new MarkdownIt();

// Override renderer for images
const defaultRender = md.renderer.rules.image || function (tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options);
};
md.renderer.rules.image = function (tokens, idx, options, env, self) {
  tokens[idx].attrPush(["class", "image-article"]);
  return defaultRender(tokens, idx, options, env, self);
};

// Override renderer for links
const defaultLinkRender = md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options);
};
md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  const aIndex = tokens[idx].attrIndex("target");
  if (aIndex < 0) {
    tokens[idx].attrPush(["target", "_blank"]);
  } else {
    tokens[idx].attrs[aIndex][1] = "_blank";
  }
  const relIndex = tokens[idx].attrIndex("rel");
  if (relIndex < 0) {
    tokens[idx].attrPush(["rel", "noopener noreferrer"]);
  } else {
    tokens[idx].attrs[relIndex][1] = "noopener noreferrer";
  }
  return defaultLinkRender(tokens, idx, options, env, self);
};

// The page component
export default function Post({ post }) {
  const router = useRouter();

  if (!post) {
    return <div>Post not found</div>;
  }

  const htmlConverter = md.render(post.content);

  return (
    <div>
      {/* Page metadata */}
      <Head>
        <title>{post.title} | Lernen Education</title>
      </Head>

      <section className="heroArticle responsive-text">
        <div className="hero-image-container p-2 p-sm-4">
          {post.background && (
            <img
              src={post.background}
              alt={post.title}
              className="hero-image img-fluid"
            />
          )}
        </div>

        <article className="container p-2 p-sm-4">
          <h1 className="mb-3">{post.title}</h1>
          <div className="d-flex align-items-center mb-2">
            {post.writer && (
              <img
                src={post.writer}
                alt={post.author}
                className="writer-image rounded-circle me-2"
              />
            )}
            <div>
              <div className="fw-semibold">{post.author}</div>
              <div className="text-muted small">Posted on {post.date}</div>
            </div>
          </div>

          <hr />
          <div dangerouslySetInnerHTML={{ __html: htmlConverter }} />
          <hr />

          <div className="mt-4 mb-2">
            <Link href="/blog">
              <a className="btn custom-btn mx-auto">Kembali</a>
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}

// Generate all static paths
export async function getStaticPaths() {
  const posts = getAllPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false, // Only build available slugs
  };
}

// Fetch data for each slug
export async function getStaticProps({ params }) {
  const posts = getAllPosts();
  const decodedSlug = decodeURIComponent(params.slug);
  const post = posts.find((p) => p.slug === decodedSlug);

  return {
    props: {
      post: post || null,
    },
  };
}
