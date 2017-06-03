'use strict';
angular.module('DemoApp')
        .controller('menuctrl', function ($scope, $timeout) {
            $scope.init = init;
            $scope.errmsg = { msg :false};
            function init() {

            }

            $(document).ready(function () {
                $('[data-toggle=offcanvas]').click(function () {
                    $('.row-offcanvas').toggleClass('active');
                });
            });
            $scope.thumbnail = {
                dataUrl: 'adsfas'
            };
            $scope.fileReaderSupported = window.FileReader != null;
            $scope.photoChanged = function (files) {
                debugger;
                if (files[0].size > 1964754) {
                    $scope.errmsg.error = "please select less then 2mb"
                    $scope.errmsg.msg=true;

                } else {
                    if (files != null) {
                        var file = files[0];
                        if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
                            $timeout(function () {
                                var fileReader = new FileReader();
                                fileReader.readAsDataURL(file);
                                fileReader.onload = function (e) {
                                    $timeout(function () {
                                        $scope.thumbnail.dataUrl = e.target.result;
                                    });
                                }
                            });
                        }
                    }
                }
            };

        });