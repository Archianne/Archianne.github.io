import { HashRouter as Router, Switch, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import BlogPost from "../../pages/blog_post";

const Home = lazy(() => import("../../pages/home"));
const Portfolio = lazy(() => import("../../pages/portfolio"));
const Links = lazy(() => import("../../pages/links"));
const Contact = lazy(() => import("../../pages/contact"));
const Blog = lazy(() => import("../../pages/blog"));

const Content = () => {
  return (
      <Router>
        <Switch>
          <Suspense fallback={<div>Loading</div>}>
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/links" component={Links} />
            <Route path="/blog/" component={Blog} />
            <Route path="/post/:slug" component={BlogPost} />
          </Suspense>
        </Switch>
      </Router>
  );
};

export default Content;

