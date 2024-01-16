import "../Thisbook/Thisbook.scss";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const Thisbook = () => {
  return (
    <section className="thisBook" id="thisBook">
      <div className="thisBook-container">
        <h3>Who is this Book for?</h3>
        <p className="text">
          QuantumQuest is crafted for the inquisitive minds and cosmic
          explorers, transcending the boundaries of expertise and embracing a
          diverse audience passionate about the wonders of physics.
        </p>

        <div className="students">
          <div className="student">
            <VerifiedUserIcon className="icon" />
            <div>
              <h4>For the Enthusiastic Novice</h4>
              <p>
                Dive into the world of physics with ease as QuantumQuest gently
                introduces you to the core concepts, providing a captivating
                narrative that unveils the beauty of the cosmos without
                overwhelming technicalities.
              </p>
            </div>
          </div>
          <div className="student">
            <VerifiedUserIcon className="icon" />
            <div>
              <h4>For the Inquisitive Student</h4>
              <p>
                Supplement your academic studies with a dynamic resource that
                not only reinforces classNameroom teachings but also sparks
                curiosity.
              </p>
            </div>
          </div>
          <div className="student">
            <VerifiedUserIcon className="icon" />
            <div>
              <h4>For the Seasoned Scientist</h4>
              <p>
                Delve into the intricacies of advanced topics, appreciate the
                nuances, and enjoy a fresh perspective.
              </p>
            </div>
          </div>
          <div className="student">
            <VerifiedUserIcon className="icon" />
            <div>
              <h4>For the Science Enthusiast</h4>
              <p>
                Whether you have a passing interest or an insatiable appetite
                for scientific knowledge, QuantumQuest invites you to embark on
                a thrilling journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thisbook;
