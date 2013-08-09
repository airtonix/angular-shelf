(function () {
    'use strict';

    angular.module('zj.ui.shelf', [])

        .factory("$ShelfService", ['$log', function($log){
                return {
                    shelf: null,
                    shelfToggle: null,
                    shelfCover: null,
                    shelfContainer: null,
                    toggle: function (name){
                        $log.info("Shelf.toggled");
                        this.shelfContainer.toggleClass("active");
                    },
                    close: function(name){
                        $log.info("Shelf.closed");
                        this.shelfContainer.removeClass("active");
                    },
                    open: function(name){
                        $log.info("Shelf.opened");
                        this.shelfContainer.addClass("active");
                    }
                }
            }])

        .directive('containsShelf', ['$ShelfService', function($ShelfService){
                return {
                    restrict: "ACE",
                    link: function(scope, element, attrs){
                        $ShelfService.shelfContainer = element;
                        element.addClass('contains-shelf');
                    }
                }
            }])
        .directive('shelfCover', ['$ShelfService', function($ShelfService){
                return {
                    restrict: "ACE",
                    link: function(scope, element, attrs){
                        $ShelfService.shelfCover = element;
                        element.addClass('shelf-cover');
                    }
                }
            }])
        .directive('shelf', ['$ShelfService', function($ShelfService){
                return {
                    restrict: "ACE",
                    link: function(scope, element, attrs){
                        $ShelfService.shelf = element;
                        element.addClass('shelf');
                    }
                }
            }])
        .directive('shelfToggle', ['$rootScope', '$ShelfService', function($rootScope, $ShelfService){
                return {
                    restrict: "ACE",
                    link: function(scope, element, attrs){
                        $ShelfService.shelfToggle = element;
                        element.addClass('shelf-toggle');
                        element.bind('click', function(e) {
                            $ShelfService.toggle();
                        });
                    }
                }
            }])

})();