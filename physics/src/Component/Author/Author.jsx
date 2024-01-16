import "../Author/Author.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Author = () => {
  return (
    <section className="author" id="author">
      <div className="author-container">
        <img src="/IGATA.jpeg" alt="" />
        <h3>About the Author</h3>
        <p>
          Meet Dr. John, the brilliant mind behind QuantumQuest. Driven by an
          insatiable curiosity about the universe, Dr. John is a distinguished
          physicist, educator, and author whose passion for unraveling the
          mysteries of the cosmos has captivated readers worldwide.
        </p>

        <p>
          With a Ph.D. in theoretical physics from a renowned institution, Dr.
          John has dedicated his career to pushing the boundaries of human
          understanding. His research contributions range from fundamental
          principles in quantum mechanics to exploring the fascinating realms of
          astrophysics. Known for his innovative thinking and interdisciplinary
          approach, Dr. John has earned acclaim for bridging the gap between
          complex scientific concepts and the broader audience.
        </p>

        <div className="follow">
          <h4>Follow Author</h4>
          <div className="icons">
            <FacebookIcon className="icon" />
            <XIcon className="icon" />
            <InstagramIcon className="icon" />
            <LinkedInIcon className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
