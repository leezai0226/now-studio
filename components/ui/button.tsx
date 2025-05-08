// components/ui/button.tsx
export function Button({ children, className = "", ...props }: any) {
    return (
      <button
        className={`bg-white text-black font-semibold py-2 px-4 rounded ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }