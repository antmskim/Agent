import { useState } from "react";

export const DietaryRestrictionsModal = ({ isOpen, onClose, onSubmit }) => {
  const [restrictions, setRestrictions] = useState("");
  const [selectedPresets, setSelectedPresets] = useState([]);

  const presetRestrictions = [
    "Vegan",
    "Gluten-free",
    "Dairy-free",
    "Nut allergies",
    "Seafood allergies",
    "Halal",
  ];

  const togglePreset = (preset) => {
    setSelectedPresets(prev => 
      prev.includes(preset) 
        ? prev.filter(p => p !== preset)
        : [...prev, preset]
    );
  };

  const handleSubmit = () => {
    const allRestrictions = [
      ...selectedPresets,
      ...(restrictions.trim() ? [restrictions.trim()] : [])
    ];
    
    onSubmit(allRestrictions.join(", "));
    onClose();
  };

  const handleSkip = () => {
    onSubmit("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Dietary Preferences
          </h2>
          <p className="text-gray-600 mb-6">
            Help us provide better food recommendations by sharing your dietary restrictions or preferences.
          </p>

          {/* Preset Options */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Common Restrictions
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {presetRestrictions.map((preset) => (
                <button
                  key={preset}
                  onClick={() => togglePreset(preset)}
                  className={`p-2 text-sm rounded-md border transition-colors ${
                    selectedPresets.includes(preset)
                      ? "bg-pink-500 text-white border-pink-500"
                      : "bg-white text-gray-700 border-gray-300 hover:border-pink-300"
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Input */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Other Restrictions
            </h3>
            <textarea
              value={restrictions}
              onChange={(e) => setRestrictions(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md resize-none"
              rows="3"
              placeholder="Any other dietary restrictions or preferences..."
            />
          </div>

          {/* Selected Summary */}
          {(selectedPresets.length > 0 || restrictions.trim()) && (
            <div className="mb-6 p-3 bg-gray-50 rounded-md">
              <h4 className="font-semibold text-gray-700 mb-2">Your Selections:</h4>
              <p className="text-sm text-gray-600">
                {[...selectedPresets, ...(restrictions.trim() ? [restrictions.trim()] : [])].join(", ")}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleSkip}
              className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Skip
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};