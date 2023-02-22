import React from 'react';
import { Link } from "react-router-dom";
import "./_simpleSteps.scss";

import Icon1 from "../../Assets/Icon-1.svg";
import Icon2 from "../../Assets/Icon-2.svg";
import Icon3 from "../../Assets/Icon-3.svg";
import Icon4 from "../../Assets/Icon-4.svg";


const SimpleSteps = () => {
    return (
        <>
            <section className="simple whatIsItAbout">
                <div className="simple_container">
                    <h1 className="title_Main simple_title">
                        Just 4 simple steps
                    </h1>
                        <div className="simple_columns">
                            <div className="simple_columns container">
                            <div className="column">
                                <img className="simple_icon column_title" alt={Icon1} src={Icon1}/>
                                <h3 className="column_title_2 simple_dash">Choose things</h3>
                                <p className="column_p"> clothes, toys, equipment and more</p>
                            </div>
                            <div className="column">
                                <img className="simple_icon column_title" alt={Icon2} src={Icon2}/>
                                <h3 className="column_title_2 simple_dash">Pack them</h3>
                                <p className="column_p">You can use garbage bags</p>
                            </div>
                            <div className="column">
                                <img className="simple_icon column_title" alt={Icon3} src={Icon3}/>
                                <h3 className="column_title_2 simple_dash">Decide who you want to help</h3>
                                <p className="column_p">Choose a trusted place</p>
                            </div>
                            <div className="column">
                                <img className="simple_icon column_title" alt={Icon4} src={Icon4}/>
                                <h3 className="column_title_2 simple_dash">Order a courier</h3>
                                <p className="column_p">
                                    The courier will arrive at a convenient time</p>
                            </div>
                            </div>
                        </div>

                    <button className="btn_1 title simple_button">
                        <Link className="login_element_link" to="?Logowanie">GIVE<br/>THINGS</Link>
                    </button>
                </div>
            </section>
        </>
    );
};

export default SimpleSteps;