<template>
  <div class="">


    <div id="sn_menu_outer">
      <ul id="sn_menu">
        <li><a href="#url">Home</a></li>
        <li><p tabindex="-1">Contact Us</p>
          <ul>
            <li><a href="#url">Email</a></li>
            <li><a href="#url">Telephone</a></li>
            <li><a href="#url">Online Form</a></li>
            <li><a href="#url">Snail Mail Address</a></li>
          </ul>
        </li>
        <li><p tabindex="-1">Resort</p>
          <ul>
            <li><a href="#url">Ski Hire Facilities</a></li>
            <li><p tabindex="-1">Main Ski Slopes</p>
              <ul>
                <li><a href="#url">Beginners Slopes</a></li>
                <li><a href="#url">Intermediate Slopes</a></li>
                <li><p tabindex="-1">Advanced Skill Levels</p>
                  <ul>
                    <li><a href="#url">Local</a></li>
                    <li><a href="#url">Nearby</a></li>
                    <li><a href="#url">With instructor</a></li>
                    <li><a href="#url">Snow boarding</a></li>
                  </ul>
                </li>
                <li><a href="#url">Expert</a></li>
              </ul>
            </li>
            <li><a href="#url">Night life</a></li>
            <li><p tabindex="-1">Restaurants</p>
              <ul>
                <li><a href="#url">Snow Hotel</a></li>
                <li><a href="#url">The Snowman</a></li>
                <li><a href="#url">Ice Cavern</a></li>
                <li><a href="#url">Ski Inn</a></li>
              </ul>
            </li>
            <li><p tabindex="-1">Car Hire</p>
              <ul>
                <li><a href="#url">From Airport</a></li>
                <li><a href="#url">In Resort</a></li>
                <li><a href="#url">Multiple Resorts</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><p tabindex="-1">Surrounding Area</p>
          <ul>
            <li><a href="#url">Where to go</a></li>
            <li><a href="#url">What to do</a></li>
            <li><a href="#url">Places of interest</a></li>
            <li><a href="#url">National parks &amp; Museums</a></li>
          </ul>
        </li>
        <li><p tabindex="-1">Information</p>
          <ul>
            <li><a href="#url">Money Exchange</a></li>
            <li><p tabindex="-1">Resort Essential Information</p>
              <ul>
                <li><a href="#url">Lift Passes</a></li>
                <li><a href="#url">Insurance</a></li>
                <li><p tabindex="-1">Gear Rental</p>
                  <ul>
                    <li><a href="#url">Boots</a></li>
                    <li><a href="#url">Skis</a></li>
                    <li><a href="#url">Ski Wear</a></li>
                    <li><a href="#url">Goggles</a></li>
                  </ul>
                </li>
                <li><a href="#url">Ski Schools</a></li>
                <li><a href="#url">Snow Report</a></li>
              </ul>
            </li>
            <li><p tabindex="-1">Language</p>
              <ul>
                <li><a href="#url">Austrian</a></li>
                <li><a href="#url">German</a></li>
                <li><a href="#url">French</a></li>
                <li><a href="#url">English</a></li>
              </ul>
            </li>
            <li><a href="#url">Short Breaks</a></li>
          </ul>
        </li>
        <li><a href="#url">Privacy</a></li>
      </ul>

    </div>
  </div>

</template>

<style>
#good-morning {
  display: block;
  width: 100%;
  max-width: 1400px;
  margin: 30px auto;
}

#sn_menu_outer ul {
  list-style: none;
}

#sn_menu_outer ul ul {
  border-left: 1px solid #c60;
  margin-left: 8px;
  padding-left: 15px;
}

#sn_menu {
  width: 98%;
  max-width: 500px;
  margin: 50px auto;
}

#sn_menu li {
  display: grid;
  grid-template-rows:22px 0fr;
  overflow: hidden;
  transition: 0.75s;
  width: 100%;
}

#sn_menu li ul {
  min-height: 0;
}

#sn_menu li:focus-within {
  grid-template-rows:22px 1fr;
}

#sn_menu li:focus-within > p {
  color: #c00;
}

#sn_menu a {
  font: 18px/22px 'Roboto Condensed', arial, sans-serif;
  text-decoration: none;
  color: #06c;
  transition: 0.25s;
  outline: none;
  text-decoration: underline;
  font-weight: 400;
}

#sn_menu a:hover {
  color: #c60;
  text-decoration: underline;
}

#sn_menu p {
  font: 400 18px/22px 'Roboto Condensed', arial, sans-serif;
  padding: 0;
  margin: 0;
  color: #080;
  cursor: pointer;
  justify-self: start;
}

#sn_menu p::before {
  display: inline-block;
  content: "\25BC";
  padding-right: 7px;
}
</style>


<script lang="ts" setup>
</script>
