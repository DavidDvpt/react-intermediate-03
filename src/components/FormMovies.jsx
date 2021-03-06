import { Component } from "react";

class FormMovies extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", poster: "", comment: "" };
    }

    submitForm = (e) => {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };
        fetch("https://post-a-form.herokuapp.com/api/movies", config)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Film #${res} has been successfully added!`);
                }
            })
            .catch((e) => {
                console.error(e);
                alert("There was an error when adding the movie.");
            });
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    render() {
        return (
            <div className="FormMovies">
                <h1>Form Movie</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Information</legend>
                        <div className="form-data">
                            <label htmlFor="title">Movie Name</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                onChange={this.onChange}
                                value={this.state.title}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="poster">Movie Poster Url</label>
                            <input
                                type="text"
                                id="poster"
                                name="poster"
                                onChange={this.onChange}
                                value={this.state.poster}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="comment">Comment</label>
                            <textarea
                                type="text"
                                id="comment"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.comment}
                                cols="80"
                                rows="10"
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Send" />
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default FormMovies;
