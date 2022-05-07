import React from "react";
import { Article } from "../../component";
import { blg1, blg2, blg3, blg4, blg5 } from "./import";
import "./blog.css";

const date = "Sep 26, 2021";
const title = "GPT-3 and Open  AI is the future. Let us exlore how it is?";
const rdf = "Read Full Article";
function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-heading__groupA">
          <Article blg={blg1} date={date} title={title} rdf={rdf} />
        </div>
        <div className="gpt3__blog-heading__groupB">
          <Article blg={blg2} date={date} title={title} rdf={rdf} />
          <Article blg={blg3} date={date} title={title} rdf={rdf} />
          <Article blg={blg4} date={date} title={title} rdf={rdf} />
          <Article blg={blg5} date={date} title={title} rdf={rdf} />
        </div>
      </div>
    </div>
  );
}

export default Blog;
