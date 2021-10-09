import { PageHeader } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="footer"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration={500}
    >
      <div className="footer-newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4>Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
            </div>
            <div className="col-lg-6">
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" defaultValue="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <Link to="/">Trang chủ</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <Link to ="/360-irregular">Tra động từ</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <Link to ="/exercise">Đề thi</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Dịch văn bản</a>
                </li>
                
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">EngLish</a>
                </li>
                
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Phú Bình <br />
                Thái Nguyên
                <br />
                Việt Nam <br />
                <br />
                <strong>Phone:</strong> +84 378 628 761
                <br />
                <strong>Email:</strong> minhtien99tn@gmail.com
                <br />
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-info">
              <h3>About Minh Tiến</h3>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                nada terra videa magna derita valies darta donna mare fermentum
                iaculis eu non diam phasellus.
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter" />
                </a>
                <Link to ="https://www.facebook.com/minhtien1999tn/" className="facebook">
                  <i className="bx bxl-facebook" />
                </Link>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram" />
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>Minh Tiến</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
        
          Designed by <a >Minh Tiến</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
