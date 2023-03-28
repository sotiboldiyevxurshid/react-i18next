import i18next from "i18next";
import React from "react";
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  return (
    <div className="App">
          <h3>{t('namea.text')}</h3> 
        <button onClick={() => handleClick('eng')} >
          English
        </button>
        <button onClick={() => handleClick('ru')} >
          Russian
        </button>
        <button onClick={() => handleClick('uz')} >
          Uzbek
        </button>
        <button onClick={() => handleClick('nemis')} >
          Nemis
        </button>
     
  
    </div>
  )
}
