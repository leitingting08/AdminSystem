import React from 'react'
render((
  <Routerhistory={hashHistory}>
    <Route path="/"component={App}>
      {/* make them children of `App`*/}
      <Route path="/foo"component={Foo}/>
      <Route path="/bar"component={Bar}/>
    </Route>
  </Router>
), document.getElementById('app'))