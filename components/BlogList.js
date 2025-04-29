import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function BlogList({ posts }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="blog-list responsive-text d-flex flex-wrap justify-content-center">
        {posts.map((post) => (
            <React.Fragment key={post.slug}>
                <div className="col-12 d-flex flex-wrap justify-content-center" data-aos="fade-up">
                    <Link href={`/posts/${post.slug}`}>
                        <a className="card border-0 text-dark text-decoration-none">
                            {post.background && (
                            <img
                                src={post.background}
                                alt={post.title}
                                className="mx-auto d-block"
                            />
                            )}

                            <div className="card-body">
                            <h2 className="card-title text-start">{post.title}</h2>
                            <p
                                className="card-text preview-text"
                                style={{
                                overflow: "hidden",
                                display: "-webkit-box",
                                WebkitLineClamp: 5,
                                WebkitBoxOrient: "vertical",
                                }}
                            >
                                {post.content.replace(/[#>*_`-]/g, "").slice(0, 400)}...
                            </p>
                            </div>

                            <div className="card-footer d-flex align-items-center border-0 rounded">
                            {post.writer && (
                                <img
                                src={post.writer}
                                alt={post.author}
                                className="writer-image rounded-circle me-2 p-0"
                                />
                            )}
                            <div className="flex-grow-1">
                                <div className="fw-semibold">{post.author}</div>
                                <div className="text-muted small">Posted on {post.date}</div>
                            </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <hr style={{ width: "90%", margin: "32px auto" }} />
            </React.Fragment>
        ))}
    </section>

  );
}
