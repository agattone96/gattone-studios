import React from "react";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CTAButton = ({ children, className, ...props }: CTAButtonProps) => {
  return (
    <button type="button" className={`btn ${className || ''}`} {...props}>
      <strong>{children}</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>
      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
};

export default CTAButton;