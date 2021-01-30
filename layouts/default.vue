<template style="background-color: black;">
  <div>
    <app-navbar />
    <Nuxt />
    <app-footer />
  </div>
</template>

<style lang="scss" >
@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Ubuntu&display=swap);

/* Slider */


.slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.slick-list {
  position: relative;
  overflow: hidden;
  display: block;
  margin: 0;
  padding: 0;
}

.slick-list:focus {
  outline: none;
}

.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list {
  transform: translate3d(0, 0, 0);
}

.slick-track {
  position: relative;
  left: 0;
  top: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.slick-track:before,
.slick-track:after {
  content: "";
  display: table;
}

.slick-track:after {
  clear: both;
}

.slick-loading .slick-track {
  visibility: hidden;
}

.slick-slide {
  float: left;
  height: 100%;
  min-height: 1px;
  display: none;
}

[dir=rtl] .slick-slide {
  float: right;
}

.slick-slide img {
  display: block;
}

.slick-slide.slick-loading img {
  display: none;
}

.slick-slide.dragging img {
  pointer-events: none;
}

.slick-initialized .slick-slide {
  display: block;
}

.slick-loading .slick-slide {
  visibility: hidden;
}

.slick-vertical .slick-slide {
  display: block;
  height: auto;
  border: 1px solid transparent;
}

.slick-arrow.slick-hidden {
  display: none;
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

body,
html {
  width: 100%;
  height: 100%;
}

h3 {
  font-family: "Inter";
}

.row {
  padding: 0 5% 0 5% !important;
}

select.active.focus,
select.active:focus,
select.focus,
select:active.focus,
select:active:focus,
select:focus {
  outline: -1px !important;
  outline-color: transparent !important;
  outline-width: -1px !important;
  outline-style: none !important;
  box-shadow: 0 0 0 0 rgba(0, 123, 255, 0) !important;
}

input.active.focus,
input.active:focus,
input.focus,
input:active.focus,
input:active:focus,
input:focus {
  outline: -2px !important;
  outline-color: transparent !important;
  outline-width: -2px !important;
  outline-style: none !important;
  box-shadow: 0 0 0 0 rgba(0, 123, 255, 0) !important;
}

@media (min-width: 1100px) {
  .navbar-expand-custom {
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    justify-content: flex-start !important;
  }

  .navbar-expand-custom .navbar-nav {
    flex-direction: row !important;
  }

  .navbar-expand-custom .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

  .navbar-expand-custom .navbar-collapse {
    display: flex !important;
  }

  .navbar-expand-custom .navbar-toggler {
    display: none;
  }
}

.no-scroll-menu {
  overflow-y: hidden;
}

#burger {
  width: 30px;
  height: 20px;
  position: relative;
  margin: 0px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#burger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  background: #000;
}

#burger span:nth-child(1) {
  top: 0px;
}

#burger span:nth-child(2),
#burger span:nth-child(3) {
  top: 10px;
}

#burger span:nth-child(4) {
  top: 20px;
}

#burger.open span:nth-child(1) {
  top: 11px;
  width: 0%;
  left: 50%;
}

#burger.open span:nth-child(2) {
  transform: rotate(45deg);
}

#burger.open span:nth-child(3) {
  transform: rotate(-45deg);
}

#burger.open span:nth-child(4) {
  top: 11px;
  width: 0%;
  left: 50%;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}


</style>
