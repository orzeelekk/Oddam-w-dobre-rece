import React from "react";

const Pagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className={"pagination"}>
                {pageNumbers.map(number => (
                    <button
                        className={"pagination_btn nav_element_link"}
                        key={number}
                        onClick={() => paginate(number)}
                    >
                        {number}
                    </button>
                ))}
            </ul>
        </nav>
    )
};

export default Pagination;

