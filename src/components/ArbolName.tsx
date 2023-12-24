import style from '../styles/ArbolName.module.css'
import { arbolitoName } from '../functions/arbolito'
import { ChangeEvent, useState } from 'react'

const ArbolName = () => {

    const [name, setName] = useState("")
    const [nameArbolito, setNameArbolito] = useState<string[]>([])

    function clickButton(string: string) {
        const result = arbolitoName(string)
        setNameArbolito(result)
        return
    }

    function changue(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.currentTarget
        setName(value)
    }
    console.log(name)
    console.log(nameArbolito)
    return (
        <section>
            {
                nameArbolito[0] === undefined ? <>
                    <div className={style.container}>
                        <label htmlFor="name">Ingrese un nombre</label>
                        <input className={style.input} type="text" name="name" id="name" onChange={changue}/>
                    </div>
                    <button onClick={() => clickButton(name)}>confirm</button>
                </>: <>
                    <div>
                        {
                            nameArbolito.map((arb, i) => {
                                return (
                                    <li className={style.li} key={i}>{arb}<span className={style.span}></span></li>
                                )
                            })
                        }
                    </div>
                </>
            }
        </section>
    )
}

export default ArbolName
