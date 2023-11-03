<template>
  <ul id="pmenu">
    <li><a href="#nogo">Top Level 1</a></li>
    <li><a href="#nogo">Top Level 2</a></li>
    <li><a href="#nogo">Top Level 3 &#187;</a>
      <ul>
        <li><a href="#nogo">Sub Level 1a</a></li>
        <li><a href="#nogo">Sub Level 1b</a></li>
        <li><a href="#nogo">Sub Level 1c &#187;</a>
          <ul>
            <li><a href="#nogo">Sub Level 2a</a></li>
            <li><a href="#nogo">Sub Level 2b &#187;</a>
              <ul>
                <li><a href="#nogo">Sub Level 3a</a></li>
                <li><a href="#nogo">Sub Level 3b &#187;</a>
                  <ul>
                    <li><a href="#nogo">Sub Level 4a</a></li>
                    <li><a href="#nogo">Sub Level 4b</a></li>
                    <li><a href="#nogo">Sub Level 4c &#187;</a>
                      <ul>
                        <li><a href="#nogo">Sub Level 5a</a></li>
                        <li><a href="#nogo">Sub Level 5b</a></li>
                        <li><a href="#nogo">Sub Level 5c</a></li>
                        <li><a href="#nogo">Sub Level 5d &#187;</a>
                          <ul>
                            <li><a href="#nogo">Sub Level 6a</a></li>
                            <li><a href="#nogo">Sub Level 6b</a></li>
                            <li><a href="#nogo">Sub Level 6c</a></li>
                            <li><a href="#nogo">Sub Level 6d</a></li>
                          </ul>
                        </li>
                        <li><a href="#nogo">Sub Level 5e</a></li>
                        <li><a href="#nogo">Sub Level 5f</a></li>
                      </ul>
                    </li>
                    <li><a href="#nogo">Sub Level 4d</a></li>
                    <li><a href="#nogo">Sub Level 4e</a></li>
                    <li><a href="#nogo">Sub Level 4f</a></li>
                  </ul>
                </li>
                <li><a href="#nogo">Sub Level 3c</a></li>
                <li><a href="#nogo">Sub Level 3d</a></li>
              </ul>
            </li>
            <li><a href="#nogo">Sub Level 2c</a></li>
          </ul>
        </li>
        <li><a href="#nogo">Sub Level 1d</a></li>
        <li><a href="#nogo">Sub Level 1e</a></li>
      </ul>
    </li>
    <li><a href="#nogo">Top Level 4</a></li>
    <li><a href="#nogo">Top Level 5</a></li>
    <li><a href="#nogo">Top Level 6</a></li>
  </ul>
</template>
<style>
#pmenu, #pmenu ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

#pmenu {
  margin: 25px 0 400px 0;
  position: relative;
  z-index: 500;
}

#pmenu li {
  float: left;
  position: relative;
}

#pmenu a, #pmenu a:visited {
  display: block;
  width: 100px;
  font: normal 13px/25px 'latomedium', arial, sans-serif;
  color: #000;
  text-decoration: none;
  text-indent: 5px;
  background: #69c;
  border: 1px solid #fff;
  border-width: 0 1px 1px 0;
}

#pmenu li:hover > a {
  background: #dfd7ca;
  color: #c00;
}

#pmenu li ul {
  display: none;
}

#pmenu li:hover > ul {
  display: block;
  position: absolute;
  top: 0;
  left: 101px;
}

#pmenu > li:hover > ul {
  left: 0;
  top: 24px;
}
</style>


