import { useState } from 'react'
import { TokenItem } from '../TokenItem/TokenItem'
import { tokens } from '../tokens'
import './Token.css'

export function Token() {
    const [customFilter, setCustomFilter] = useState('')

    function updateFilter(customFilter:string, event: any){
        event?.preventDefault()
        setCustomFilter(customFilter)
    }

    const tokenList = customFilter.length > 0 ? tokens.map(item => {
        if (item.categories.includes(customFilter)){
            return <TokenItem {...item}/>
        }
    }) : tokens.map(item => {
        return <TokenItem {...item}/>
    })


    return (
        <div className="tokens-layout">
            <div className="tokens-bar">
                <h2 className="token-title">Токены Everscale</h2>
                <ul className="token-menu">
                    <li onClick={(e) => updateFilter('', e)}>Все</li>
                    <li onClick={(e) => updateFilter('defi', e)}>DeFi</li>
                    <li onClick={(e) => updateFilter('wallets', e)}>Wallets</li>
                    <li onClick={(e) => updateFilter('games', e)}>Games</li>
                    <li onClick={(e) => updateFilter('dex', e)}>Dex</li>
                </ul>
            </div>
            <div className="tokens">
            {tokenList}
        </div>
        </div>
    )
}