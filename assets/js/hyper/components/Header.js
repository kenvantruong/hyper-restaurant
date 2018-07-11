import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
  return (
    <header>
      <div class="container">
        <div class="logo">
          {/* <div class="logo-img"></div> */}
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Reviews</a>
          <a href="#">Special Menu</a>
          <a href="#">Reservations</a>
          <a href="#">Contact Us</a>
        </nav>
      </div>
    </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
