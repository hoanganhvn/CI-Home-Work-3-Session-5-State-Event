import './Light.css';
import { useState } from "react";

function Light() {
    const lights = {
        red: { red: true, yellow: false, green: false, next: "yellow" },
        yellow: { red: false, yellow: true, green: false, next: "green" },
        green: { red: false, yellow: false, green: true, next: "red" },
    };
    const [light, setLight] = useState(lights.red);
    const clickToChangeTrafficLights = () => {
        setLight(lights[light.next]);
    }

    return (
        <>
            <div>
                <i className={`far fa-circle rounded-circle ${light.red ? "red" : "inactive"}`} />
                <i className={`far fa-circle rounded-circle ${light.yellow ? "yellow" : "inactive"}`} />
                <i className={`far fa-circle rounded-circle ${light.green ? "green" : "inactive"}`} />
            </div>
            <div>
                <i className={`far fa-circle rounded-circle ${light.red ? "red" : "inactive"}`} />
                <i className={`far fa-circle rounded-circle ${light.yellow ? "yellow" : "inactive"}`} />
                <i className={`far fa-circle rounded-circle ${light.green ? "green" : "inactive"}`} />
            </div>
            <div>
                <i className={`far fa-circle rounded-circle ${light.red ? "red" : "inactive"}`} />
                <i className={`far fa-circle rounded-circle ${light.yellow ? "yellow" : "inactive"}`} />
                <i className={`far fa-circle rounded-circle ${light.green ? "green" : "inactive"}`} />
            </div>
            <div>
                <button type="button" className="btn btn-primary" onClick={clickToChangeTrafficLights}>Click To Change Traffic Lights</button>
            </div>
        </>
    );
}

export default Light;