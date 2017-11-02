// ==UserScript==
// @name         Auto-Select Kuesioner untuk Portal Akademik Universitas Hasanuddin
// @namespace    https://github.com/data4pass/
// @version      0.1
// @description  Automatically Answers Portal Akademik questionnaires for Universitas Hasanuddin Students.
// @author       data4pass
// @match        https://*.unhas.ac.id/kuisioner/index.php/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var menu = document.getElementsByClassName("form-control");
	for (var i = 0, l = menu.length; i < l; i++) {
    	menu[i].selectedIndex = 3;
	}
    
    document.getElementsByClassName("btn btn-primary btn-lg pull-right")[0].click();
})();
