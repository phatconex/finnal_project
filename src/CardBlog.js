import React from "react";

const CardBlog = (props) => {
    return (
        <div className="blog-tour">
            <img src={props.img} alt="" />
            <div className="blog-content">
                <span>{props.cate}</span>
                <h3>{props.title}</h3>
                <p>
                    <i class="fa-regular fa-calendar-days"></i> July 25, 2023
                </p>
            </div>
        </div>
    );
};

export default CardBlog;
