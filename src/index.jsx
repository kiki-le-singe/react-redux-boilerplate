import $ from 'jquery';
import React from 'react';
import AppRouter from './AppRouter';
// The both Framework7 and Dom7 are exposed in window.*
import 'framework7';

// *** STYLES *** //
// Path to Framework7 MATERIAL CSS theme styles
import 'framework7.material.min.css';
// Path to Framework7 MATERIAL related color styles
import 'framework7.material.colors.min.css';
// Path to svg logos icons
import 'assets/vendors/icons.svg.scss';
import 'font-awesome.scss';
import 'styles/scss/index.scss';

$(() => {
  window.f7App = new Framework7({
    swipePanel: 'left', // http://www.idangero.us/framework7/docs/side-panels.html#open-panels-with-swipe
    ajaxLinks: 'a.ajax',
    material: true,
  });

  React.render(AppRouter, document.getElementById('app'));
});
