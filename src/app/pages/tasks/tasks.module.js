
(function () {
  'use strict';

  angular.module('demo.pages.tasks', ['ui.select','ngSanitize'])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tasks', {
          title: '巡视管理',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'TasksPageCtrl',
          sidebarMeta: {
            icon: 'ion-ios-clock-outline',
            order: 300,
          },
        }).state('tasks.allTasks', {
          url: '/tasks/allTasks',
          title: '巡视任务',
          templateUrl: 'app/pages/tasks/allTasks.html',
          sidebarMeta: {
            order: 0,
          },

        }).state('tasks.addTask', {
            url: '/tasks/addTask',
            title: '添加巡视任务',
            controller: 'AddTaskCtrl',
            templateUrl: 'app/pages/tasks/addTask.html',

        }).state('tasks.submitTask', {
            url: '/tasks/submitTask',
            // url: '/tasks/submitTask/:taskId',
            title: '填写巡视任务',
            controller: 'SubmitTaskCtrl',
            templateUrl: 'app/pages/tasks/submitTask.html',

        }).state('tasks.results', {
          url: '/tasks/results',
          title: '巡视结果',
          templateUrl: 'app/pages/tasks/results.html',
          sidebarMeta: {
            order: 1,
          },
        }).state('tasks.subModule', {
          url: '/tasks/url',
          title: '编辑页面',
          templateUrl: 'app/pages/tasks/xxxx.html',
        }).state('tasks.taskForm', {
          url: '/tasks/taskForm',
          title: '巡视表单',
          controller: 'TaskFormCtrl',
          templateUrl: 'app/pages/tasks/taskForm.html',
          sidebarMeta: {
            order: 2,
          },
        });
    $urlRouterProvider.when('/tables','/tables/basic');
  }

})();
