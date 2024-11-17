import { Link } from "react-router-dom";

interface CosmicButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export const CosmicButton = ({ text, href, onClick, type = "button" }: CosmicButtonProps) => {
  const ButtonContent = () => (
    <>
      <div id="container-stars">
        <div id="stars"></div>
      </div>
      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <strong>{text}</strong>
    </>
  );

  if (href) {
    return (
      <Link to={href} className="btn">
        <ButtonContent />
      </Link>
    );
  }

  return (
    <button type={type} className="btn" onClick={onClick}>
      <ButtonContent />
    </button>
  );
};