import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./style.css";

const Button = ({
  label,
  type = "btn-tertiary",
  color = "blue",
  disabled = false,
  isLoading = false,
  options = {},
  onClick,
  icon: Icon,
  iconPosition = "left",
}) => {
  const buttonClass = classNames("button-base rounded", type, {
    "flex-row-reverse": iconPosition === "right",
    "button-disabled": disabled,
    "cursor-not-allowed": disabled,
  });

  const buttonStyle = {
    backgroundColor: options.color || undefined,
  };

  return (
    <button
      className={buttonClass}
      style={buttonStyle}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <span className="loader"></span> // Display loader
      ) : (
        <>
          {Icon && <Icon className="button-icon" />}{" "}
          {/* Render icon if provided */}
          {label} {/* Display label if not loading */}
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    "btn-primary",
    "btn-secondary",
    "btn-tertiary",
    "btn-danger",
  ]),
  color: PropTypes.oneOf(["blue", "green"]),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  options: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.elementType,
  iconPosition: PropTypes.oneOf(["left", "right"]),
};

export default Button;
