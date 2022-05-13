import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="change-page">
            {
                pageNumbers.map(number => (
                    <a onClick={() => paginate(number)} key={number} href="!#">{number}</a>
                ))
            }
        </div>
    );
};

export default Pagination;