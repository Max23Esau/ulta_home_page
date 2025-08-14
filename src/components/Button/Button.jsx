import './Button.css'

const Button = ({ children, url, variant = 'primary', onClick, className = '' }) => {
  if (url) {
    return (
      <a href={url} onClick={onClick} className={`btn btn-${variant} ${className}`} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`btn btn-${variant} ${className}`}>
      {children}
    </button>
  );
};

export default Button;