<template>

  <div class="relative w-full h-[45px] bg-secondary-800 dark:bg-primary-800"></div>
  <div id="menu-holder" class=" w-full">
    <ul id="sn_menu">
      <li><span id="close">&#x2715</span>
        <p id="open" tabindex="-1">&#x2630;</p>
        <ul>
          <li></li>
          <li><a href="#">Home</a></li>
          <li><p><span tabindex="-1">Contact Us</span></p>
            <ul>
              <li><a href="#">Email</a></li>
              <li><a href="#">Telephone</a></li>
              <li><a href="#">Online Form</a></li>
              <li><a href="#">Snail Mail Address</a></li>
            </ul>
          </li>
          <li><p><span tabindex="-1">Resort</span></p>
            <ul>
              <li><a href="#">Ski Hire Facilities</a></li>
              <li><p><span tabindex="-1">Main Ski Slopes</span></p>
                <ul>
                  <li><a href="#">Beginners Slopes</a></li>
                  <li><a href="#">Intermediate Slopes</a></li>
                  <li><p><span tabindex="-1">Advanced Skill Levels</span></p>
                    <ul>
                      <li><a href="#">Local</a></li>
                      <li><a href="#">Nearby</a></li>
                      <li><a href="#">With instructor</a></li>
                      <li><a href="#">Snow boarding</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Expert</a></li>
                </ul>
              </li>
              <li><a href="#">Night life</a></li>
              <li><p><span tabindex="-1">Restaurants</span></p>
                <ul>
                  <li><a href="#">Snow Hotel</a></li>
                  <li><a href="#">The Snowman</a></li>
                  <li><a href="#">Ice Cavern</a></li>
                  <li><a href="#">Ski Inn</a></li>
                </ul>
              </li>
              <li><p><span tabindex="-1">Car Hire</span></p>
                <ul>
                  <li><a href="#">From Airport</a></li>
                  <li><a href="#">In Resort</a></li>
                  <li><a href="#">Multiple Resorts</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><p><span tabindex="-1">Surrounding Area</span></p>
            <ul>
              <li><a href="#">Where to go</a></li>
              <li><a href="#">What to do</a></li>
              <li><a href="#">Places of interest</a></li>
              <li><a href="#">National parks &amp; Museums</a></li>
            </ul>
          </li>
          <li><p><span tabindex="-1">Information</span></p>
            <ul>
              <li><a href="#">Money Exchange</a></li>
              <li><p><span tabindex="-1">Resort Essential Information</span></p>
                <ul>
                  <li><a href="#">Lift Passes</a></li>
                  <li><a href="#">Insurance</a></li>
                  <li><p><span tabindex="-1">Gear Rental</span></p>
                    <ul>
                      <li><a href="#">Boots</a></li>
                      <li><a href="#">Skis</a></li>
                      <li><a href="#">Ski Wear</a></li>
                      <li><a href="#">Goggles</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Ski Schools</a></li>
                  <li><a href="#">Snow Report</a></li>
                </ul>
              </li>
              <li><p><span tabindex="-1">Language</span></p>
                <ul>
                  <li><a href="#">Austrian</a></li>
                  <li><a href="#">German</a></li>
                  <li><a href="#">French</a></li>
                  <li><a href="#">English</a></li>
                </ul>
              </li>
              <li><a href="#">Short Breaks</a></li>
            </ul>
          </li>
          <li><a href="#">Privacy</a></li>
          <li></li>
        </ul>
      </li>
    </ul>
  </div>
  <img id="good-morning" alt="" src="@/assets/image/mountains.jpg" title="">

</template>


<style>
#good-morning {
  display: block;
  width: 100%;
}


#menu-holder {
  width: 98%;
  max-width: 1400px;
  margin: -45px auto 0 auto;
  position: relative;
}

#sn_menu {
  width: 300px;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;
}

#sn_menu ul ul {
  border-left: 1px solid #9e9;
  margin-left: 8px;
  padding-left: 15px;
  list-style: none;
}

#sn_menu ul {
  @apply bg-secondary-800 dark:bg-primary-800;
  border-radius: 0 0 10px 10px;
  margin-left: 8px;
  display: block;
}

#sn_menu ul {
  padding-left: 15px;
}

#sn_menu li {
  display: grid;
  grid-template-rows:22px 0fr;
  overflow: hidden;
  transition: 0.75s;
  width: 100%;
  position: relative;
}

#sn_menu > li {
  display: grid;
  grid-template-rows:42px 0fr;
  overflow: hidden;
  transition: 0.75s;
  width: 100%;
}

#sn_menu li ul {
  min-height: 0;
  align-self: end;
  position: relative;
  z-index: 5;
}

#sn_menu a {
  font: 18px/22px 'Roboto Condensed', arial, sans-serif;
  text-decoration: none;
  color: #ddd;
  transition: 0.25s;
  outline: none;
  justify-self: start;
}

#sn_menu a:hover {
  color: #fff;
  text-decoration: underline;
}

#sn_menu p {
  font: 400 18px/22px 'Roboto Condensed', arial, sans-serif;
  padding: 0;
  margin: 0;
  color: #9ee;
  outline: none;
  @apply bg-secondary-800 dark:bg-primary-800;
  border: 0;
  position: relative;
  z-index: 10;
}

#sn_menu p span {
  cursor: pointer;
}

#sn_menu ul p::before {
  display: inline-block;
  content: "\25BC";
  padding-right: 7px;
}

#sn_menu > li > p {
  font: 400 30px/42px 'Roboto Condensed', arial, sans-serif;
  margin-left: 20px;
  color: #fff;
  cursor: pointer;
}

#sn_menu > li > span#close {
  display: block;
  width: 100%;
  height: 42px;
  font: 400 30px/42px 'Roboto Condensed', arial, sans-serif;
  position: absolute;
  left: 20px;
  top: 0;
  z-index: 5;
  @apply bg-secondary-800 dark:bg-primary-800;
  cursor: pointer;
  color: #fff;
}
 
#sn_menu li:focus-within {
  grid-template-rows:22px 1fr;
}

#sn_menu > li:focus-within {
  grid-template-rows:42px 1fr;
}

#sn_menu li:focus-within #open {
  z-index: -1;
}

#sn_menu li:focus-within #close {
  z-index: 10;
}

#sn_menu li:focus-within > p {
  color: #9e9;
}


</style>
