import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { summonerName: '' };

        // This binding is necessary to make `this` work in the callback
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            summonerName: e.target.value
        });
    }
    handleSubmit(e) {
        this.setState({
            summonerName: e.target.value
        });
        e.preventDefault();
    }
    render() {
        return (
            <div className="home">
                <div className="content">
                    <form onSubmit={(e) => this.handleSubmit(e)} className="search-form">
                        <div>
                            <label htmlFor="search">
                                Summoner name
                            </label>
                            <input type="search" name="search" value={this.state.summonerName} onChange={this.handleChange} />
                        </div>
                        <button className="Button Button-square" type="submit">Search</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default Home