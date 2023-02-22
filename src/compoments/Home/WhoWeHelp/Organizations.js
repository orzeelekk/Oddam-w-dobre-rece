import React, {useState} from 'react';
import data from "../../data/data.json";
import Pagination from "./Pagination";

const Organizations = () => {
    const [posts] = useState(data.organisations.organisations);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(3);
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber, event) => {
        setCurrentPage(pageNumber)
    }

    return (
        <section className={"organizations"}>
            <h3 className={"whoWeHelp_title"}>
                {data.organisations.title}
            </h3>
            <div className={"whoWeHelp_box"}>
                {currentPosts.map((element) => {
                    return (
                        <div className={"whoWeHelp_box_data"} key={element.id}>
                            <div className={"whoWeHelp_box_data_details"}>
                                <h2 className={"whoWeHelp_box_data_details_title"}>{element.name}</h2>
                                <p className={"whoWeHelp_box_data_items"}>{element.desc}</p>
                            </div>
                            <p className={"whoWeHelp_box_data_items"}>
                                {element.needs}
                            </p>
                        </div>
                    );
                })}
            </div>
            <Pagination
                postPerPage={postPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </section>
    )
};

export default Organizations;



