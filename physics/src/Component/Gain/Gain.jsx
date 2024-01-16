import "../Gain/Gain.scss";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

const Gain = () => {
  return (
    <section className="gain" id="gain">
      <div className="gain-container">
        <h2>What will you Get from this Book?</h2>
        <p>
          Section intro goes here. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Optio, accusamus modi! Enim corrupti illum rem .
        </p>

        <div className="service-container">
          <div className="service">
            <PrecisionManufacturingIcon className="icon" />
            <h4>
              classNameical Mechanics sit amet consectetur adipisicing elit.
              Saepe, possimus.
            </h4>
            <span>
              The study of motion and the forces that cause motion, as described
              by Newtonian physics.
            </span>
          </div>
          <div className="service">
            <DynamicFormIcon className="icon" />
            <h4>
              Electromagnetism dolor sit amet consectetur adipisicing elit.
              Saepe, possimus.
            </h4>
            <span>
              Understanding the interplay between electric and magnetic fields,
              including concepts like electric charges, circuits, and magnetism.
            </span>
          </div>
          <div className="service">
            <DeviceThermostatIcon className="icon" />
            <h4>
              Thermodynamics dolor sit amet consectetur adipisicing elit. Saepe,
              possimus.
            </h4>
            <span>
              Exploring the principles of heat, temperature, and energy
              transfer, as well as the laws of thermodynamics.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gain;
