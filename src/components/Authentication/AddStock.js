import React, { Fragment } from 'react'
import M from "materialize-css"
import { Link } from 'react-router-dom'
const SignUp = () => {

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.modal')
        var elem = document.querySelectorAll('select')
        M.FormSelect.init(elem)
        M.Modal.init(elems)
    })
    return (
        <Fragment>
            <div class="site-navbar py-2">

                <div class="search-wrap">
                    <div class="container">
                        <a href="#" class="search-close js-search-close"><span class="icon-close2"><i class="fas fa-times"></i> </span></a>
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
                            <a href="#" class="icons-btn d-inline-block js-search-open"><span class="icon-search"></span></a>

                            <a href="#" class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span
                                class="icon-menu"></span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="h3 mb-5 text-black">Add Stock</h2>
                        </div>
                        <div class="col-md-12">

                            <form action="#" method="post">
                                <div class="p-3 p-lg-5 border">
                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <label for="c_fname" class="text-black">Name <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" id="c_fname" name="c_fname" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="qty" class="text-black">Qty <span class="text-danger">*</span></label>
                                            <input type="number" class="form-control" id="c_email" name="c_email" placeholder="" />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="c_subject" class="text-black">Price<span class="text-danger">*</span> </label>
                                            <input type="number" class="form-control" id="c_subject" name="c_subject" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="c_lname" class="text-black">Brand <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" id="c_lname" name="c_lname" />
                                        </div>
                                        <div class="col-md-6">
                                            <div class="dropdown">
                                                <label for="c_lname" class="text-black ">Category <span class="text-danger">*</span></label>
                                                <button class="btn btn-secondary btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Dropdown button
                                                  </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>



                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <label for="c_message" class="text-black">Image </label>
                                            <input type="file" name="c_message" id="c_message" class="form-control"></input>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-lg-12">
                                            <input type="submit" class="btn btn-primary btn-lg btn-block" value="Add Stock" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </Fragment>



    )
}

export default SignUp
