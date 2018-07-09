import {h, app} from 'hyperapp'

export default function TopImg({state, actions}) {
  return (
    <section id="TopImg">
    <div class="container">
      <div class="title">
            <h5>
              Welcome
            </h5>
            <h1>
              Taste Of Vietnam
            </h1>
      </div>
      <div class="contact-info">
              <div class="booking">Contact Us</div>
              <h2>(718) 899 - 8674</h2>
              <div class="hours">
                Opening Hours <strong>Mon - Fri: </strong> 9am - 11pm 
                <strong> Weekend: </strong> 9am - 3am
              </div>
      </div>
    </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>