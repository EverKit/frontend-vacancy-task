import React from 'react'
import { userIcon, Shape } from '../../Assets/Icon'
import { tokens, categories } from '../../tokens'
import { useState } from 'react'
import './TokensContent.css'

export default function TokensContent() {
  const [category, setCategory] = useState<number | null>(0)
  const [filtered, setFiltered] = useState(tokens)
  const [VisibleDescription, setVisibleDescription] = useState<any>([])

  const setActiveItem = (index: number) => {
    setCategory(index)
  }
  
  /** фУНКЦИЯ СОРТИРОВКИ*/
  const tokenFilter = (cat: string, index: number) => {
    if (cat === 'Все') {
      setFiltered(tokens)
    } else {
      let newArr = [...tokens].filter((item) =>
        item.categories.includes(cat.toLowerCase()),
      )

      setFiltered(newArr)
    }
    setActiveItem(index)
  }

 
  const handlePoppup = (id: number) => {
    if (VisibleDescription.includes(id)) {
      setVisibleDescription([...VisibleDescription.filter((i: number) => i !== id)])
    } else if (!VisibleDescription.includes(id)) {
      setVisibleDescription([...VisibleDescription, id])
    }
  }
  console.log(VisibleDescription)

  return (
    <div className="tokens">
      <div className="tokens-content">
        <div className="header">
          <span style={{ fontSize: 40, fontWeight: 400 }}>Токены Everscale</span>
          <div className="categories">
            {categories.map((item, index) => {
              return (
                <div>
                  <button
                    onClick={() => tokenFilter(item.title, index)}
                    className={category === index ? 'btnActive' : 'btnCat'}
                  >
                    {item.title}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
        {filtered.map((item, index) => {
          const vis = VisibleDescription.find((v: number) => v === item.id)

          return (
            <div key={item.id} className="token">
              <div className="token-content">
                <span style={{ marginRight: 22, color: '#93949D', fontSize: 18 }}>{`#${
                  index + 1
                }`}</span>
                <div className="logo">
                  <img className="tokenLogo" alt="0" src={item.logoURI} />
                </div>
                {console.log(item.logoURI)}
                <div className="name">
                  <h3>{item.name}</h3>
                  <span className="symbol">{item.symbol}</span>
                </div>
                <div className="price">
                  <span style={{ fontSize: 18 }}>{`${item.price} $`}</span>
                  <div className="priceChange">
                    <span
                      style={{ color: item.priceChange.hours24 < 0 ? 'red' : 'green' }}
                    >{`${item.priceChange.hours24}%`}</span>
                    <span
                      style={{
                        color: item.priceChange.days7 < 0 ? 'red' : 'green',
                        marginLeft: 5,
                      }}
                    >
                      {`${item.priceChange.days7}%`}
                    </span>
                    <span
                      style={{
                        color: item.priceChange.days365 < 0 ? 'red' : 'green',
                        marginLeft: 5,
                      }}
                    >{`${item.priceChange.days365}%`}</span>
                  </div>
                </div>
                <div className="volume">
                  <span className="tokenVolume">{`${item.volume}$`}</span>{' '}
                  <span
                    style={{ color: '#6347F5', fontSize: '16', marginLeft: 10 }}
                  >{`${item.volumeChangePercentage}%`}</span>
                </div>
                <div className="tvl">
                  <span className="tokenTvl">{`${item.tvl}$`}</span>{' '}
                  <span
                    style={{ color: '#6347F5', fontSize: '16', marginLeft: 10 }}
                  >{`${item.tvlChangePercentage}%`}</span>{' '}
                </div>
                <div className="users">
                  {userIcon}
                  <span style={{ marginLeft: 10, fontSize: 18 }}>{item.users}</span>
                </div>
                <button
                  className={vis ? 'btn-shape-active' : 'btn-shape'}
                  onClick={() => handlePoppup(item.id)}
                >
                  {Shape}
                </button>
              </div>
              {vis && <div className="description">{item.description}</div>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
