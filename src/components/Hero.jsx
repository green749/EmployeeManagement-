import { useState } from 'react';

function Hero({totalEmployees}) {

    const company = "GWC data.ai";
    //const totalEmployees = {Employee.length()};
    //const [counter, setCounter] = useState(0);
    //console.log(counter);
    function getGreeting() {
        return "We build solution that empower people";
    }
    return (
        <section >
            <div className="navbar hero">
                <div className="two-ele">
                    <span className="icon-bg"><i className="fa-solid fa-building "></i></span>
                    <div>
                        <h1>{company}</h1>
                        <p className='margin-top'>{getGreeting()}</p>
                    </div>
                </div>

                <div className="two-ele">

                    <div className="two-ele">
                        <i className="fa-regular fa-user icon"></i>
                        <span >
                            <p>Employees</p>
                            <p className="bold margin-top">{totalEmployees}</p>
                        </span>
                    </div>

                    <div className="two-ele border-left">
                        <i className="fa-regular fa-calendar icon"></i>
                        <span>
                            <p>Joined Today</p>
                            <p className="bold margin-top">{new Date().toDateString()}</p>
                        </span>
                    </div>


                </div>

            </div>
        </section>
    );
}

export default Hero;