export default function Button({ children, type = "button", onClick, className = "" }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`btn-primary ${className}`}
      >
        {children}
      </button>
    );
  }
  