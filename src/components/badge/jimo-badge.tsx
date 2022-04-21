import { Component, State, Prop, h } from '@stencil/core';

@Component({
  tag: 'jimo-badge',
  styleUrl: 'jimo-badge.scss',
  shadow: false,
})
export class JimoBadge {
    @State() isPoint: Boolean = false;
    @Prop() num: Number | string = '100';
    @Prop() bgColor: string = '';
    @Prop() color: string = '';
    render(){
        const result = this.num > 99 ? "99+" : this.num
        return(
            <div>
                <div style={{backgroundColor: this.bgColor}} class={`kv-badge ${this.num > 99 ?'long-badge' :''} ${this.isPoint?'isPoint':''}`} >
                    <span style={{color: this.color}}  class="kv-badge-num" >{this.isPoint?'':result}</span >
                </div >
            </div>
        )
    }
}