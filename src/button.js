export function Button({ children, className, onClick }) {
    return (
      <button
        className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  