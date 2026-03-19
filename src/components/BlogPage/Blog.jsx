import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
import FaqPage from "../Faq/FaqPage";
import blogData from "./blogData";
const Blog = () => {

      const { blogList } = blogData;

      return (
            <>
            <Breadcrumbs 
                  pageTitle="Blog" 
                  items={[
                  { label: "Home", link: "/" }
                  ]}
            />
            <section className="blogPageCont">
                  <div className="container">
                        <ul>
                              {blogList.map(({ id, slug, category, image, altTxt, title, description }) => (
                                    <li key={id}>
                                          <img src={image} alt={altTxt || title} />
                                          <small>{category}</small>
                                          <h3>
                                                <Link to={`/blog/${slug}`}>{title.slice(0, 25) + "..."}</Link>
                                          </h3>
                                          <p>{description.slice(0, 30) + "..."}</p>
                                          <Link to={`/blog/${slug}`} className="read">Read More</Link>
                                    </li>
                              ))}
                        </ul>
                  </div>
            </section>
            <FaqPage />
            </>
      )
}

export default Blog;