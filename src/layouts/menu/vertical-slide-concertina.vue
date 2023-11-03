<template>
    <div id="panel">
        <div class="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><input id="sub1" name="cssplay" type="radio"><label for="sub1">Resort</label><span
                        class="closesubmenu"><label for="sub0">Resort</label></span>
                    <ul class="h5">
                        <li><a href="#">Ski Hire Facilities</a></li>
                        <li><a href="#">Main Ski Slopes</a></li>
                        <li><a href="#">Restaurants</a></li>
                        <li><a href="#">Night Life</a></li>
                        <li><a href="#">Car Hire</a></li>
                    </ul>
                </li>
                <li><input id="sub2" name="cssplay" type="radio"><label for="sub2">Contact Us</label><span
                        class="closesubmenu"><label for="sub0">Contact Us</label></span>
                    <ul class="h4">
                        <li><a href="#">Snail Mail Address</a></li>
                        <li><a href="#">Online Form</a></li>
                        <li><a href="#">Telephone</a></li>
                        <li><a href="#">Email</a></li>
                    </ul>
                </li>
                <li><input id="sub3" name="cssplay" type="radio"><label for="sub3">Surrounding Area</label><span
                        class="closesubmenu"><label for="sub0">Surrounding Area</label></span>
                    <ul class="h6">
                        <li><a href="#">National parks &amp; Museums</a></li>
                        <li><a href="#">Places of interest</a></li>
                        <li><a href="#">Where to go</a></li>
                        <li><a href="#">What to do</a></li>
                        <li><a href="#">Theatres</a></li>
                        <li><a href="#">Cinemas</a></li>
                    </ul>
                </li>
                <li><input id="sub4" name="cssplay" type="radio"><label for="sub4">Information</label><span
                        class="closesubmenu"><label for="sub0">Information</label></span>
                    <ul class="h7">
                        <li><a href="#">Resort Information</a></li>
                        <li><a href="#">Money Exchange</a></li>
                        <li><a href="#">Short Breaks</a></li>
                        <li><a href="#">Snow Report</a></li>
                        <li><a href="#">Gear Rental</a></li>
                        <li><a href="#">Language</a></li>
                        <li><a href="#">Car Hire</a></li>
                    </ul>
                </li>
                <li><a href="#">Privacy</a></li>
            </ul>
            <input id="sub0" name="cssplay" type="radio">
        </div>
    </div>
</template>

<style>
    #panel {
        height: 600px;
    }
 
    .menu {
        position: relative;
        text-align: center;
        width: 100%;
        height: 100%;
        display: table;
    }

    .menu input {
        position: absolute;
        left: -9999px;
        display: none;
    }

    .menu ul {
        padding: 0;
        margin: 0;
        list-style: none;
        text-transform: uppercase;
    }

    .menu > ul {
        display: table-cell;
        vertical-align: middle;
    }

    .menu > ul > li {
        position: relative;
    }

    .menu > ul > li > a {
        font: 600 40px/55px 'Open Sans', arial, sans-serif;
        text-decoration: none;
        color: #000;
        position: relative;
        -webkit-transition: 0.5s;
        transition: 0.5s;
    }

    .menu ul ul li a {
        font: 300 16px/25px 'Open Sans', arial, sans-serif;
        text-decoration: none;
        color: #000;
    }

    .menu ul li label {
        font: 600 40px/55px 'Open Sans', arial, sans-serif;
        color: #000;
        cursor: pointer;
        position: relative;
    }

    .menu ul li span.closesubmenu {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        display: none;
    }

    .menu ul li span.closesubmenu label {
        color: transparent;
    }

    .menu ul ul {
        height: 0;
        padding-top: 0;
        overflow: hidden;
        position: relative;
        z-index: 100;
        -webkit-transition: 1s;
        transition: 1s;
    }

    .menu > ul > li > a:hover:before {
        content: "";
        display: block;
        height: 2px;
        width: 50px;
        position: absolute;
        bottom: 0;
        background: #000;
        left: 50%;
        margin-left: -25px;
    }

    .menu input:checked ~ ul.h4 {
        height: 110px;
        padding-top: 20px;
    }

    .menu input:checked ~ ul.h5 {
        height: 135px;
        padding-top: 20px;
    }

    .menu input:checked ~ ul.h6 {
        height: 160px;
        padding-top: 20px;
    }

    .menu input:checked ~ ul.h7 {
        height: 185px;
        padding-top: 20px;
    }

    .menu input:checked ~ span.closesubmenu {
        display: block;
    }

    .menu > ul > li > label:hover:before,
    .menu input:checked + label:before {
        content: "";
        display: block;
        height: 0;
        width: 0;
        border: 8px solid transparent;
        border-top-color: #000;
        border-bottom: 0;
        position: absolute;
        bottom: -4px;
        left: 50%;
        margin-left: -8px;
    }

    .menu ul ul li a:hover:before {
        content: "- ";
    }

    .menu ul ul li a:hover:after {
        content: " -";
    }

</style>

