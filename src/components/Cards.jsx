import PropTypes from "prop-types";

const Card = (props) => {
  if (props.hidden) return null;

  return (
    <div
      style={{
        border: "1px solid #000",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <p>Hello, {props.user.name}</p>
      <img src={props.user.avatar} alt={props.user.name} />
    </div>
  );
};

Card.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    active: PropTypes.bool,
  }),
  hidden: PropTypes.bool,
};

export default Card;
