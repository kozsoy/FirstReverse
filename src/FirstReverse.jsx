import React, { useState } from "react";
export default function FirstReverse() {
  const [word, setWord] = useState("");
  const changeClick = () => {
    var backwards = "";
    for (var i = word.length - 1; i >= 0; --i) {
      backwards += word[i];
    }
    setWord(backwards);
    return backwards;
  };
  return (
    <div>
      <input
        onChange={(e) => setWord(e.target.value)}
        type="text"
        placeholder="Kelime giriniz..."
      />
      <button onClick={changeClick}>Çevir</button>
      <h4>{word}</h4>
    </div>
  );
}
