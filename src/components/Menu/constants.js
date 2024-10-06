import { FaRegFileAlt, FaPencilAlt, FaEnvelope, FaGamepad, FaTrophy, FaGlasses } from 'react-icons/fa';  // Add more icons as needed
import { GrPowerShutdown } from "react-icons/gr";

export const menuItems = [
  { icon: FaRegFileAlt, label: 'PORTFOLIO'},
  { icon: FaPencilAlt, label: 'SERVICES'},
  { icon: FaEnvelope, label: 'CONTACT'},
  { icon: FaGamepad, label: 'SNAKEY'},
  { icon: FaGlasses, label: 'ABOUT'},
  { icon: GrPowerShutdown, label: 'SHUT DOWN', window: window.location.reload  },
];
