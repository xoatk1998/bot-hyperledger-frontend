import React, { Component } from "react";
import Footer from '../components/footer'
import "../css/contact.css";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,

        };
    }
    render() {
        const { error } = this.state;
        if (error) {
            return <div>error</div>
        }
        else
            return (
                <div>
                    <div className="nav"></div>
                    <section className="section section-skew">
                        <div className="container">
                            <div className="contact-box mt--300">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-heading">
                                            <h3>Liên hệ với chúng tôi</h3>
                                            <p>Đội ngũ phát triển rất luôn sẵn sàng lắng nghe phản hồi từ bạn. Mọi ý kiến của các bạn
                                đều giúp chúng tôi hoàn thiện hơn hệ thống của mình</p>
                                        </div>
                                        <div className="footer-address">
                                            <p>Văn phòng chính : Tầng 10 107 Nguyễn Phong Sắc</p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div action="#" method="post" className="contact-us-form" >
                                            <h6>Hoặc liên hệ ngay với chúng tôi:</h6>
                                            <form id="contact-form" className="m-login__form m-form" action="">
                                                <div className="alert alert-danger d-none" role="alert"
                                                    id="contact_errors"></div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id="name"
                                                                placeholder="Tên của bạn ..." required="required"></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control" id="email"
                                                                placeholder="Địa chỉ Email ..." required="required">
                                                            </input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input type="number" name="phone" 
                                                                className="form-control"
                                                                id="phone" placeholder="Số điện thoại ...">
                                                            </input>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input type="text" name="company"  size="40"
                                                                className="form-control" id="company"
                                                                placeholder="Đơn vị ...">
                                                            </input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <textarea name="message" id="message" className="form-control" rows="10"
                                                                cols="25" placeholder="Phản hồi của bạn ..."></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="row">
                                                <div className="col-sm-12 m--margin-top-20 text-center">
                                                    <button type="button"
                                                        className="btn softo-solid-btn btn-primary m-2" id="btnContactUs">
                                                        Gửi
                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section >
                    <Footer />
                </div>
            )
    }
}
export default Contact;