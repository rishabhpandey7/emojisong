import React,{Component} from 'react'
import './Footer.scss'

export default class extends Component{
render(){
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">Made with ♥ by <a href="https://github.com/rishabhpandey7" target="_blank">Rishabh Pandey</a></span>
      </div>
    </footer>
  )
 }
}
