import LevenFooter from "@/Layouts/LevenFooter";
import LevenLayout from "@/Layouts/LevenLayout";
import { Head } from "@inertiajs/react";

const Contact = () => {
    // Your component code here

    return (
        <>

            <Head title="Contact Me - Nilesh Agotariya - Software Developer" />

            <LevenLayout />

            <div id="main" class="site-main">
                <div id="main-content" class="single-page-content">
                    <div id="primary" class="content-area">
                        <div class="page-title">
                            <h2>Contact</h2>
                            <div class="page-subtitle">
                                <h4> Get in Touch</h4>
                            </div>
                        </div>

                        <div
                            id="content"
                            class="page-content site-content single-post"
                            role="main"
                        >
                            <div class="row">
                                <div class=" col-xs-12 col-sm-4 ">
                                    <div
                                        id="info_list_1"
                                        class="info-list-w-icon"
                                    >

                                        <div class="info-block-w-icon">
                                            <div class="ci-icon">
                                                <i class="linecons linecons-location"></i>
                                            </div>
                                            <div class="ci-text">
                                                <h4>Ahmedabad</h4>
                                                <p>
                                                    Ahmedabad, Gujarat, India
                                                </p>
                                            </div>
                                        </div>

                                        <div class="info-block-w-icon">
                                            <div class="ci-icon">
                                                <i class="linecons linecons-mail"></i>
                                            </div>
                                            <div class="ci-text">
                                                <h4>
                                                    <a href="mailto:agotariyanilesh@gmail.com"
                                                    >
                                                        agotariyanilesh@gmail.com
                                                    </a>
                                                </h4>
                                                <p>
                                                    Duis erat leo, aliquam
                                                    laoreet fringilla quis,
                                                    pretium vitae dui.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class=" col-xs-12 col-sm-8 ">
                                    <div class="block-title">
                                        <h2>How Can I Help You?</h2>
                                    </div>

                                    <form
                                        id="contact_form"
                                        class="contact-form"
                                        action="https://lmpixels.com/demo/leven-html-new/full-width-dark/contact_form/contact_form.php"
                                        method="post"
                                    >
                                        <div class="messages"></div>

                                        <div class="controls two-columns">
                                            <div class="fields clearfix">
                                                <div class="left-column">
                                                    <div class="form-group form-group-with-icon">
                                                        <input
                                                            id="form_name"
                                                            type="text"
                                                            name="name"
                                                            class="form-control"
                                                            placeholder="Full Name"
                                                            required="required"
                                                            data-error="Name is required."
                                                        />
                                                        <div class="form-control-border"></div>
                                                        <div class="help-block with-errors"></div>
                                                    </div>

                                                    <div class="form-group form-group-with-icon">
                                                        <input
                                                            id="form_email"
                                                            type="email"
                                                            name="email"
                                                            class="form-control"
                                                            placeholder="Email Address"
                                                            required="required"
                                                            data-error="Valid email is required."
                                                        />
                                                        <div class="form-control-border"></div>
                                                        <div class="help-block with-errors"></div>
                                                    </div>

                                                    <div class="form-group form-group-with-icon">
                                                        <input
                                                            id="form_name"
                                                            type="text"
                                                            name="subject"
                                                            class="form-control"
                                                            placeholder="Subject"
                                                            required="required"
                                                            data-error="Subject is required."
                                                        />
                                                        <div class="form-control-border"></div>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div class="right-column">
                                                    <div class="form-group form-group-with-icon">
                                                        <textarea
                                                            id="form_message"
                                                            name="message"
                                                            class="form-control"
                                                            placeholder="Message"
                                                            rows="7"
                                                            required="required"
                                                            data-error="Please, leave me a message."
                                                        ></textarea>
                                                        <div class="form-control-border"></div>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                class="g-recaptcha"
                                                data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"
                                                data-theme="dark"
                                            ></div>

                                            <input
                                                type="submit"
                                                class="button btn-send disabled"
                                                value="Send message"
                                            />
                                        </div>
                                    </form>
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

export default Contact;
