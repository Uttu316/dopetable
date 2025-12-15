import React from "react";
import { Loader2 } from "lucide-react";

const LoadingSpinner: React.FC = React.memo(() => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" flex items-center justify-center flex-col text-center">
        <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
        <p className="text-gray-600 mt-2 text-lg">Loading Dope Data...</p>
      </div>
    </div>
  );
});

LoadingSpinner.displayName = "LoadingSpinner";

export default LoadingSpinner;
