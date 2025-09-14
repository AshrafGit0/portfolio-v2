const getStatusColor = (status: string) => {
  switch (status) {
    case "Featured":
    case "Featured | Under Development":
      return "bg-gradient-to-r from-yellow-500 to-orange-500";
    case "Popular":
      return "bg-gradient-to-r from-green-500 to-blue-500";
    case "Recent":
      return "bg-gradient-to-r from-blue-500 to-purple-500";
    case "Open Source":
      return "bg-gradient-to-r from-purple-500 to-pink-500";
    case "Enterprise":
      return "bg-gradient-to-r from-red-500 to-pink-500";
    case "Commercial":
      return "bg-gradient-to-r from-indigo-500 to-blue-500";
    case "Mobile":
      return "bg-gradient-to-r from-teal-500 to-green-500";
    case "Financial":
      return "bg-gradient-to-r from-yellow-600 to-red-500";
    case "AI/ML":
      return "bg-gradient-to-r from-cyan-500 to-blue-500";
    case "Business":
      return "bg-gradient-to-r from-orange-500 to-red-500";
    default:
      return "bg-gradient-to-r from-gray-500 to-gray-600";
  }
};
export default getStatusColor;
