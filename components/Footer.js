import React from "react";

const Footer = () => {
  return (
    <div className="container-footer">
      <footer id="footer">
        <div className="row">
          <div className="col-lg-12">
            <ul className="list-unstyled list-inline">
              <li className="float-lg-right">
                <a href="#top">Back to top</a>
              </li>
              <li>
                <a href="http://boskysoft.com/blog" target="_blank">
                  Blog
                </a>
              </li>

              <li>
                <a href="https://twitter.com/igoy_k" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/kumarryogeshh/" target="_blank">
                  GitHub
                </a>
              </li>
            </ul>
            <p>
              Made by{" "}
              <a href="http://ykumar.in" target="_blank">
                Yogesh Kumar
              </a>
              .
            </p>
            <p>
              Code released under the{" "}
              <a
                href="https://github.com/kumarryogeshh/react-nextjs-template/blob/master/LICENSE"
                target="_blank"
              >
                MIT License
              </a>
              .
            </p>
            <p>
              Based on{" "}
              <a href="https://getbootstrap.com" rel="nofollow">
                Bootstrap
              </a>
              . Icons from{" "}
              <a href="https://fontawesome.com/" rel="nofollow">
                Font Awesome
              </a>
              . Web fonts from{" "}
              <a href="https://fonts.google.com/" rel="nofollow">
                Google
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
