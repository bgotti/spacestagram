import React,{useState} from 'react'
import {Card, Button} from '@shopify/polaris';

function CardComponent({item}) {

  const [like, setLike] = useState(false)

  const toggle = () => {
    setLike(!like);
  }
  return (
    <>
       {item && (
          <Card>
            <div className="text">
              <img src={item.url} alt="Estatic Solar Eclipse" height="auto" />
              <header>
                {item.title} - <i>{item.date}</i>
              </header>
              <p>{item.explanation}</p>
              <Button onClick={toggle}>{like ? "Liked" : "Like"}</Button>
            </div>
          </Card>
        )}
    </>
  )
}

export default CardComponent
