import React from 'react'
import { Link } from 'react-router-dom'

const Store = () => {
    return (
        <div>
            <div class="site-navbar py-2">

                <div class="search-wrap">
                    <div class="container">
                        <a href="#" class="search-close js-search-close"><span class="icon-close2"></span></a>
                        <form action="#" method="post">
                            <input type="text" class="form-control" placeholder="Search keyword and hit e</form>nter..." />
                        </form>
                    </div>
                </div>

                <div class="container">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="logo">
                            <div class="site-logo">
                                <a href="index.html" class="js-logo-clone"><strong class="text-primary">Pharma</strong>tive</a>
                            </div>
                        </div>
                        <div class="main-nav d-none d-lg-block">
                            <nav class="site-navigation text-right text-md-center" role="navigation">
                                <ul class="site-menu js-clone-nav d-none d-lg-block">
                                    <li><Link to="/">Home</Link></li>
                                    <li class="active"><Link to="/store">Store</Link></li>
                                    <li class="has-children">
                                        <a href="#">Products</a>
                                        <ul class="dropdown">
                                            <li><a href="#">Supplements</a></li>
                                            <li class="has-children">
                                                <a href="#">Vitamins</a>
                                                <ul class="dropdown">
                                                    <li><a href="#">Supplements</a></li>
                                                    <li><a href="#">Vitamins</a></li>
                                                    <li><a href="#">Diet &amp; Nutrition</a></li>
                                                    <li><a href="#">Tea &amp; Coffee</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Diet &amp; Nutrition</a></li>
                                            <li><a href="#">Tea &amp; Coffee</a></li>

                                        </ul>
                                    </li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="icons">
                            <a href="#" class="icons-btn d-inline-block js-search-open">
                                <i class="fa fa-search" aria-hidden="true"></i>
                                <span class="icon-search"></span></a>

                            <a href="#" class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span
                                class="icon-menu"></span></a>
                        </div>
                    </div>
                </div>
            </div>


            <div class="bg-light py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 mb-0"><a href="index.html">Home</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Store</strong></div>
                    </div>
                </div>
            </div>

            <div class="py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <h3 class="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
                            <div id="slider-range" class="border-primary"></div>
                            <input type="text" name="text" id="amount" class="form-control border-0 pl-0 bg-white" disabled="" />
                        </div>
                        <div class="col-lg-6 text-lg-right">
                            <h3 class="mb-3 h6 text-uppercase text-black d-block">Filter</h3>
                            <button type="button" class="btn btn-primary btn-md dropdown-toggle px-4" id="dropdownMenuReference"
                                data-toggle="dropdown">Reference</button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                <a class="dropdown-item" href="#">Relevance</a>
                                <a class="dropdown-item" href="#">Name, A to Z</a>
                                <a class="dropdown-item" href="#">Name, Z to A</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Price, low to high</a>
                                <a class="dropdown-item" href="#">Price, high to low</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-section bg-light">
                <div class="container">



                    <div class="row">
                        <div class="col-sm-6 col-lg-4 text-center item mb-4 item-v2">
                            <span class="onsale">Sale</span>
                            <a href="shop-single.html"> <img src="images/product_01.png" alt="Image" /></a>
                            <h3 class="text-dark"><a href="shop-single.html">Bioderma</a></h3>
                            <p class="price"><del>95.00</del> &mdash; $55.00</p>
                        </div>
                        <div class="col-sm-6 col-lg-4 text-center item mb-4 item-v2">
                            <a href="shop-single.html"> <img src="images/product_02.png" alt="Image" /></a>
                            <h3 class="text-dark"><a href="shop-single.html">Chanca Piedra</a></h3>
                            <p class="price">$70.00</p>
                        </div>
                        <div class="col-sm-6 col-lg-4 text-center item mb-4 item-v2">
                            <a href="shop-single.html"> <img src="images/product_03.png" alt="Image" /></a>
                            <h3 class="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                            <p class="price">$120.00</p>
                        </div>

                        <div class="col-sm-6 col-lg-4 text-center item mb-4 item-v2">

                            <a href="shop-single.html"> <img src="images/product_04.png" alt="Image" /></a>
                            <h3 class="text-dark"><a href="shop-single.html">Cetyl Pure</a></h3>
                            <p class="price"><del>45.00</del> &mdash; $20.00</p>
                        </div>
                        <div class="col-sm-6 col-lg-4 text-center item mb-4 item-v2">
                            <a href="shop-single.html"> <img src="images/product_05.png" alt="Image" /></a>
                            <h3 class="text-dark"><a href="shop-single.html">CLA Core</a></h3>
                            <p class="price">$38.00</p>
                        </div>
                        <div class="col-sm-6 col-lg-4 text-center item mb-4 item-v2">
                            <span class="onsale">Sale</span>
                            <a href="shop-single.html"> <img src="images/product_06.png" alt="Image" /></a>
                            <h3 class="text-dark"><a href="shop-single.html">Poo Pourri</a></h3>
                            <p class="price"><del>$89</del> &mdash; $38.00</p>
                        </div>

                        <div class="col-sm-6 col-lg-4 text-center item mb-4 item-v2">
                            <span class="onsale">Sale</span>
                            <a href="shop-single.html"> <img src="images/product_01.png" alt="Image" /></a>
                            <h3 class="text-dark"><a href="shop-single.html">Bioderma</a></h3>
                            <p class="price"><del>95.00</del> &mdash; $55.00</p>
                        </div>
                        <div class="col-sm-6 col-lg-4 text-center item mb-4 item-v2">
                            <a href="shop-single.html"> <img src="images/product_02.png" alt="Image" /></a>
                            <h3 class="text-dark"><a href="shop-single.html">Chanca Piedra</a></h3>
                            <p class="price">$70.00</p>
                        </div>
                        <div class="col-sm-6 col-lg-4 text-center item mb-4 item-v2">
                            <a href="shop-single.html"> <img src="images/product_03.png" alt="Image" /></a>
                            <h3 class="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                            <p class="price">$120.00</p>
                        </div>

                        <div class="col-sm-6 col-lg-4 text-center item mb-4 item-v2">

                            <a href="shop-single.html"> <img src="images/product_04.png" alt="Image" /></a>
                            <h3 class="text-dark"><a href="shop-single.html">Cetyl Pure</a></h3>
                            <p class="price"><del>45.00</del> &mdash; $20.00</p>
                        </div>
                        <div class="col-sm-6 col-lg-4 text-center item mb-4 item-v2">
                            <a href="shop-single.html"> <img src="images/product_05.png" alt="Image" /></a>
                            <h3 class="text-dark"><a href="shop-single.html">CLA Core</a></h3>
                            <p class="price">$38.00</p>
                        </div>
                        <div class="col-sm-6 col-lg-4 text-center item mb-4 item-v2">
                            <span class="onsale">Sale</span>
                            <a href="shop-single.html"> <img src="images/product_06.png" alt="Image" /></a>
                            <h3 class="text-dark"><a href="shop-single.html">Poo Pourri</a></h3>
                            <p class="price"><del>$89</del> &mdash; $38.00</p>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-12 text-center">
                            <div class="site-block-27">
                                <ul>
                                    <li><a href="#">&lt;</a></li>
                                    <li class="active"><span>1</span></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">&gt;</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="site-footer bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">

                            <div class="block-7">
                                <h3 class="footer-heading mb-4">About <strong class="text-primary">Pharmative</strong></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio voluptates
          sed dolorum excepturi iure eaque, aut unde.</p>
                            </div>

                        </div>
                        <div class="col-lg-3 mx-auto mb-5 mb-lg-0">
                            <h3 class="footer-heading mb-4">Navigation</h3>
                            <ul class="list-unstyled">
                                <li><a href="#">Supplements</a></li>
                                <li><a href="#">Vitamins</a></li>
                                <li><a href="#">Diet &amp; Nutrition</a></li>
                                <li><a href="#">Tea &amp; Coffee</a></li>
                            </ul>
                        </div>

                        <div class="col-md-6 col-lg-3">
                            <div class="block-5 mb-5">
                                <h3 class="footer-heading mb-4">Contact Info</h3>
                                <ul class="list-unstyled">
                                    <li class="address">203 Fake St. Mountain View, San Francisco, California, USA</li>
                                    <li class="phone"><a href="tel://23923929210">+2 392 3929 210</a></li>
                                    <li class="email">emailaddress@domain.com</li>
                                </ul>
                            </div>


                        </div>
                    </div>
                    <div class="row pt-5 mt-5 text-center">
                        <div class="col-md-12">
                            <p>

                                Copyright &copy;

                                All rights reserved | This template is made
        with <i class="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank"
                                    class="text-primary">Colorlib</a>. Downloaded from <a href="https://themeslab.org/" target="_blank">Themeslab</a>

                            </p>
                        </div>

                    </div>
                </div>
            </footer>
        </div>


    )
}

export default Store
