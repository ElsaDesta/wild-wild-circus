import React, { Component } from 'react'

export default class Admin extends Component {
    render() {
        return (
            
                <form action="/stats" enctype="multipart/form-data" method="post">
  <div class="form-group">
    <input type="file" name="imagepath" />
    <input type="text" name="title" />
    <input type="submit" value="Get me the stats!" class="btn btn-default" />            
  </div>
</form>
        
        )
    }
}
