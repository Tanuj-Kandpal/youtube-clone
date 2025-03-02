import React from "react";

interface LoaderProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = "medium", className = "" }) => {
  const sizeClasses = {
    small: "w-6 h-6 border-2",
    medium: "w-10 h-10 border-3",
    large: "w-16 h-16 border-4",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} rounded-full border-blue-300 border-t-blue-600 animate-spin`}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};

export default Loader;
