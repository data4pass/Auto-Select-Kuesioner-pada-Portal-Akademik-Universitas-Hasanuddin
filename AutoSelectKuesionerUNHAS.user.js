// ==UserScript==
// @name         Auto-Select Kuesioner untuk Portal Akademik Universitas Hasanuddin
// @namespace    https://github.com/data4pass/
// @version      3
// @description  Automatically Answers Portal Akademik Questionnaires for Universitas Hasanuddin Students.
// @author       data4pass
// @match        https://*.unhas.ac.id/kuisioner/index.php/*
// @grant        none
// @license      GPL-3.0
// ==/UserScript==

(function() {
    'use strict';

    var menu = document.getElementsByClassName("form-control");
	for (var i = 0, l = menu.length; i < l; i++) {
    	menu[i].selectedIndex = 3;
	}
    
    document.getElementsByClassName("col-lg-12 center btn btn-primary btn-lg")[0].click();
})();
