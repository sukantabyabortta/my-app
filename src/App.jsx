// import './App.css'
import './styles/bootstrap.min.css'
import './styles/component.css'
import './styles/style.css'
import './styles/responsive.css'
import { Routes, Route } from "react-router-dom"


import Header from "./components/Header/Header";
import Home from "./components/Homepage/Home";
import About from "./components/AboutPage/about";
import Blog from "./components/BlogPage/Blog";
import BlogDetails from "./components/BlogPage/blogDetails";
import Contact from "./components/ContactPage/Contact";
import AcRepair from "./components/ServicePage/ac-repair";
import WashingMachine from "./components/ServicePage/washing-machine";
import Footer from "./components/Footer/footer";
import ComingSoon from "./components/comingsoon";
import NotFound from "./components/NotFound";


import Users from "./components/Users/Users";
import AddUser from "./components/Users/AddUser";
import EditUser from "./components/Users/EditUser";

const  App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/user" element={<User />} /> */}

        {/* Users */}
        <Route path="/users" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />

        {/* Services */}
         <Route path="/ac-repair" element={<AcRepair />} />
          <Route path="/washing-machine" element={<WashingMachine />} />

        {/* Redirect unknown pages */}
        <Route path="/comingsoon" element={<ComingSoon />} />

        {/* 404 Page (ALWAYS LAST) */}
        <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App;
