/*
 * Copyright (C) 2014-2023 Andrea Feccomandi
 *
 * Licensed under the terms of GNU GPL License;
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY.
 * See the GNU General Public License for more details.
 *
 */
angular.
  module('bibiscoApp').
  component('detailcontent', {
    templateUrl: 'components/common/uielements/detail-content/detail-content.html',
    controller: DetailContentController,
    bindings: {
      autosaveenabled: '=',
      characters: '=',
      content: '=',
      disableemptymessage: '<',
      editfunction: '&',
      editmode: '<',
      headersubtitle: '<',
      nextelementlabel: '@',
      nextelementlink: '<',
      nextelementtooltip: '@?',
      previouselementlabel: '@',
      previouselementlink: '<',
      previouselementtooltip: '@?',
      showprojectexplorer: '<',
      todaywords: '=?',
      totalwords: '=?',
      words: '='
    }
  });


function DetailContentController($rootScope) {

  let self = this;

  self.dblclickontext = function (event) {
    $rootScope.textSelected = event.target.innerText;
    if ($rootScope.textSelected) {
      $rootScope.textSelected = $rootScope.textSelected.replace(/[\n\r]/g, '');
      $rootScope.textSelected = $rootScope.textSelected.trim();
    }

    console.log('$rootScope.textSelected=['+$rootScope.textSelected+']');
    self.editfunction();
  };
}
