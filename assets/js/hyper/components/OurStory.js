import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="comp-title">Our Story</h5>
            <h2>Traditional made perfect for your taste buds.</h2>
            <p>
           Taste Of Vietnam offers a modern Vietnamese dining experience. The restaurant brings a combination of chef driven menu and warm California spirit by using fresh local produce and ingredients. Our chef applies authentic Vietnamese flavors and techniques that allow the ingredients to be expressed without boundaries.
            </p>
            <div class="quote">"Hands down the best Pho I ever had!" - <strong>Thomas Davis</strong></div>
            <a href="#" class="reserve-btn">Reserve</a>
          </div>
          <div class="col-md-6">
            <div class="video-img">
              
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

