import "./style.css";
import React from "react";
import Footer from "../../Component/Footer";

const Blog = () => {
  return (
    <div className="blogBox">
      <div className="imgBox"></div>
      <div className="blogBodyBox">
        <h3>FROM THE BLOG</h3>
        <p>
          Last week, we launched Firewatch for the Nintendo Switch and to
          commemorate that launch (and as a nod to the amazing live-action
          trailer Derek Lieu put together for us) we’re doing a little giveaway.
        </p>
        <p>
          <b>
            Now that you can take Firewatch with you wherever you go, if you
            capture a picture or small video of Firewatch being played in the
            wild and post it to Twitter or Instagram, tag us and/or use the tag
            #firewatchswitch you’ll be automatically entered to win one of three
            of the exceptionally out-of-print-never-to-be-sold-again Olly Moss
            Firewatch screen prints we released in 2015.
          </b>
        </p>
        <p>
          We’ll pick our favorites on January 2nd and get in touch with you via
          DM. First place will have their pick of the three, second will have
          their pick of the remaining two and third place will get whichever
          print is left.
        </p>
      </div>
      <div className="footBox">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
