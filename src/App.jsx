import { useState } from 'react'
import './App.css'

function App() {
  const [peso, setPeso] = useState() ;
  const [altura, setAltura] = useState();
  function calculaImc(a, b) {
    const imc = a / (b**2); 
    return imc ;
  }
  const imc = calculaImc(peso, altura);

  return (
    <div className='container calculadora'>
      <h5 className='tags'>Peso</h5>
      <input
        type="number"
        placeholder="80"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <h5 className='tags'>Altura</h5>
      <input
        type="number"
        placeholder="1.80"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <h6 className='tags'>Seu IMC:</h6>
      {imc && (
        <>
          {imc < 18.5 && (
            <p>{`Seu imc é ${imc.toFixed(2)} e está abaixo de 18,5. Classificado como Magreza`}</p>
          )}
          {imc >= 18.5 && imc <= 24.9 && (
            <p>{`Seu imc é ${imc.toFixed(2)} e está entre 18,5 e 24,9. Classificado como Normal`}</p>
          )}
          {imc >= 24.9 && imc <= 29.9 && (
            <p>{`Seu imc é ${imc.toFixed(2)} e está entre 24,9 e 29,9. Classificado como Sobrepeso`}</p>
          )}
          {imc >= 30.0 && imc <= 39.9 && (
            <p>{`Seu imc é ${imc.toFixed(2)} e está entre 30,0 e 39,9. Classificado como Obesidade`}</p>
          )}
          {imc > 40 && (
            <p>{`Seu imc é ${imc.toFixed(2)} e está acima de 40. Classificado como Obesidade Grave`}</p>
          )}
        </>
      )}
    </div>
  );
}

export default App
