import { useParams, Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
import blogData from "./blogData";
import NotFound from "../NotFound";

const BlogDetails = () => {

//   const { id } = useParams();

//   const blog = blogData.blogList.find(
//     (item) => item.id === parseInt(id)
//   );
const { blogList, social } = blogData;

const { slug } = useParams();

  const blog = blogData.blogList.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return <NotFound />;
  }

  return (
    <>
      <Breadcrumbs 
              pageTitle="Blog Details"
              current={blog.title}
              items={[
              { label: "Blog", link: "/blog" }
              ]}
        />
      {/* <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.altTxt || blog.title} />
      <p>{blog.description}</p> */}

      <section className="blogDetails">
        <div className="container">
            <div className="blogTxt">
                <figure>
                    <img src={blog.image} alt={blog.altTxt || blog.title} />
                    <div className="social">
                        {social.map(({ id, link, icon }) => (
                            <Link key={id} to={link} target="_blank">
                              <i className={icon} aria-hidden="true"></i>
                            </Link>
                        ))}
                    </div>
                </figure>
                <small>{blog.category}</small>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
            </div>
            <div className="serviceList">
                <h3>Our Complete List of Services</h3>
                <ul>
                      {blogList.map(({ id, slug, image, altTxt, title, price }) => (
                            <li key={id}>
                              <Link to={`/blog/${slug}`}>
                                <strong>
                                        {title.slice(0, 25) + "..."}
                                        <small>{price}</small>
                                  </strong>
                                  <img src={image} alt={altTxt || title} />
                              </Link>
                            </li>
                      ))}
                </ul>
            </div>
        </div>
    </section>
    </>
  );
};

export default BlogDetails;