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
  component('detailfooter', {
    templateUrl: 'components/common/uielements/detail-footer/detail-footer.html',
    controller: DetailFooterController,
    bindings: {
      actionitems: '<',
      autosaveenabled: '<',
      characters: '<',
      custombuttonenabled: '<',
      custombuttonfunction: '&',
      custombuttonlabel: '@',
      custombuttontooltip: '@',
      editfunction: '&',
      editmode: '<',
      eventsenabled: '<',
      hideprojectexplorerbutton: '<',
      imagesenabled: '<',
      lastsave: '<',
      savefunction: '&',
      showeventsfunction: '&',
      showeventslabel: '@',
      showimagesfunction: '&',
      showimageslabel: '@',
      showprojectexplorer: '=',
      showtagsfunction: '&',
      showtagslabel: '@',
      tagsenabled: '<',
      tipcode: '@',
      tipenabled: '<',
      tipmodalstyle: '@?',
      words: '<',
      wordscharactersenabled: '<'
    }
  });


function DetailFooterController() {}
