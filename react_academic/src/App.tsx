//import { Fragment } from "react/jsx-runtime" // está errado, o correto é o que está abaixo:

import { useEffect, useState } from "react";

function App() {

  const [nome, setNome] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
//
  const inputRef = useRef(null);


  useEffect(() => {
    console.log("A cidade foi atualizada");
  }, [cidade]);

  console.log(nome);

  return (
    <>
      <label>Nome: </label>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value) }/>

      <label> Cidade: </label>
      <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value) }/>
    </>
  )
}

export default App
