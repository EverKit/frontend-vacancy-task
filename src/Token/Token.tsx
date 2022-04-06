import { useState } from 'react'
import { TokenItem } from '../TokenItem/TokenItem'
import { tokens } from '../tokens'
import './Token.css'

export function Token() {
    const [customFilter, setCustomFilter] = useState('')

    function updateFilter(event: React.ChangeEvent<HTMLInputElement>){
        event?.preventDefault()
        console.log(event.target)
        //setCustomFilter(customFilter)
    }

    const tokenList = customFilter.length > 0 ? tokens.filter(item => {
        if (item.categories.includes(customFilter)){
            console.log(item)
            return <TokenItem {...item}/>
        }
    }) : tokens.map(item => {
        <TokenItem {...item}/>
    })

    console.log(tokenList)

    return (
        <div className="tokens-layout">
            <div className="tokens-bar">
                <h2 className="token-title">Токены Everscale</h2>
                <ul className="token-menu">
                    <li onClick={() => setCustomFilter('')}>Все</li>
                    <li onClick={() => setCustomFilter('defi')}>DeFi</li>
                    <li onClick={() => setCustomFilter('wallets')}>Wallets</li>
                    <li onClick={() => setCustomFilter('games')}>Games</li>
                    <li onClick={() => setCustomFilter('dex')}>Dex</li>
                </ul>
            </div>
            <div className="tokens">
            {tokenList}
        </div>
        </div>
    )
}