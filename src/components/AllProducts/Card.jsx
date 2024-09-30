import React from 'react'
import "./Card.css"
const Card = () => {
  return (
    <div className="card">
        <div className="card-image">
            <img src="https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QM9aP6psi0S5kPMyarBxUgypM-4PRGRQ3z79i2eR0hUPgbfxn1BxFh2tLIF1nDoCSvbjJ4S8Ggw6DYfAGu06y7qLeb7I6PJiCHYZCu~1HlIhpQbLR7Z62YYpLbD~unVbQ~YG5DrPRy-7wQjf~F9vMWHxS-b4q7aQPHk0tvXA1Ey-rlktGBYt1wtqYU9fCcseSgVZwmtxvCP38ByPxx0vML7cbE2Thb8ekdsO0h6u4QwTIpVVh76kUorAqKEqWNQOKIUNvc-mcSz6TifJCtsdEmaX6yORqF2kdMAx6vGJeZFWnML4QHIeaW-OHEHlwNwQg2~gjivTDQLuOKS~sb-Y1w__" alt="" />
        </div>
        <div className="card-content">
            <div className="card-content-desc">CRYSTAL AGATE PHONE GRIP</div>
            <div className="card-content-price">18.99$</div>
        </div>
        <div className="card-btn">
            <button>BUY NOW</button>
        </div>
    </div>
  )
}

export default Card