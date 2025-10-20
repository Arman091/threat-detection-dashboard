interface ThreatFilterProps {
  selectedType: string;
  onFilterChange: (type: string) => void;
}

export function ThreatFilter({ selectedType, onFilterChange }: ThreatFilterProps) {
  const filterOptions = [
    { value: 'all', label: 'All Threats', count: null },
    { value: 'Phishing', label: 'Phishing', count: null },
    { value: 'Malware', label: 'Malware', count: null },
    { value: 'Spam', label: 'Spam', count: null }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 px-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Filter by Threat Type</h3>
          <p className="text-xs text-gray-500">Select a category to filter threats</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onFilterChange(option.value)}
              className={`
                px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer
                ${selectedType === option.value
                  ? 'bg-button-primary-bg text-button-primary-text border-2 border-button-primary-bg shadow-sm'
                  : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                }
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
