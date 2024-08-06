import React from 'react'
import Subscribe from './Components/Subscribe'
import SliderComponent from './Components/SliderComponent'

function SubscribeSection({width}) {
  return (
    <div style={{width:'100%'}}>
            <div>
        <SliderComponent />
      </div>
      <div>
        <Subscribe
        width={width}
        />
      </div>

    </div>
  )
}

export default SubscribeSection
