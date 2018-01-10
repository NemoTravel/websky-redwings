!function(e){try{e=angular.module("app")}catch(a){e=angular.module("app",[])}e.run(["$templateCache",function(e){e.put("components/search-form/search-form.html",'<div class="searchParams active"><div class="wrap"><div ng-if="vm.searchResultError || vm.nearestDates" class="orderSearchError"><div class="orderSearchError__i"><p ng-if="!vm.nearestDates">{{ vm.searchResultError | aliasDynamic }}</p><wrap ng-if="vm.nearestDates"><p>{{ \'web.messages.nearestDates\' | aliasStatic}}</p><p ng-repeat="nearestDateSeg in vm.nearestDates"><geo-marker-wrapper prefix="dep__point" key="search-form" cityinfo="nearestDateSeg.segment.origin"></geo-marker-wrapper>–<geo-marker-wrapper prefix="arr__point" key="search-form" cityinfo="nearestDateSeg.segment.destination"></geo-marker-wrapper>{{ \' \' }} <a ng-if="nearestDateSeg.earlierMatching" ng-click="vm.selectNearestDate(nearestDateSeg.segId, nearestDateSeg.earlierMatching)">{{ nearestDateSeg.earlierMatching }}</a> {{ \' \' }}<wrap ng-if="nearestDateSeg.earlierMatching && nearestDateSeg.laterMatching">{{ \'web.messages.nearestDatesWrapper\' | aliasStatic}}</wrap>{{ \' \' }} <a ng-if="nearestDateSeg.laterMatching" ng-click="vm.selectNearestDate(nearestDateSeg.segId, nearestDateSeg.laterMatching)">{{ nearestDateSeg.laterMatching }}</a></p></wrap><wrap ng-if="\'search.enableSchedule\' | param"><p>{{ \'web.searchForm.scheduleInvitationBegin\' | aliasStatic}} {{ \' \' }}<geo-marker-wrapper prefix="dep__point" key="search-form" cityinfo="vm.originCity"></geo-marker-wrapper>–<geo-marker-wrapper prefix="arr__point" key="search-form" cityinfo="vm.destinationCity"></geo-marker-wrapper>{{ \' \' }} {{ \'web.searchForm.scheduleInvitationEnd\' | aliasStatic}} <a href="./schedule?origin-city-code={{ ::vm.originCity.codeEn }}&destination-city-code={{ ::vm.destinationCity.codeEn }}">{{ \'web.searchForm.scheduleInvitationLink\' | aliasStatic}}</a></p></wrap></div></div><div class="searchParams__i"><div class="info" ng-show="!vm.formOpened"><ul><li ng-show="vm.originCity && vm.destinationCity"><geo-marker-wrapper prefix="dep__point" key="search-form" cityinfo="vm.originCity"></geo-marker-wrapper>–<geo-marker-wrapper prefix="arr__point" key="search-form" cityinfo="vm.destinationCity"></geo-marker-wrapper></li><li ng-show="vm.segCount == 2">{{ \'web.searchForm.roundtrip\' | aliasStatic}}</li><li ng-show="vm.segCount == 1">{{ \'web.searchForm.oneway\' | aliasStatic}}</li><li>{{ vm.getDescPassCountStr() }}</li></ul></div></div><div class="orderSearchForm orderSearchForm_change" style="display: block;"><div class="orderSearchForm__i"><div class="formBody"><form name="vm.searchForm" form-submit-error-highlight="" novalidate="" class="formBody__i" method="post" autocomplete="off"><div class="formBodyItem"><div class="steps active"><div class="steps__i"><div class="item item_transfer"><div class="item__i"><city-picker role="origin" pickerindex="1" selected="vm.originCity" exclude="vm.destinationCity.codeEn" touched="vm.submitTouched" placeholder="{{ \'web.searchForm.originCity\' | aliasStatic}}"></city-picker><city-picker role="destination" pickerindex="2" selected="vm.destinationCity" depend="vm.originCity.codeEn" touched="vm.submitTouched" placeholder="{{ \'web.searchForm.destinationCity\' | aliasStatic}}"></city-picker><a href="" ng-click="vm.switchCities()" class="btnTransfer btnTransfer_js"><i class="icon_transfer"></i></a></div></div><div class="item item_date" id="calendarContainer"><div class="item__i"><div class="col"><div class="pikaday__header_mobile" ng-class="{ active: vm.pikadayThereOpen }"><i class="icon_plane"></i> <span>{{ \'web.searchForm.thereDate\' | aliasStatic}}</span> <a href="" class="pikaday__header_mobile_close" ng-click="vm.pikadayClose(\'there\')"></a></div><div class="inp"><div class="inp__i"><error-message control="vm.searchForm.thereDate" touched="vm.submitTouched"></error-message><input type="text" tabindex="3" placeholder="{{ \'web.searchForm.thereDate\' | aliasStatic}}" class="textInp calendarInp calendarInp_js" ng-class="{ textInp_error:(vm.submitTouched && vm.searchForm.thereDate.$invalid) }" pikaday="vm.pikadayThere" container="calendarContainer" number-of-months="{{ vm.viewMonthCount }}" on-open="vm.pikadayOpen(\'there\'); vm.pikadayThereOpen = true;" on-select="vm.pikadayThereSelectHandler()" on-close="vm.pikadayThereOpen = false" on-draw="vm.pikadayThereDraw()" name="thereDate" ng-model="vm.thereDate" id="book_from" readonly="" required=""> <a href="" class="calendarBtn calendarBtn_js"><i class="icon_calendar"></i></a></div></div></div><div class="col"><div class="pikaday__header_mobile" ng-class="{ active: vm.pikadayBackOpen }"><i class="icon_plane icon_plane_back"></i> <span>{{ \'web.searchForm.backDate\' | aliasStatic}}</span> <a href="" class="pikaday__header_mobile_close" ng-click="vm.pikadayClose(\'back\')"></a></div><div class="inp" ng-class="{ locked:vm.segCount != 2 }"><div class="inp__i"><a href="" class="locked-lnk" ng-click="vm.unlockBackDate()"></a> <input type="text" tabindex="4" placeholder="{{ \'web.searchForm.backDate\' | aliasStatic}}" class="textInp calendarInp calendarInp_js" pikaday="vm.pikadayBack" container="calendarContainer" number-of-months="{{ vm.viewMonthCount }}" on-open="vm.pikadayOpen(\'back\'); vm.pikadayBackOpen = true;" on-close="vm.pikadayBackOpen = false" on-draw="vm.pikadayBackDraw()" name="b ackDate" ng-model="vm.backDate" id="book_to" readonly=""> <a href="" class="calendarBtn calendarBtn_js"><i class="icon_calendar"></i></a></div></div></div></div></div><div class="item item_peoples"><div class="item__i"><div class="compactPeopleInfo compactShow"><a href="" class="compactDropShow compactDropShow_js" ng-click="vm.switchCompactPassCountOpened()"><input type="text" value="{{ vm.getTotalPassCountStr() }}" class="textInp" readonly=""><div class="arrowDown"><i class="icon_selectArr"></i></div></a></div><div class="compactDrop" ng-class="{ active:vm.compactPassCountOpened }"><pass-picker role="countBase" selected="vm.countBase" base="vm.basePassengerCategory"></pass-picker><a href="" ng-click="vm.showChildPickers = true;" ng-if="!vm.showChildPickers" class="link child-pickers-switch">{{ \'web.searchForm.showChildCounters\' | aliasStatic}}</a><pass-picker role="countRBG" selected="vm.countRBG" ng-class="{ hide_picker: !vm.showChildPickers }"></pass-picker><pass-picker role="countRMG" selected="vm.countRMG" ng-class="{ hide_picker: !vm.showChildPickers }"></pass-picker><pass-picker role="countRVG" selected="vm.countRVG" ng-class="{ hide_picker: !vm.showChildPickers }"></pass-picker></div></div></div><div class="item item_bonus" ng-if="(\'search.allowPromo\' | param) || (\'ffp.enable\' | param)"><div class="item__i"><div ng-if="(\'search.allowPromo\' | param) && !vm.ffp" class="bonusItem" ng-class="{ active:vm.promoActive }"><div class="coupon"><div class="coupon__i"><label for="couponInp" ng-click="vm.activatePromo()"><i class="icon_percent"></i>{{ \'web.searchForm.activatePromo\' | aliasStatic}}</label><error-message control="vm.searchForm.promoCode" touched="vm.submitTouched"></error-message><input type="text" id="couponInp" autocomplete="new-password" name="promoCode" ng-model="vm.promoCode" ng-pattern="\'search.promoCodeRegexp\' | param" error-highlight="{{ vm.submitTouched }}" class="textInp" placeholder="{{ \'web.searchForm.promoCode\' | aliasStatic}}"> <a href="" ng-click="vm.deactivatePromo()" tabindex="-1" class="clearInp clearInp_js"><i class="icon_remove"></i></a></div></div></div><div ng-if="(\'ffp.enable\' | param) && !vm.ffp" class="bonusItem" ng-class="{ active:vm.ffpActive }"><div class="mileCart"><div class="mileCart__i"><label for="mileCartInp" ng-click="vm.activateFFP()"><i class="icon_milesPay"></i>{{ \'web.searchForm.activateFFP\' | aliasStatic}}</label><div class="mileCartInpWrap"><error-message control="vm.searchForm.ffpCardNumber" touched="vm.submitTouched"></error-message><input type="text" class="textInp" id="mileCartInp" autocomplete="new-password" name="ffpCardNumber" ng-model="vm.ffpCardNumber" ng-pattern="\'ffp.cardNoRegex\' | param" error-highlight="{{ vm.submitTouched }}" ng-class="{ textInp_error: vm.ffpLoginError }" placeholder="{{ \'web.searchForm.ffpCardNumber\' | aliasStatic}}"> <a href="" ng-click="vm.deactivateFFP()" tabindex="-1" class="clearInp clearInp_js"><i class="icon_remove"></i></a></div><div class="mileCartInpWrap"><error-message control="vm.searchForm.ffpCardPassword" touched="vm.submitTouched"></error-message><input type="password" class="textInp" autocomplete="new-password" name="ffpCardPassword" ng-model="vm.ffpCardPassword" ng-pattern="\'ffp.passwordRegex\' | param" error-highlight="{{ vm.submitTouched }}" ng-class="{ textInp_error: vm.ffpLoginError }" placeholder="{{ \'web.searchForm.ffpCardPassword\' | aliasStatic}}"></div></div></div></div></div></div><button ng-click="vm.searchButtonClick()" class="btn btn_search btn_formSearch btn_formSearch_js">{{ \'web.searchForm.submit\' | aliasStatic}}</button></div></div></div></form></div></div></div><div ng-if="vm.ffpLoginError" class="orderSearchError"><div class="orderSearchError__i"><p>{{ \'web.messages.ffpLoginError.header\' | aliasStatic}}</p><p>{{ \'web.messages.ffpLoginError.start\' | aliasStatic}} <a href="" ng-click="vm.deactivateFFP(); vm.searchButtonClick();">{{ \'web.messages.ffpLoginError.link\' | aliasStatic}}</a> {{ \'web.messages.ffpLoginError.end\' | aliasStatic}}</p></div></div></div></div>')}])}(),function(e){try{e=angular.module("app")}catch(a){e=angular.module("app",[])}e.run(["$templateCache",function(e){e.put("screens/passengers/passengers.html",'<app-loader ng-if="vm.loading"></app-loader><section class="out" ng-if="!vm.loading"><app-header></app-header><div class="searchSteps"><div class="wrap"><div class="searchSteps__i"><ol><li class="prev"><a href="{{ \'site.mainPageUrl\' | param }}">{{ \'web.steps.search\' | aliasStatic}}</a></li><li class="prev"><a href="#{{$root.ROUTES.SEARCH}}">{{ \'web.steps.selectVariant\' | aliasStatic}}</a></li><li class="active">{{ (vm.passengers.length == 1) ? ( \'web.steps.passenger\' | aliasStatic) : ( \'web.steps.passengers\' | aliasStatic) }}</li><li>{{ \'web.steps.extraServices\' | aliasStatic}}</li><li>{{ \'web.steps.payment\' | aliasStatic}}</li><li>{{ \'web.steps.order\' | aliasStatic}}</li></ol></div></div></div><div ng-if="vm.orderInfo && vm.passengersCheck" class="searchParams searchParams_passengers"><div class="wrap"><div class="searchParams__i"><div class="info"><ul><li><geo-marker prefix="dep__point" key="passengers" city="vm.orderInfo.flights[0].flights[0].origincity" cityname="vm.orderInfo.flights[0].flights[0].origincityName" port="vm.orderInfo.flights[0].flights[0].originport" portname="vm.orderInfo.flights[0].flights[0].originportName"></geo-marker>–<geo-marker prefix="arr__point" key="passengers" city="vm.orderInfo.flights[0].flights[vm.orderInfo.flights[0].flights.length-1].destinationcity" cityname="vm.orderInfo.flights[0].flights[vm.orderInfo.flights[0].flights.length-1].destinationcityName" port="vm.orderInfo.flights[0].flights[vm.orderInfo.flights[0].flights.length-1].destinationport" portname="vm.orderInfo.flights[0].flights[vm.orderInfo.flights[0].flights.length-1].destinationportName"></geo-marker></li><li ng-show="vm.orderInfo.flights.length == 2">{{ \'web.searchForm.roundtrip\' | aliasStatic}}</li><li ng-show="vm.orderInfo.flights.length == 1">{{ \'web.searchForm.oneway\' | aliasStatic}}</li><li>{{ vm.getDescPassCountStr() }}</li></ul></div></div></div></div><div class="content"><div class="wrap wrap_pt32"><div class="content__i"><div class="passengersInfo"><div class="passengersInfo__i"><h2>{{ (vm.passengers.length == 1) ? ( \'web.passengerInfo.header\' | aliasStatic) : ( \'web.passengersInfo.header\' | aliasStatic) }}</h2><p ng-if="vm.passengersCheck.isLatinNamesOnly && !(\'site.foreignSite\' | param)" class="intAttention">{{ \'web.messages.passNamesLabel\' | aliasStatic}} <span ng-bind-html="\'web.messages.passNamesLatin\' | aliasStatic"></span></p><p class="login" ng-if="!vm.authoriseCustomer && !vm.accountExist">{{ \'web.passengersInfo.loginInvitationMessage\' | aliasStatic}} <a href="" fancybox="popupLogin">{{ \'web.passengersInfo.loginInvitationLink\' | aliasStatic}}</a></p><form class="passengerForm__js {{ vm.getOrderCountriesCssClasses() }}" ng-repeat="(passengerNumber, passenger) in vm.passengers" name="vm.passengerForms[{{passengerNumber}}]" form-submit-error-highlight="" novalidate=""><input type="hidden" name="categoryCode" ng-model="passenger.categoryCode"><div class="item"><div class="item__i"><div class="itemName"><div class="itemName__number"><span ng-show="vm.passengers.length > 1">{{ passengerNumber + 1 }}.</span> {{ \'web.passengerCategory.\' | aliasWithPrefix:passenger.categoryCode }}</div><div class="selectWrap itemName__ui-select" ng-if="vm.authoriseCustomer && vm.privatePassengers.length"><ui-select name="privatePassenger" search-enabled="false" ng-model="passenger.privatePassenger" theme="selectize" ui-select-custom="" ng-change="vm.setPrivatePassenger(passengerNumber)" class="ui-select-passengers-header"><ui-select-match placeholder="{{(vm.currentLanguage !== \'ru\' && $select.selected.value.firstNameEn ? $select.selected.value.firstNameEn : $select.selected.value.firstName) || ( \'web.passengersInfo.privatePassengerSelect\' | aliasStatic)}} {{vm.currentLanguage !== \'ru\' && $select.selected.value.lastNameEn ? $select.selected.value.lastNameEn : $select.selected.value.lastName}}">{{vm.currentLanguage !== \'ru\' && $select.selected.value.firstNameEn ? $select.selected.value.firstNameEn : $select.selected.value.firstName}} {{vm.currentLanguage !== \'ru\' && $select.selected.value.lastNameEn ? $select.selected.value.lastNameEn : $select.selected.value.lastName}}</ui-select-match><ui-select-choices repeat="privatePassenger.num as (num, privatePassenger) in vm.privatePassengers"><div class="ui-select-passengers-data">{{ vm.currentLanguage !== \'ru\' && privatePassenger.value.firstNameEn ? privatePassenger.value.firstNameEn : privatePassenger.value.firstName }} {{ vm.currentLanguage !== \'ru\' && privatePassenger.value.lastNameEn ? privatePassenger.value.lastNameEn : privatePassenger.value.lastName }}</div><div class="ui-select-passengers-birth">{{ privatePassenger.value.dateOfBirth }}</div></ui-select-choices></ui-select></div></div><table class="passengerInfo"><tbody><tr><td><div class="inp inp-animate-outer"><error-message control="vm.passengerForms[passengerNumber].lastName" touched="vm.submitTouched"></error-message><input type="text" name="lastName" ng-model="passenger.lastName" ng-blur="vm.lastNameBlurHandler(passengerNumber)" required="" ng-pattern="vm.passengersCheck.passengerLastNameRegexp" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}"> <label class="inp-animate-label"><span>{{ \'web.passengersInfo.label.lastName\' | aliasStatic}}</span></label></div></td><td><div class="inp inp-animate-outer"><error-message control="vm.passengerForms[passengerNumber].firstName" touched="vm.submitTouched"></error-message><input type="text" name="firstName" ng-model="passenger.firstName" ng-blur="vm.firstNameBlurHandler(passengerNumber)" required="" ng-pattern="vm.passengersCheck.passengerFirstNameRegexp" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}"> <label class="inp-animate-label"><span>{{ \'web.passengersInfo.firstName\' | aliasStatic}}</span></label></div></td><td><div class="inp inp-animate-outer"><error-message control="vm.passengerForms[passengerNumber].dateOfBirth" touched="vm.submitTouched"></error-message><input type="text" name="dateOfBirth" ng-model="passenger.dateOfBirth" required="" check-date-format="" check-date-range="" data-min-date="{{ vm.rangeBirthByPassenger[passengerNumber].from }}" data-max-date="{{ vm.rangeBirthByPassenger[passengerNumber].to }}" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}" ui-mask="99.99.9999" model-view-value="true" ui-mask-placeholder="{{ \'web.datePattern\' | aliasStatic}}"> <label class="inp-animate-label"><span>{{ \'web.passengersInfo.dateOfBirth\' | aliasStatic}}</span></label></div></td><td><div class="inp inp-animate-outer"><error-message control="vm.passengerForms[passengerNumber].gender" touched="vm.submitTouched"></error-message><ui-select ng-model="passenger.gender" theme="selectize" name="gender" search-enabled="false" error-highlight="{{vm.submitTouched}}" ui-select-custom="" class="ui-select-custom ui-select-passengers" required=""><ui-select-match placeholder="{{$select.selected.name || ( \'web.privatePassengers.gender\' | aliasStatic) }}">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat="gender.code as gender in vm.passangersAlias"><div ng-bind-html="gender.name"></div></ui-select-choices></ui-select><label class="inp-animate-label"><span>{{ \'web.passengersInfo.label.gender\' | aliasStatic}}</span></label></div></td></tr><tr><td><div class="inp inp-animate-outer"><error-message control="vm.passengerForms[passengerNumber].nationality" touched="vm.submitTouched"></error-message><ui-select ng-model="passenger.nationality" theme="selectize" name="nationality" search-enabled="{{ !vm.isMobile }}" skip-focusser="true" ng-change="vm.nationalityChangeHandler(passengerNumber)" error-highlight="{{vm.submitTouched}}" ui-select-custom="" class="ui-select-custom ui-select-passengers" required=""><ui-select-match placeholder="{{$select.selected[vm.localNamePropName] || ( \'web.privatePassengers.nationality\' | aliasStatic) }}">{{$select.selected[vm.localNamePropName]}}</ui-select-match><ui-select-choices repeat="country.code as country in vm.countriesList | filter: {[vm.localNamePropName]: $select.search} track by country.code"><div ng-bind-html="country[vm.localNamePropName]"></div></ui-select-choices></ui-select><label class="inp-animate-label"><span>{{ \'web.passengersInfo.label.nationality\' | aliasStatic}}</span></label></div></td><td><div class="inp inp-animate-outer"><error-message control="vm.passengerForms[passengerNumber].documentType" touched="vm.submitTouched"></error-message><ui-select ng-model="passenger.documentType" name="documentType" theme="selectize" search-enabled="false" ng-change="vm.documentTypeChangeHandler(passengerNumber)" class="ui-select-custom ui-select-passengers" ui-select-custom="" error-highlight="{{vm.submitTouched}}" required=""><ui-select-match placeholder="{{$select.selected.name || ( \'web.passengersInfo.documentType\' | aliasStatic) }}">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat="doc.code as doc in vm.documentTypesByPassenger[passengerNumber]"><div class="{{ \'documentTypeOption_\' + doc.code }}" ng-bind-html="doc.name"></div></ui-select-choices></ui-select><label class="inp-animate-label"><span>{{ \'web.passengersInfo.label.documentType\' | aliasStatic}}</span></label></div></td><td><div class="inp inp-animate-outer" <error-message="" control="vm.passengerForms[passengerNumber].documentNumber" touched="vm.submitTouched"><info-message ng-if="passenger.documentType && vm.hasAlias(\'web.messages.formatDocumentNumber.\' + passenger.documentType)" touched="vm.submitTouched" control="vm.passengerForms[passengerNumber].documentNumber" format-alias="\'web.messages.formatDocumentNumber.\' + passenger.documentType"></info-message><input type="text" name="documentNumber" ng-model="passenger.documentNumber" required="" clean-document-number="" ng-pattern="vm.documentNumberRegexByPassenger[passengerNumber]" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}"> <label class="inp-animate-label"><span>{{ \'web.passengersInfo.documentNumber\' | aliasStatic}}</span></label></div></td><td><div class="inp inp-animate-outer" ng-if="vm.getExpiryByDocType(passenger.documentType, passenger.categoryCode)"><error-message control="vm.passengerForms[passengerNumber].documentDate" touched="vm.submitTouched"></error-message><input type="text" name="documentDate" ng-model="passenger.documentDate" required="" check-date-format="" check-date-range="" data-min-date="{{ vm.getExpiryByDocType(passenger.documentType, passenger.categoryCode) }}" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}" ui-mask="99.99.9999" model-view-value="true" ui-mask-placeholder="{{ \'web.datePattern\' | aliasStatic}}"> <label class="inp-animate-label"><span>{{ \'web.passengersInfo.documentDate\' | aliasStatic}}</span></label></div></td></tr><tr ng-if="(passenger.categoryCode == \'AAA\' || passenger.categoryCode == \'CPA\' || passenger.categoryCode == \'MLA\') && (vm.passengersCheck.allowEmail || vm.passengersCheck.allowPhone)"><td><div class="inp inp-animate-outer" ng-if="vm.passengersCheck.allowPhone"><error-message control="vm.passengerForms[passengerNumber].phone" format-alias="\'web.messages.formatPhone\'" touched="vm.submitTouched"></error-message><input type="tel" name="phone" ng-model="passenger.phone" ng-blur="vm.phoneBlurHandler(passengerNumber)" phone-mask="" ng-required="vm.passengersCheck.requirePhone" ng-pattern="\'customer.phoneRegexp\' | param" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}" placeholder=""> <label class="inp-animate-label"><span>{{ \'web.passengersInfo.phone\' | aliasStatic}}</span></label></div></td><td><div class="inp inp-animate-outer" ng-if="vm.passengersCheck.allowEmail"><error-message control="vm.passengerForms[passengerNumber].email" touched="vm.submitTouched"></error-message><input type="email" name="email" ng-model="passenger.email" ng-blur="vm.emailBlurHandler(passengerNumber)" ng-required="vm.passengersCheck.requireEmail" ng-pattern="vm.passengersCheck.emailRegex" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}"> <label class="inp-animate-label"><span>{{ \'web.passengersInfo.email\' | aliasStatic}}</span></label></div></td><td class="mobileHide"></td><td class="mobileHide"></td></tr><tr ng-if="(passenger.categoryCode == \'AAA\' || passenger.categoryCode == \'CPA\' || passenger.categoryCode == \'MLA\') && vm.allowBonusCard"><td><div class="inp"><div class="customCheckbox"><label><input class="haveCart_js" type="checkbox" name="hasBonusCard" ng-model="passenger.hasBonusCard" ng-change="passenger.bonusCard = \'\';"><span></span> {{ \'web.passengersInfo.hasBonusCard\' | aliasStatic}}</label></div></div></td><td><div class="inp inp-animate-outer" ng-class="{ invisibleBonusCard: !passenger.hasBonusCard, visibleBonusCard: passenger.hasBonusCard }"><error-message control="vm.passengerForms[passengerNumber].bonusCard" touched="vm.submitTouched"></error-message><input type="text" class="inp-animate-placeholder" name="bonusCard" ng-model="passenger.bonusCard" ng-pattern="\'passengers.bonusCardRegex\' | param" error-highlight="{{vm.submitTouched}}"> <label class="inp-animate-label"><span>{{ \'web.passengersInfo.bonusCard\' | aliasStatic}}</span></label></div></td><td class="mobileHide"></td><td class="mobileHide"></td></tr></tbody></table></div></div></form><form ng-if="vm.orderInfo && vm.passengersCheck" name="vm.customerForm" class="customerForm__js" form-submit-error-highlight="" novalidate=""><div class="item item_contact"><div class="item__i"><h3 class="itemName">{{ \'web.passengersInfo.customerHeader\' | aliasStatic}}</h3><table><tbody><tr><td><div class="inp inp-animate-outer"><error-message control="vm.customerForm.lastName" touched="vm.submitTouched"></error-message><input type="text" name="lastName" ng-model="vm.customer.lastName" required="" ng-pattern="\'customer.lastNameRegexp\' | param" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}"> <label class="inp-animate-label"><span>{{ \'web.customerInfo.lastName\' | aliasStatic}}</span></label></div></td><td><div class="inp inp-animate-outer"><error-message control="vm.customerForm.firstName" touched="vm.submitTouched"></error-message><input type="text" name="firstName" ng-model="vm.customer.firstName" required="" ng-pattern="\'customer.firstNameRegexp\' | param" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}"> <label class="inp-animate-label"><span>{{ \'web.customerInfo.firstName\' | aliasStatic}}</span></label></div></td></tr><tr><td><div class="inp inp-animate-outer"><error-message control="vm.customerForm.phone" format-alias="\'web.messages.formatPhone\'" touched="vm.submitTouched"></error-message><input type="tel" name="phone" ng-model="vm.customer.phone" phone-mask="" ng-pattern="\'customer.phoneRegexp\' | param" required="" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}"> <label class="inp-animate-label"><span>{{ \'web.customerInfo.phone\' | aliasStatic}}</span></label></div></td><td><div class="inp inp-animate-outer"><error-message control="vm.customerForm.email" touched="vm.submitTouched"></error-message><input type="email" name="email" ng-model="vm.customer.email" required="" ng-pattern="\'site.emailRegexp\' | param" ng-change="vm.checkLogin()" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}"> <label class="inp-animate-label"><span>{{ \'web.customerInfo.email\' | aliasStatic}}</span></label></div></td></tr><tr ng-if="!vm.authoriseCustomer && vm.allowCreateAccount && vm.customer.createAccount"><td><div class="inp"><error-message control="vm.customerForm.password" touched="vm.submitTouched"></error-message><input type="password" name="password" ng-model="vm.customer.password" required="" ng-pattern="\'site.passwordRegexp\' | param" check-equals="{{ vm.customer.passwordRepeat }}" class="textInp" error-highlight="{{vm.submitTouched}}" tabindex="1000" placeholder="{{ \'web.customerInfo.password\' | aliasStatic}}"></div></td><td><div class="inp"><error-message control="vm.customerForm.passwordRepeat" touched="vm.submitTouched"></error-message><input type="password" name="passwordRepeat" ng-model="vm.customer.passwordRepeat" required="" ng-pattern="\'site.passwordRegexp\' | param" check-equals="{{ vm.customer.password }}" class="textInp" error-highlight="{{vm.submitTouched}}" tabindex="1001" placeholder="{{ \'web.customerInfo.passwordRepeat\' | aliasStatic}}"></div></td></tr><tr><td colspan="2"><div class="inp" ng-if="!vm.authoriseCustomer && vm.allowCreateAccount"><div class="customCheckbox"><label><input type="checkbox" ng-model="vm.customer.createAccount"> <span></span> {{ \'web.passengersInfo.createAccountInvitationMessage\' | aliasStatic}}</label></div></div></td></tr></tbody></table></div></div></form><p class="login" ng-if="!vm.authoriseCustomer && vm.accountExist">{{ \'web.passengersInfo.accountExistMessage\' | aliasStatic}} {{ vm.customer.email }} <a href="" fancybox="popupLogin" data-login="{{ vm.customer.email }}">{{ \'web.passengersInfo.loginInvitationLink\' | aliasStatic}}</a></p><div ng-if="vm.errorMessage" class="infoMessage infoMessage_error"><div class="infoMessage__i"><p>{{ vm.errorMessage | aliasDynamic }}</p></div></div><div ng-if="\'passengers.usePersonalDataAgreeCheckbox\' | param" class="iconfirm"><div class="iconfirm__i"><div class="customCheckbox"><label><input type="checkbox" id="personalDataShareAgreeChb" ng-model="vm.personalDataShareAgree"><span></span></label></div><p><label for="personalDataShareAgreeChb"><wrap ng-bind-html="\'web.personalDataShareAgree\' | aliasStatic"></wrap></label></p></div></div><div class="passengers-form-footer" ng-bind-html="\'web.passengersInfo.footer\' | aliasStatic"></div></div></div><div class="searchResultsControl"><div class="searchResultsControl__i"><a href="#{{$root.ROUTES.SEARCH}}" class="btn btn_back">{{ \'web.buttons.back\' | aliasDynamic }}</a> <a href="" ng-click="vm.submitHandler()" class="btn btn_next" ng-class="{ disabled: (!vm.personalDataShareAgree && (\'passengers.usePersonalDataAgreeCheckbox\' | param)) }" ng-if="!vm.submitLoading"><span class="mobileHide">{{ \'web.buttons.gotoExtraServices\' | aliasStatic}}</span> <span class="mobileShow">{{ \'web.buttons.next\' | aliasStatic}}</span></a> <a href="" class="btn btn_next disabled loading-start" ng-if="vm.submitLoading"><span class="loader"><img alt="" src="themes/websky/assets/static/img/general/form/loader-circle-64.gif"></span> <span class="mobileHide">{{ \'web.buttons.gotoExtraServices\' | aliasStatic}}</span> <span class="mobileShow">{{ \'web.buttons.next\' | aliasStatic}}</span></a></div></div></div></div></div><div class="push"></div></section><app-footer ng-if="!vm.loading"></app-footer>')}])}();