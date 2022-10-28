import Link from "next/link"
import * as C from "./styles"
import Api from "../../service/api"
import { useEffect, useState } from "react"

export default function allProdutos() {

    const [dados, setDados] = useState([])

    useEffect(() => {
        async function getData(){
            const data = await Api.get('products')
            setDados(data.data)
            console.log(data)
        }

        getData()
    }, [])

    return (
        <C.Container>
            

            <ul>
                {dados.map(dado => (
                    <li key={dado.id}>
                            <a>{dado.id} - {dado.title}</a>
                    </li>
                ))}
            </ul>
           
        </C.Container>
    )
}