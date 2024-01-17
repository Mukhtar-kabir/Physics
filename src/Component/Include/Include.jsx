import { Link } from "react-router-dom";
import "../Include/Include.scss";
import CheckIcon from "@mui/icons-material/Check";

const Include = () => {
  return (
    <section className="include" id="include">
      <div className="include-container">
        <h3>What`s Included</h3>
        <div className="include-items">
          <div className="item">
            <img src="/phone.png" alt="" />
          </div>

          <div className="item">
            <div>
              <CheckIcon className="icon" />
              <p>Quantum Mechanics</p>
            </div>
            <div>
              <CheckIcon className="icon" />
              <p>Optics</p>
            </div>
            <div>
              <CheckIcon className="icon" />
              <p>Nuclear Physics</p>
            </div>
            <div>
              <CheckIcon className="icon" />
              <p>Particle Physics</p>
            </div>
            <div>
              <CheckIcon className="icon" />
              <p>Astrophysics</p>
            </div>
            <div>
              <CheckIcon className="icon" />
              <p>Modern Developments</p>
            </div>
            <div>
              <CheckIcon className="icon" />
              <p>Experiments and Applications</p>
            </div>
            <div>
              <CheckIcon className="icon" />
              <p>Biographies and Historical Context</p>
            </div>
            <Link to="/book" className="link">
              <button>I want this book</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Include;
