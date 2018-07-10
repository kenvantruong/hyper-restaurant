import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
  return (
    <header>
      <div class="container">
        <div class="logo">
          {/* <div class="logo-img"></div> */}
        </div>
        <nav>
          <a href="#">Menu</a>
          <a href="#">Party Platters</a>
          <a href="#">Locations</a>
          <a href="#">Contest</a>
          <a href="#">Reservations</a>
        </nav>
      </div>
    </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
