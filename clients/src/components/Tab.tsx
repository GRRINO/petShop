interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`
        flex-1 py-3 px-4 text-sm font-medium text-center border-b-2 transition-colors duration-200
        focus:outline-none 
        ${isActive 
          ? 'text-[#FF9A76]' 
          : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'}
      `}
      onClick={onClick}
      aria-selected={isActive}
      role="tab"
    >
      {label}
    </button>
  );
};

interface TabsProps {
  tabs: Array<{ id: string; label: string; }>;
  activeTab: string;
  onChange: (tabId: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="border-b border-gray-200">
      <div className="flex\" role="tablist">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => onChange(tab.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;