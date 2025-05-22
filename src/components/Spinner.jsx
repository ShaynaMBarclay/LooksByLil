import razorImage from '../assets/razor.png';

const Spinner = () => (
  <div className="spinner">
    <img src={razorImage} alt="Loading..." className="razor-spinner" />
  </div>
);

export default Spinner;