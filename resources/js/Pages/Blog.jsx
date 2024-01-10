import LevenFooter from '@/Layouts/LevenFooter';
import LevenLayout from '@/Layouts/LevenLayout';
import { Head } from '@inertiajs/react';
const Blog = () => {
    return (
        <>
        
        <Head title="Nilesh Agotariya - Software Developer" />

        <LevenLayout />

        <div id="main" className="site-main">
          <div id="main-content" className="single-page-content">
            <div id="primary" className="content-area">

            <div class="page-title">
                            <h2>Blog</h2>
                            <div class="page-subtitle">
                                <h4>My Diary</h4>
                            </div>
                        </div>

              <div id="content" className="page-content site-content single-post" role="main">

                <div className="row">
                  <div className=" col-xs-12 col-sm-12 ">
                    
                    <div id="portfolio_content_q" className="portfolio-content">

                      <ul className="portfolio-filters">
                        <li className="active">
                          <a className="filter btn btn-sm btn-link" data-group="category_all">All</a>
                        </li>
                        
                        <li>
                          <a className="filter btn btn-sm btn-link" data-group="category_detailed">eDiscovery</a>
                        </li>

                        <li>
                          <a className="filter btn btn-sm btn-link" data-group="category_detailed">C# .Net</a>
                        </li>

                        <li>
                          <a className="filter btn btn-sm btn-link" data-group="category_detailed">Laravel</a>
                        </li>
                                            
                      </ul>
                         
                     
                      
                    </div>

                    <div class="blog-masonry three-columns clearfix">
                      
                      <div class="item">
                        <div class="blog-card">
                          <div class="media-block">
                            <div class="category">
                              <a href="#" title="View all posts in WordPress">WordPress</a>
                            </div>
                            <a href="blog-post-1.html">
                              <img src="img/blog/blog_post_1.jpg" alt="How to Make a WordPress Plugin Extensible" title="" />
                              <div class="mask"></div>
                            </a>
                          </div>
                          <div class="post-info">
                            <div class="post-date">04 Dec 2019</div>
                            <a href="blog-post-1.html">
                              <h4 class="blog-item-title">How to Make a WordPress Plugin Extensible</h4>
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div class="item">
                        <div class="blog-card">
                          <div class="media-block">
                            <div class="category">
                              <a href="#" title="View all posts in Design">Design</a>
                            </div>

                            <a href="blog-post-1.html">
                              <img src="img/blog/blog_post_2.jpg" alt="6 Easy Steps to Better Icon Design" title="" />
                              <div class="mask"></div>
                            </a>
                          </div>
                          <div class="post-info">
                            <div class="post-date">04 Dec 2019</div>
                            <a href="blog-post-1.html">
                              <h4 class="blog-item-title">6 Easy Steps to Better Icon Design</h4>
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div class="item">
                        <div class="blog-card">
                          <div class="media-block">
                            <div class="category">
                              <a href="#" title="View all posts in UI">UI</a>
                            </div>
                            <a href="blog-post-1.html">
                              <img src="img/blog/blog_post_3.jpg" alt="Creative and Innovative Navigation Designs" title="" />
                              <div class="mask"></div>
                            </a>
                          </div>
                          <div class="post-info">
                            <div class="post-date">04 Dec 2019</div>
                            <a href="blog-post-1.html">
                              <h4 class="blog-item-title">Creative and Innovative Navigation Designs</h4>
                            </a>
                          </div>
                        </div>
                      </div>
                     
                      <div class="item">
                        <div class="blog-card">
                          <div class="media-block">
                            <div class="category">
                              <a href="#" title="View all posts in Design">Design</a>
                            </div>
                            <a href="blog-post-1.html">
                              <img src="img/blog/blog_post_4.jpg" alt="Why I Switched to Sketch For UI Design" title="" />
                              <div class="mask"></div>
                            </a>
                          </div>
                          <div class="post-info">
                            <div class="post-date">04 Dec 2019</div>
                            <a href="blog-post-1.html">
                              <h4 class="blog-item-title">Why I Switched to Sketch For UI Design</h4>
                            </a>
                          </div>
                        </div>
                      </div>
                    
                      <div class="item">
                        <div class="blog-card">
                          <div class="media-block">
                            <div class="category">
                              <a href="#" title="View all posts in E-Commerce">E-Commerce</a>
                            </div>
                            <a href="blog-post-1.html">
                              <img src="img/blog/blog_post_5.jpg" alt="An Overview of E-Commerce Platforms" title="" />
                              <div class="mask"></div>
                            </a>
                          </div>
                          <div class="post-info">
                            <div class="post-date">04 Dec 2019</div>
                            <a href="blog-post-1.html">
                              <h4 class="blog-item-title">An Overview of E-Commerce Platforms</h4>
                            </a>
                          </div>
                        </div>
                      </div>
                     
                      <div class="item">
                        <div class="blog-card">
                          <div class="media-block">
                            <div class="category">
                              <a href="#" title="View all posts in E-Commerce">E-Commerce</a>
                            </div>
                            <a href="blog-post-1.html">
                              <img src="img/blog/blog_post_6.jpg" alt="Designing the Perfect Feature Comparison Table" title="" />
                              <div class="mask"></div>
                            </a>
                          </div>
                          <div class="post-info">
                            <div class="post-date">04 Dec 2019</div>
                            <a href="blog-post-1.html">
                              <h4 class="blog-item-title">Designing the Perfect Feature Comparison Table</h4>
                            </a>
                          </div>
                        </div>
                      </div>
                     
                    </div>

                    <a class="btn btn-primary" href="#">See All Posts</a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <LevenFooter />
        </>
    );
};

export default Blog;
