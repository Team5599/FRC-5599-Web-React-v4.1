import * as React from 'react';
import * as FeatherIcon from 'react-feather';
import { hot } from "react-hot-loader";
import { Icon } from '@fluentui/react/lib/Icon';
import { NeutralColors } from '@fluentui/theme';
import { FontSizes } from '@fluentui/theme';
import $ from 'jquery';
import { Shimmer } from '@fluentui/react';


class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            teamInfo: ""
        }
    }

    componentDidMount() {

        $.get("http://127.0.0.1:3001", (data) => {
            this.setState({
                teamInfo: data.team
            })
            console.log(data)
        })
    }

    render() {
        const { teamInfo } = this.state;
        return (
            <main>
                <section>
                    <div className="defer-bg parallax" style={{ background: "linear-gradient(0deg, rgba(30, 108, 147, 0.8), rgba(30, 108, 147, 0.8)), url('img/robot_1.jpg')" }}>
                        <div className="container-fluid">
                            <div className="row min-vh-100 text-light">
                                <div className="col my-auto">
                                    <div className="container">
                                        <div className="d-none d-lg-block">
                                            <h1 className="display-1 sentinels-font">The Sentinels</h1>
                                        </div>
                                        <div className="d-lg-none">
                                            <h1 className="display-4 sentinels-font">The Sentinels</h1>
                                            <hr className="border-light" />
                                        </div>
                                        <h2>Competitive Robotics Team | FRC 5599 BNCHS Sentinels</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-5" style={{ background: NeutralColors.gray30 }}>
                        <div className="container">
                            <p>{teamInfo.desc}</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="defer-bg parallax" style={{ background: "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('img/history.jpg')" }}>
                        <div className="container-fluid">
                            <div className="row min-vh-100 text-light">
                                <div className="col my-auto">
                                    <div className="container py-5">
                                        <div className="d-none d-lg-block">
                                            <h1 className="display-1">Our History</h1>
                                        </div>
                                        <div className="d-lg-none">
                                            <h1 className="display-4">Our History</h1>
                                        </div>
                                        <hr className="border-light" />
                                        <p>{teamInfo.history}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default hot(module)(Home);