import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'



const HomeScreen = () => {

    var searchShow = function () {
        var searchWrap = $('.search-wrap')
        $('.js-search-open').on('click', function (e) {
            e.preventDefault()
            searchWrap.addClass('active')
            setTimeout(function () {
                searchWrap.find('.form-control').focus()
            }, 300)
        })
        $('.js-search-close').on('click', function (e) {
            e.preventDefault()
            searchWrap.removeClass('active')
        })
    }
    searchShow()

    var siteMenuClone = function () {

        $('<div class="site-mobile-menu"></div>').prependTo('.site-wrap')

        $('<div class="site-mobile-menu-header"></div>').prependTo('.site-mobile-menu')
        $('<div class="site-mobile-menu-close "></div>').prependTo('.site-mobile-menu-header')
        $('<div class="site-mobile-menu-logo"></div>').prependTo('.site-mobile-menu-header')

        $('<div class="site-mobile-menu-body"></div>').appendTo('.site-mobile-menu')



        $('.js-logo-clone').clone().appendTo('.site-mobile-menu-logo')

        $('<span class="ion-ios-close js-menu-toggle"></div>').prependTo('.site-mobile-menu-close')


        $('.js-clone-nav').each(function () {
            var $this = $(this)
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body')
        })


        // setTimeout(function () {

        var counter = 0
        $('.site-mobile-menu .has-children').each(function () {
            var $this = $(this)

            $this.prepend('<span class="arrow-collapse collapsed">')

            $this.find('.arrow-collapse').attr({
                'data-toggle': 'collapse',
                'data-target': '#collapseItem' + counter,
            })

            $this.find('> ul').attr({
                'class': 'collapse',
                'id': 'collapseItem' + counter,
            })

            counter++

        })

        // }, 1000)

        $('body').on('click', '.arrow-collapse', function (e) {
            var $this = $(this)
            if ($this.closest('li').find('.collapse').hasClass('show')) {
                $this.removeClass('active')
            } else {
                $this.addClass('active')
            }
            e.preventDefault()
        })

        // $(window).resize(function () {
        //     var $this = $(this),
        //         w = $this.width()

        //     if (w > 768) {
        //         if ($('body').hasClass('offcanvas-menu')) {
        //             $('body').removeClass('offcanvas-menu')
        //         }
        //     }
        // })

        $('body').on('click', '.js-menu-toggle', function (e) {
            var $this = $(this)
            e.preventDefault()

            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu')
                $this.removeClass('active')
            } else {
                $('body').addClass('offcanvas-menu')
                $this.addClass('active')
            }
        })

        // click outisde offcanvas
        $(document).mouseup(function (e) {
            var container = $(".site-mobile-menu")
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu')
                }
            }
        })
    }
    siteMenuClone()




    return (
        <Fragment>

            <div class="site-wrap">
                <div class="site-navbar py-2">

                    <div class="search-wrap">
                        <div class="container">
                            <a href="#" class="search-close js-search-close"><span class="icon-close2"></span></a>
                            <form action="#" method="post">
                                <input type="text" class="form-control" placeholder="Search keyword and hit enter..." />
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
                                        <li class="active"><Link to="/">Home</Link></li>
                                        <li><Link to="/store">Store</Link></li>
                                        <li class="has-children">
                                            <a href="#">Products </a>
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
                                        <li><Link to="/add-stock">Add Stock</Link></li>
                                        {/* <li><a href="contact.html">Contact</a></li> */}
                                    </ul>
                                </nav>
                            </div>
                            <div class="icons">

                                <a href="#" class="icons-btn d-inline-block js-search-open"><i class="fa fa-search" aria-hidden="true"></i>
                                </a>

                                <a href="#" class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span
                                    class="icon-menu"></span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-interval="1000">
                            <img src="./images/banner4.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item" data-interval="1000">
                            <img src="./images/banner1.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="./images/banner2.jpg" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                {/* <div class="owl-carousel owl-single px-0">
                <div class="site-blocks-cover overlay" style={{ backgroundImage: "url('./images/banner4.jpg')" }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 mx-auto align-self-center">
                                <div class="site-block-cover-content text-center">
                                    <h1 class="mb-0"><strong class="text-primary">Pharmative</strong> Opens 24 Hours</h1>

                                    <div class="row justify-content-center mb-5">
                                        <div class="col-lg-6 text-center">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex perspiciatis non quibusdam
                                              vel quidem.</p>
                                        </div>
                                    </div>

                                    <p><a href="#" class="btn btn-primary px-5 py-3">Shop Now</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="site-blocks-cover overlay" style={{ backgroundImage: "url('./images/banner2.jpg')" }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 mx-auto align-self-center">
                                <div class="site-block-cover-content text-center">
                                    <h1 class="mb-0">New Medicine <strong class="text-primary">Everyday</strong></h1>
                                    <div class="row justify-content-center mb-5">
                                        <div class="col-lg-6 text-center">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex perspiciatis non quibusdam
                      vel quidem.</p>
                                        </div>
                                    </div>
                                    <p><a href="#" class="btn btn-primary px-5 py-3">Shop Now</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> */}
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
              with <i class="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com"
                                        target="_blank" class="text-primary">Colorlib</a>. Downloaded from <a href="https://themeslab.org/"
                                            target="_blank">Themeslab</a>

                                </p>
                            </div>

                        </div>
                    </div>
                </footer>

            </div>




        </Fragment>
    )
}

export default HomeScreen