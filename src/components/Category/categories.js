import React from "react";
import "../../index.css";

const categories = (props) => {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col col-md-2 col-sm-5 m-auto">
                    <h1 className="my-3 text-center">Categories:</h1>
                    <ol className="list-group list-group-item-light">
                        {props.categories.map((item) => {
                            return (
                                <li
                                    key={item}
                                    className="list-group-item d-flex justify-content-between "
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-semibold">{item} ✅</div>
                                    </div>

                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default categories;