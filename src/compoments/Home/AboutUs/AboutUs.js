import React from 'react';
import "./_aboutUs.scss";

import Peopple from "../../Assets/People.jpg";
import Signature from "../../Assets/Signature.svg";

const AboutUs = () => {
    return (
        <>
            <section className="aboutUs">
                <div className="aboutUs_container container">
                    <div className="aboutUs_box">
                        <h1 className="aboutUs_title title_Main">
                            About us
                        </h1>
                        <h3 className="column_title_2 onas_h2">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</h3>
                        <img className="aboutUs_signature column_title" alt={Signature} src={Signature}/>
                    </div>
                    <img className="aboutUs_photo" alt={Peopple} src={Peopple}/>
                </div>
            </section>
        </>
    );
};

export default AboutUs;