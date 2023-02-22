import React, {useState, useEffect} from 'react';

import Locals from "./Locals";
import Foundations from "./Foundations";
import Organizations from "./Organizations";

import "./_whoWeHelp.scss";
import { Link } from "react-scroll";
const WhoWeHelp = () => {
    let [number, setNumber] = useState(1);
    let [firstTime, setFirstTime] = useState(true);

    function returnOption(number) {
        switch (number) {
            default:
                return <Foundations/>
            case 3:
                return <Locals/>
            case 2:
                return <Organizations/>
            case 1:
                return <Foundations/>;
        }
    }
    useEffect(() => {
        if (!firstTime) {
            setTimeout(() => {
                document.querySelector(".contact_container ").scrollIntoView({behavior: "smooth"});
            }, 500);
        }
        setFirstTime(false);
    },[number]);

        return (
        <>
            <section className="whoWeHelp foundation">
                <div className="whoWeHelp_container container">
                    <h1 className="simple_title title_Main">
                        Who are we helping?
                    </h1>
                    <div className={"whoWeHelp_buttons"}>
                            <button className={'btn_1 whoWeHelp_button title'}
                                    onClick={() => setNumber(1)}
                            >
                                Foundations
                            </button>
                            <button className={'btn_1 whoWeHelp_button title'}
                                    onClick={() => setNumber(2)}
                            >
                                Non-governmental organizations
                            </button>
                            <button className={'btn_1 whoWeHelp_button title'}
                                    onClick={() => setNumber(3)}
                            >
                                Local fundraisers
                            </button>
                    </div>
                    {returnOption(number)}
                </div>
            </section>
        </>
    );
};

export default WhoWeHelp;