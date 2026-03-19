import { Link } from "react-router-dom";

const Breadcrumbs = ({ pageTitle, items = [], current }) => {

  const breadcrumbItems = [
    ...items,
    { label: current || pageTitle }
  ];

  return (
    <section className="breadcrumbs">
      <div className="container">

        <h1>{pageTitle}</h1>

        <ul>
          {breadcrumbItems.map((item, index) => (
            <li key={index}>
              {item.link ? (
                <Link to={item.link}>{item.label}</Link>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

export default Breadcrumbs;