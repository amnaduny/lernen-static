// pages/posts/[slug].js

import { useRouter } from "next/router";
import Head from "next/head";
import { getAllPosts } from "../../lib/posts";
import MarkdownIt from "markdown-it";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram, FaTiktok, FaShareAlt } from 'react-icons/fa';

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
  if (!post) return <div>Post not found</div>;
  const baseUrl = "https://lernenindonesia.com";
  const shareUrl = `${baseUrl}/posts/${post.slug}`;


  const creditText = `
    Artikel ini dipublikasikan oleh Lernen Education.
    Klik untuk membaca: ${shareUrl}

    Instagram : @lernen.education
    Tiktok : @lernen.education
    Website : www.lernenindonesia.com
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
      }
    }

    window.open(shareLink, "_blank");
  };

  const shareToNative = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.summary,
          url: shareUrl,
        })
        .then(() => console.log("Share successful"))
        .catch((error) => console.error("Error sharing", error));
    } else {
      alert("Web Share API not supported on this browser. Please share manually.");
    }
  };

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
            <p className="share-text">Bagikan artikel ini:</p>
            <div className="d-flex flex-wrap gap-2">
              <button onClick={() => shareToSocialMedia('facebook')} className="btn btn-outline-primary">
                <FaFacebook />
              </button>
              <button onClick={() => shareToSocialMedia('twitter')} className="btn btn-outline-info">
                <FaTwitter />
              </button>
              <button onClick={() => shareToSocialMedia('linkedin')} className="btn btn-outline-primary">
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
              <button onClick={shareToNative} className="btn btn-outline-secondary">
                <FaShareAlt />
              </button>

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
                <p><strong>Artikel Lainnya:</strong></p>
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
