// pages/posts/[slug].js

import { useRouter } from "next/router";
import Head from "next/head";
import { getAllPosts } from "../../lib/posts";
import MarkdownIt from "markdown-it";
import Link from "next/link";

// Initialize Markdown parser
const md = new MarkdownIt({ html: true });

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

// Function to split HTML content to insert "Baca Juga" after 3 paragraphs
function splitHtmlContent(html) {
  // Find the first 3 paragraph closing tags
  const regex = /<\/p>/gi;
  let matches = [];
  let match;
  
  // Find all </p> tags
  while ((match = regex.exec(html)) !== null) {
    matches.push(match.index);
  }
  
  // If we have at least 3 paragraphs
  if (matches.length >= 3) {
    const splitPoint = matches[2] + 4; // Add 4 to include "</p>"
    return {
      part1: html.substring(0, splitPoint),
      part2: html.substring(splitPoint)
    };
  }
  
  // If less than 3 paragraphs, return the original HTML as part1
  return {
    part1: html,
    part2: ""
  };
}

// The page component
export default function Post({ post, relatedPosts = [], moreRelatedPosts = [] }) {
  const router = useRouter();

  if (!post) {
    return <div>Post not found</div>;
  } 

  // Convert content to HTML first
  const fullHtml = md.render(post.content || "");
  
  // Split HTML after the third paragraph
  const { part1, part2 } = splitHtmlContent(fullHtml);

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
            className="hero-image" 
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
          
          <div className="article-content">
            {/* First 3 paragraphs */}
            <div dangerouslySetInnerHTML={{ __html: part1 }} />
            
            {/* First "Baca Juga" section after third paragraph - 2 suggestions */}
            {relatedPosts && relatedPosts.length > 0 && (
              <section className="baca-juga-box my-4 p-3 border rounded">
                <strong>Baca Juga:</strong>
                <ul>
                  {relatedPosts.map((rp, index) => (
                    <li key={`first-${index}`}>
                      <Link href={`/posts/${rp.slug}`} legacyBehavior>
                        <a>{rp.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            
            {/* Rest of the paragraphs */}
            {part2 && <div dangerouslySetInnerHTML={{ __html: part2 }} />}
            
            {/* Second "Baca Juga" section at end of article - 3 more suggestions */}
            {moreRelatedPosts && moreRelatedPosts.length > 0 && (
              <section className="baca-juga-box my-4 p-3 border rounded">
                <strong>Artikel Lainnya:</strong>
                <ul>
                  {moreRelatedPosts.map((rp, index) => (
                    <li key={`second-${index}`}>
                      <Link href={`/posts/${rp.slug}`} legacyBehavior>
                        <a>{rp.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
          
          <hr />

          <div className="mt-4 mb-2">
            <Link href="/blog" legacyBehavior>
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

// Fetch data for each slug + Related posts
export async function getStaticProps({ params }) {
  const posts = getAllPosts();
  const decodedSlug = decodeURIComponent(params.slug);
  const post = posts.find((p) => p.slug === decodedSlug);

  // Get other articles (except the one being read)
  const otherPosts = posts.filter((p) => p.slug !== decodedSlug);
  
  // Get 2 related posts for third paragraph
  const relatedPosts = otherPosts.slice(0, 1); // Jumlah artikel yang dimunculkan
  
  // Get 3 more related posts for end of article
  const moreRelatedPosts = otherPosts.slice(0, 3); //Jumlah artikel yang dimunculkan

  return {
    props: {
      post: post || null,
      relatedPosts,
      moreRelatedPosts,
    },
  };
}
