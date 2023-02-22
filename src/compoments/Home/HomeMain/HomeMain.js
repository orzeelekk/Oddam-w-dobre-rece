import React from 'react';
import "./_homeMain.scss";

import {Link} from "react-router-dom";

const HomeMain = () => {
    return (
        <>
            <main className="HomeMain start">
                <div className="HomeMain_container container">
                    <div className="HomeMain_box">
                        <h1 className="title_Main title">
                            Start helping! <br/>
                            Put unwanted items in trusted hands
                        </h1>
                        <div className="HomeMain_box_bottom">
                            <button className="btn_1 HomeMain_box_bottom_title title">
                                <Link className="login_element_link" to="?Logowanie">GIVE <br/> THINGS</Link>
                            </button>
                            <button className="btn_1 HomeMain_box_bottom_title title">ORGANIZE <br/> COLLECTION</button>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
};

export default HomeMain;