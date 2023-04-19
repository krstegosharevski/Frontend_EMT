import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const BookEdit = (props) => {
    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        name: "",
        author: 1,
        category: "NOVEL",
        availableCopies: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = formData.name !== "" ? formData.name : props.currentBook.name;
        const author =
            formData.author !== 1 ? formData.author : props.currentBook.author.id;
        const category =
            formData.category !== "NOVEL"
                ? formData.category
                : props.currentBook.category;
        const availableCopies =
            formData.availableCopies !== ""
                ? formData.availableCopies
                : props.currentBook.availableCopies;
        const id = props.currentBook.id;

        props.editCurrentBook(id, name, category, author, availableCopies);

        navigate("/books");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col col-md-8 col-sm-12 m-auto">
                    <h4 style={{fontFamily:"Roboto"}} className="display-5 text-center my-3">
                        Edit: <b>"{props.currentBook.name}"</b>
                    </h4>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group my-lg-4">
              <span style={{fontStyle:"italic",backgroundColor:"grey",color:"whitesmoke"}} className="input-group-text">
                Book title
              </span>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder={props.currentBook.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group my-lg-4">
              <span style={{fontStyle:"italic",backgroundColor:"grey",color:"whitesmoke"}} className="input-group-text">
                Category
              </span>
                            <select
                                className="form-control"
                                name="category"
                                onChange={handleChange}
                            >
                                {props.categories.map((item) => {
                                    if (
                                        props.currentBook.category !== undefined &&
                                        props.currentBook.category === item
                                    ) {
                                        return (
                                            <option
                                                key={item}
                                                selected={props.currentBook.category}
                                                value={item}
                                            >
                                                {item}
                                            </option>
                                        );
                                    } else {
                                        return (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        );
                                    }
                                })}
                            </select>
                        </div>
                        <div className="input-group my-lg-4">
              <span style={{fontStyle:"italic",backgroundColor:"grey",color:"whitesmoke"}} className="input-group-text" id="basic-addon1">
                Author
              </span>
                            <select
                                className="form-control"
                                name="author"
                                onChange={handleChange}
                            >
                                {props.authors.map((item) => {
                                    if (
                                        props.currentBook.author !== undefined &&
                                        props.currentBook.author.id === item.id
                                    ) {
                                        return (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                                selected={props.currentBook.author.id}
                                            >
                                                {item.name + " " + item.surname}
                                            </option>
                                        );
                                    } else {
                                        return (
                                            <option value={item.id} key={item.id}>
                                                {item.name + " " + item.surname}
                                            </option>
                                        );
                                    }
                                })}
                            </select>
                        </div>
                        <div className="input-group my-lg-4">
              <span style={{fontStyle:"italic",backgroundColor:"grey",color:"whitesmoke"}} className="input-group-text">
                Available copies
              </span>
                            <input
                                type="text"
                                className="form-control"
                                name="availableCopies"
                                placeholder={props.currentBook.availableCopies}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-secondary">
                            Edit {props.currentBook.name}
                        </button>
                        <Link className="btn btn-outline-dark" to="/books">
                            Back
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookEdit;