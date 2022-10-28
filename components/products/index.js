import Link from "next/link"
import * as C from "./styles"

export default function allProdutos() {
    return (
        <C.Container>
            <h1>HOME</h1>
            <ul>  

                <li>
                    <Link href='/about'>about</Link>
                    <Link href='/services'>services</Link>
                </li>
            </ul>
        </C.Container>
    )
}