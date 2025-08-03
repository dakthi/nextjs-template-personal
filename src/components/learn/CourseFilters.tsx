import { useState } from "react";

interface CourseFiltersProps {
  onFilterChange: (category: string) => void;
  activeFilter: string;
}

const categories = [
  { id: "all", name: "everything", count: 8 },
  { id: "Web Development", name: "web stuff", count: 1 },
  { id: "Finance", name: "money things", count: 2 },
  { id: "Education", name: "learning", count: 2 },
  { id: "Business", name: "business", count: 1 },
  { id: "Marketing", name: "marketing", count: 1 },
  { id: "Creative", name: "creative", count: 1 }
];

const levels = ["any level", "starting out", "getting somewhere", "pretty advanced"];

export const CourseFilters = ({ onFilterChange, activeFilter }: CourseFiltersProps) => {
  const [activeLevel, setActiveLevel] = useState("any level");

  return (
    <div className="bg-gray-50 border-l-4 border-l-gray-300 p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 mb-3">what kind of stuff?</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onFilterChange(category.id === "all" ? "" : category.id)}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  (activeFilter === "" && category.id === "all") || activeFilter === category.id
                    ? "bg-gray-700 text-white"
                    : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
        
        <div className="lg:w-48">
          <h3 className="text-lg font-medium text-gray-900 mb-3">your level?</h3>
          <select
            value={activeLevel}
            onChange={(e) => setActiveLevel(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          >
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>
            {activeFilter ? categories.find(c => c.id === activeFilter)?.count || 0 : categories[0].count} things to check out
          </span>
          <div className="flex items-center space-x-4">
            <span>sort by:</span>
            <select className="border border-gray-300 rounded px-2 py-1 text-sm">
              <option>what people like</option>
              <option>newest first</option>
              <option>cheapest first</option>
              <option>most expensive first</option>
              <option>highest rated</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};