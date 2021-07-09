import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}


const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [parImpar, setParImpar] = useState(1)
    const [parOuImpar, setParOuImpar] = useState(null)

    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function () {
        if (fatorial > 1000000) {
            document.title = "Eita!!!"
        }
    }, [fatorial])
   
    useEffect(function () {
        if(parImpar %2 === 1 ){
            setParOuImpar ("Impar")
        }else {
            setParOuImpar ("Par")
        }
    }, [parImpar])


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />

            <SectionTitle title="Exercicío #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não Existe' : fatorial}</span>
                </div>
                <input type="number" className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercicío #01" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{parOuImpar === null ? 'Não Existe' : parOuImpar}</span>
                </div>
                <input type="number" className="input"
                    value={parImpar}
                    onChange={e => setParImpar(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect
