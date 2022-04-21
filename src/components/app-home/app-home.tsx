import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
       
        <stencil-route-link url="/badge">
          <button>badge</button>
        </stencil-route-link>
        
        <stencil-route-link url="/badge2">
          <button>Profile page2</button>
        </stencil-route-link>
      </div>
    );
  }
}
