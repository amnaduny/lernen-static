// pages/posts/[slug].js

import { useRouter } from "next/router";
import Head from "next/head";
import { getAllPosts } from "../../lib/posts";
import MarkdownIt from "markdown-it";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram, FaTiktok,FaGlobe } from 'react-icons/fa';

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
  if (!post) return <div>Post not found</div>;
  const baseUrl = "https://lernenindonesia.com";
  const shareUrl = `${baseUrl}/posts/${post.slug}`;


  const creditText = `
    Artikel ini dipublikasikan oleh Lernen Education.
    Klik untuk membaca: ${shareUrl}

    Instagram : @lernen.education
    Tiktok : @lernen.education
    Website : lernenindonesia.com
    Whatsapp : +62 823-3750-6356
      `;

      const shareToSocialMedia = (platform) => {
        const encodedTitle = encodeURIComponent(post.title);
        const encodedSummary = encodeURIComponent(post.summary || "");
        const encodedCredit = encodeURIComponent(creditText);
        const encodedUrl = encodeURIComponent(shareUrl);
      
        let shareLink = "";
      
        if (platform === 'whatsapp') {
          const whatsappText = `${post.title}\n\n${post.summary || ""}\n\nArtikel ini dipublikasikan oleh Lernen Education.\nKlik untuk membaca: ${shareUrl}\n\nInstagram : @lernen.education\nTiktok : @lernen.education\nWebsite : lernenindonesia.com\nWhatsapp : +62 823-3750-6356`;
          shareLink = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`;
        } else {
          const fullText = `${encodedTitle}%0A${encodedSummary}%0A%0A${encodedCredit}`;
          if (platform === 'facebook') {
            shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${fullText}`;
          } else if (platform === 'twitter') {
            shareLink = `https://twitter.com/intent/tweet?text=${fullText}&url=${encodedUrl}`;
          } else if (platform === 'linkedin') {
            shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
          } else if (platform === 'instagram') {
            shareLink = `https://www.instagram.com/lernen.education?igsh=MWd5c3B1bWd2M2t0Yg==`;
          } else if (platform === 'tiktok') {
            shareLink = `https://www.tiktok.com/@lernen.education?is_from_webapp=1&sender_device=pc`;
          } else if (platform === 'web') {
            shareLink = `https://www.lernenindonesia.com`;
          }
        }
      
        window.open(shareLink, "_blank");
      };
      
      const htmlConverter = md.render(post.content);
  return (
    <div>
      {/* Page metadata */}
      <Head>
        <title>{post.title} | Lernen Education</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary || "Baca artikel dari Lernen Education."} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://lernenindonesia.com/assets/logo-lernen.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://lernenindonesia.com/assets/logo-lernen.png" />
        <meta property="og:site_name" content="Lernen Education" />
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
          {/* Tombol share */}
          <div className="share-buttons mt-4">
            <p className="fs-5">Bagikan artikel ini:</p>
            <div className="d-flex flex-wrap gap-2">
              <button onClick={() => shareToSocialMedia('facebook')} className="btn btn-outline-primary">
                <FaFacebook /> 
              </button>
              <button onClick={() => shareToSocialMedia('twitter')} className="btn btn-outline-info">
                <FaTwitter /> 
              </button>
              <button onClick={() => shareToSocialMedia('linkedin')} className="btn btn-outline-secondary">
                <FaLinkedin /> 
              </button>
              <button onClick={() => shareToSocialMedia('whatsapp')} className="btn btn-outline-success">
                <FaWhatsapp /> 
              </button>
              <button onClick={() => shareToSocialMedia('instagram')} className="btn btn-outline-danger">
                <FaInstagram /> 
              </button>
              <button onClick={() => shareToSocialMedia('tiktok')} className="btn btn-outline-dark">
                <FaTiktok /> 
              </button>
              <button onClick={() => shareToSocialMedia('web')} className="btn btn-outline-info">
              <FaGlobe />
              </button>
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
