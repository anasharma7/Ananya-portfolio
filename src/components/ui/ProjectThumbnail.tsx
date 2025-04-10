import React from 'react';

interface ProjectThumbnailProps {
  title: string;
  color: string;
  icon?: React.ReactNode;
}

const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ title, color, icon }) => {
  return (
    <div 
      className="w-full h-48 flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: color }}
    >
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {icon && (
        <div className="absolute top-4 right-4 text-white opacity-70">
          {icon}
        </div>
      )}
      
      <div className="text-center z-10">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
    </div>
  );
};

export default ProjectThumbnail; 