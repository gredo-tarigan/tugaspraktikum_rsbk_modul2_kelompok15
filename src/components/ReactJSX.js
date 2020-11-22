import React from "react";

function greetings(asisten) {
  return asisten.name + " dari " + asisten.jurusan;
}
const asisten = {
  name: "Anggara Diebrata",
  jurusan: "Teknik Komputer 2017",
};

//Menggunakan JSX
const ReactJSX = () => {
  return (
    <div>
      <h1 style={{ color: "white" }}>Hello Praktikan RSBK</h1>
      <h2 style={{ color: "white" }}>
        Perkenalkan saya {greetings(asisten)} !
      </h2>
      <p style={{ color: "#00ff00" }}>Ini adalah contoh penggunaan JSX</p>
    </div>
  );
};

//Ini tanpa menggunakan JSX
const ReactNoJSX = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello Praktikan RSBK"),
    React.createElement("h2", null, "Perkenalkan saya ", greetings(asisten)),
    React.createElement(
      "p",
      { style: { color: "#ff0000" } },
      "Ini adalah contoh tanpa JSX :("
    )
  );
};
export default ReactJSX;
export { ReactNoJSX };
