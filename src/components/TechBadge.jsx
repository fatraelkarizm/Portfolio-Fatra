import { tagIcons } from "../constants/tagIcons";

export const TechBadge = ({ tech }) => {
  const IconComponent = tagIcons[tech] ? tagIcons[tech].component : null;
  const iconColor = tagIcons[tech] ? tagIcons[tech].color : '#FFFFFF'; // Default to white if not found

  return (
    <span className="inline-flex items-center border-2 rounded-full px-3 py-1 text-xs font-semibold text-gray-200 mr-2 mb-2">
      {IconComponent && <IconComponent style={{ color: iconColor }} className="mr-1" size={16}/>}
      {tech}
    </span>
  );
};
