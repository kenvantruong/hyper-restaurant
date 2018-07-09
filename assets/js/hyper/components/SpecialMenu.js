import {h, app} from 'hyperapp'

export default function SpecialMenu({state, actions}) {
  return (
    <section id="SpecialMenu">
      <div class="container">
        <h5 class="comp-title">Special Menu</h5>
        <h2>Delicious Flavor Of Saigon</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="box">
              <div class="box-img-one">
              <div class="price-circle">$10</div>
              </div>
              <span class="title">Phở đặc Biệt #1</span>
              <p class="details">Famous Beef Rice Noodle Soup - Includes Beef, Onions, Ginger, Salt, Star anise, Fish sauce, and Rice Noodles</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="box-img-two">
              <div class="price-circle">$12</div>
              </div>
              <span class="title">Bún Bò Huế #37</span>
              <p class="details">Hue Village Special Rice Noodle Soup - Includes Oxtail, Beef, Pork, Red pepper flakes, Garlic, Annatto seeds, Fish sauce, Shrimp paste</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="box-img-three">
              <div class="price-circle">$15</div>
              </div>
              <span class="title">Bún Bò Xào #12</span>
              <p class="details">Vietnamese Lemon Grass Beef with Rice Noodles - Includes Meat Balls or Sirloin Steak, Ground black pepper, Garlic, Sugar, Sprouts, Fish sauce, and Rice Noodles</p>
            </div>
          </div>
        </div>
        <a href="#">View Full Menu</a>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
