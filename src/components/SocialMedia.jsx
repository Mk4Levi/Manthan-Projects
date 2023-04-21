//
function SocialMedia() {
  return (
    <section>
      <footer className="footer">
        <div className="footer-header">Social Media Links :- </div>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline-block">
            <a
              className="link link-mkp"
              href="https://github.com/Mk4Levi"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <b style={{ color: "black" }}>Github</b>{" "}
            </a>
          </li>
          <li className="list-item-inline-block">
            <a
              className="link link-mkp"
              href="https://twitter.com/Mk4Coder"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <b style={{ color: "black" }}>Twitter</b>{" "}
            </a>
          </li>
          <li className="list-item-inline-block">
            <a
              className="link link-mkp"
              href="https://www.linkedin.com/in/manthan-kumar-0bb1471bb/"
              target="_blank"
              rel="noreferrer"
            >
              <b style={{ color: "black" }}>LinkedIn</b>
            </a>
          </li>
          <li className="list-item-inline-block">
            <a
              className="link link-mkp"
              href="https://www.reddit.com/user/Mkp_Reddit"
              target="_blank"
              rel="noreferrer"
            >
              <b style={{ color: "black" }}>Reddit</b>
            </a>
          </li>
          <li className="list-item-inline-block">
            <b className="link link-mkp" style={{ color: "black" }}>
              Discord : Mkp7urek
            </b>
          </li>
        </ul>
      </footer>
    </section>
  );
}

export default SocialMedia;
