import { useState } from "react";
import { ESComponent } from "../components/legal/terms_conditions_es";
import { ENComponent } from "../components/legal/terms_conditions_en";
import { FRComponent } from "../components/legal/terms_conditions_fr";
interface LanguageOption {
  label: string;
  value: string;
}

const languageOptions: LanguageOption[] = [
  { label: "English", value: "en" },
  { label: "Español", value: "es" },
  { label: "Français", value: "fr" },
];

const TermsAndConditionsPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLanguage(event.target.value);
  };

  const termsAndConditionsText = () => {
    if (selectedLanguage == "fr") return <FRComponent />;
    else if (selectedLanguage == "es") return <ESComponent></ESComponent>;
    else selectedLanguage == "en";
    return <ENComponent></ENComponent>;
  };

  return (
    <div className="TermsAndConditions">
      <h1>Terms and Conditions</h1>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        {languageOptions.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <div>{termsAndConditionsText()}</div>
    </div>
  );
};

export default TermsAndConditionsPage;
