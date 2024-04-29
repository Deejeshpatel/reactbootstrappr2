import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { Nav, Container } from "react-bootstrap"
import { Col, Row } from 'react-bootstrap';


function App() {

  return (
    <>
      <header id="header" class="header fixed-top">
        <div class="branding">
          <Container className='position-relative d-flex align-items-center justify-content-between'>
            <a href="index.html" class="logo d-flex align-items-center">
              <h1 class="">Deejesh</h1>
            </a>
            <Nav id="navmenu" class="navmenu">
              <ul>
                <li><a href="#hero" class="">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#team">Team</a></li>
              </ul>
              <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </Nav>
          </Container>
        </div>
      </header>


      <section id="hero" class="hero section">

        <img src="src/img/hero-bg.jpg" alt="" data-aos="fade-in"></img>

        <Container data-aos="fade-up" data-aos-delay="100">
          <div class="row justify-content-start">
            <div className="col-8">
              <h2>Welcome to Day</h2>
              <p>We are team of talented designers making websites with Bootstrap</p>
              <a href="#about" className="btn-get-started">Get Started</a>
            </div>
          </div>
        </Container>

      </section>
      <section id="about" class="about section">


        <Container className="section-title" data-aos="fade-up">
          <span>About Us</span>
          <h2>About Us</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </Container>

        <Container>
          <Row className="gy-4">
            <Col lg={6} order={1} className="order-lg-2" data-aos="fade-up" data-aos-delay="100">
              <img src="src/img/about.jpg" className="img-fluid" alt="" />
            </Col>
            <Col lg={6} order={2} className="order-lg-1 content" data-aos="fade-up" data-aos-delay="200">
              <h3>Voluptatem dignissimos provident quasi corporis</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
              </ul>
              <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
            </Col>
          </Row>
        </Container>

      </section>

      <section id="cards" class="cards section">

        <Container>
          <Row className="no-gutters">
            <Col lg={4} md={6} className="card" data-aos="fade-up" data-aos-delay="100">
              <span>01</span>
              <h4>Lorem Ipsum</h4>
              <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
            </Col>
            <Col lg={4} md={6} className="card" data-aos="fade-up" data-aos-delay="200">
              <span>02</span>
              <h4>Repellat Nihil</h4>
              <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
            </Col>
            <Col lg={4} md={6} className="card" data-aos="fade-up" data-aos-delay="300">
              <span>03</span>
              <h4> Ad ad velit qui</h4>
              <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
            </Col>
            <Col lg={4} md={6} className="card" data-aos="fade-up" data-aos-delay="400">
              <span>04</span>
              <h4>Repellendus molestiae</h4>
              <p>Inventore quo sint a sint rerum. Distinctio blanditiis deserunt quod soluta quod nam mider lando casa</p>
            </Col>
            <Col lg={4} md={6} className="card" data-aos="fade-up" data-aos-delay="400">
              <span>05</span>
              <h4>Sapiente Magnam</h4>
              <p>Vitae dolorem in deleniti ipsum omnis tempore voluptatem. Qui possimus est repellendus est quibusdam</p>
            </Col>
            <Col lg={4} md={6} className="card" data-aos="fade-up" data-aos-delay="600">
              <span>06</span>
              <h4>Facilis Impedit</h4>
              <p>Quis eum numquam veniam ea voluptatibus voluptas. Excepturi aut nostrum repudiandae voluptatibus corporis sequi</p>
            </Col>
          </Row>
        </Container>

      </section>

      <section id="services" class="services section">


        <div class="container section-title" data-aos="fade-up">
          <span class="">Services</span>
          <h2>Services</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <Container>
          <Row className="gy-4">
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-activity"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Nesciunt Mete</h3>
                </a>
                <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-broadcast"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Eosle Commodi</h3>
                </a>
                <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-easel"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Ledo Markt</h3>
                </a>
                <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
              </div>
            </Col>
            {/* Add more Col components for additional services */}
          </Row>
        </Container>

      </section>

      <section id="portfolio" class="portfolio section">


        <Container className="section-title">
          <span>Portfolio</span>
          <h2>Portfolio</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </Container>

        <div class="container">

          <div className="isotope-layout"  >

           <Nav id="navmenu" className="navmenu">
              
              <li><a href="#hero" class="">All</a></li>
              <li><a href="#hero" class="">App</a></li>
              <li><a href="#hero" class="">Card</a></li>
              <li><a href="#hero" class="">web</a></li>
              

             </Nav>

            <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <img src="src/img/masonry-portfolio-1.jpg" class="img-fluid" alt=""></img>
                <div class="portfolio-info">
                  <h4>App 1</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href="src/img/masonry-portfolio-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img src="src/img/masonry-portfolio-2.jpg" class="img-fluid" alt=""></img>
                <div class="portfolio-info">
                  <h4>Product 1</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href="src/img/masonry-portfolio-2.jpg" title="Product 1" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <img src="src/img/masonry-portfolio-3.jpg" class="img-fluid" alt=""></img>
                <div class="portfolio-info">
                  <h4>Branding 1</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href="src/img/masonry-portfolio-3.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <img src="src/img/masonry-portfolio-4.jpg" class="img-fluid" alt=""></img>
                <div class="portfolio-info">
                  <h4>App 2</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href="src/img/masonry-portfolio-4.jpg" title="App 2" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img src="src/img/masonry-portfolio-5.jpg" class="img-fluid" alt=""></img>
                <div class="portfolio-info">
                  <h4>Product 2</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href="src/img/masonry-portfolio-5.jpg" title="Product 2" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <img src="src/img/masonry-portfolio-6.jpg" class="img-fluid" alt=""></img>
                <div class="portfolio-info">
                  <h4>Branding 2</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href="src/img/masonry-portfolio-6.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <img src="src/img/masonry-portfolio-7.jpg" class="img-fluid" alt=""></img>
                <div class="portfolio-info">
                  <h4>App 3</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href="src/img/masonry-portfolio-7.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img src="src/img/masonry-portfolio-8.jpg" class="img-fluid" alt=""></img>
                <div class="portfolio-info">
                  <h4>Product 3</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href="src/img/masonry-portfolio-8.jpg" title="Product 3" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <img src="src/img/masonry-portfolio-9.jpg" class="img-fluid" alt=""></img>
                <div class="portfolio-info">
                  <h4>Branding 3</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href="src/img/masonry-portfolio-9.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      <section id="team" class="team section">


        <div class="container section-title" data-aos="fade-up">
          <span class="">Team</span>
          <h2>Team</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div class="container">

          <div class="row">

            <div class="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
              <div class="member">
                <img src="src/img/team-1.jpg" class="img-fluid" alt=""></img>
                <div class="member-content">
                  <h4>Walter White</h4>
                  <span>Web Development</span>
                  <p>
                    Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                  </p>
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
              <div class="member">
                <img src="src/img/team-2.jpg" class="img-fluid" alt=""></img>
                <div class="member-content">
                  <h4>Sarah Jhinson</h4>
                  <span>Marketing</span>
                  <p>
                    Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                  </p>
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
              <div class="member">
                <img src="src/img/team-3.jpg" class="img-fluid" alt=""></img>
                <div class="member-content">
                  <h4>William Anderson</h4>
                  <span>Content</span>
                  <p>
                    Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                  </p>
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>


      <footer id="footer" class="footer position-relative">

        <Container className="footer-top">
          <Row className="gy-4">
            <Col lg={4} md={6}>
              <div className="footer-about">
                <a href="index.html" className="logo">Day</a>
                <div className="footer-contact pt-3">
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                  <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                  <p><strong>Email:</strong> <span>info@example.com</span></p>
                </div>
                <div className="social-links d-flex mt-4">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </Col>

            <Col lg={2} md={3} className="footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </Col>

            <Col lg={4} md={12} className="footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
              <form action="forms/newsletter.php" method="post" className="php-email-form">
                <div className="newsletter-form"><input type="email" name="email" /><input type="submit" value="Subscribe" />
                </div>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your subscription request has been sent. Thank you!</div>
              </form>
            </Col>
          </Row>
        </Container>

        
      </footer>


    </>
  )
}

export default App