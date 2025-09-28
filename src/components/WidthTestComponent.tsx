import React from 'react';

const WidthTestComponent: React.FC = () => {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Box-sizing Test Components
      </h3>

      {/* Test case 1: Fixed width with padding using box-border */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Fixed width (250px) with padding - should stay exactly 250px wide
        </h4>
        <div className="w-[250px] box-border p-4 bg-blue-100 dark:bg-blue-900 border-2 border-blue-300 dark:border-blue-700">
          <p className="text-sm text-gray-800 dark:text-gray-200">
            This box has w-[250px] + box-border + p-4. The total width should be exactly 250px including padding and border.
          </p>
        </div>
      </div>

      {/* Test case 2: Compare with old behavior (content-box) */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Same width but with content-box - will be wider than 250px
        </h4>
        <div className="w-[250px] box-content p-4 bg-red-100 dark:bg-red-900 border-2 border-red-300 dark:border-red-700">
          <p className="text-sm text-gray-800 dark:text-gray-200">
            This box has w-[250px] + box-content + p-4. The total width will be 250px + padding + border.
          </p>
        </div>
      </div>

      {/* Test case 3: Form inputs with proper width constraints */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Form inputs with consistent widths
        </h4>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="w-full with box-border"
            className="w-full box-border px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <input
            type="text"
            placeholder="w-64 with box-border"
            className="w-64 box-border px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
      </div>

      {/* Test case 4: Grid layout test */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Grid with consistent padding
        </h4>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="box-border p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-md"
            >
              <p className="text-sm text-gray-800 dark:text-gray-200">
                Grid item {num} with consistent padding using box-border
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WidthTestComponent;