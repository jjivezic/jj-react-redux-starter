import React from 'react';
import { useTranslation } from 'react-i18next';
import './languageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  const currentLang = i18n.language;

  return (
    <div>
      <select onChange={changeLanguage} className="lang-selector" defaultValue={currentLang}>
        <Emoji label="en" symbol="EN" />
        <Emoji label="de" symbol="DE" />
      </select>
    </div>
  );
};

const Emoji = props => (
  <option
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
    value={props.label}
  >
    {props.symbol}
  </option>
);

export default LanguageSelector;