angular.module('agile')

.controller('AgileBoardCtrl', ['$state', '$uibModal', function ($state, $uibModal){
	Agile = this;


    Agile.todoList = [
        {
            content: 'Create Team and Project Controller.',
            date: '12.10.2015',
            statusClass: 'warning',
            tagName: 'Cleverbot026'
        },
        {
            content: 'Edit Member Controller.',
            date: '05.04.2015',
            statusClass: 'success',
            tagName: 'Cleverbot026'
        },
        {
            content: 'Create Member Controller.',
            date: '16.11.2015',
            statusClass: 'info',
            tagName: 'Cleverbot026'
        },
        {
            content: 'Analyze Project Requirement.',
            date: '06.10.2015',
            statusClass: 'danger',
            tagName: 'Gidj02'
        },
        {
            content: 'Add Reminder of Retrospective..',
            date: '09.12.2015',
            statusClass: 'warning',
            tagName: 'Gidj02'
        },
        {
            content: 'Comment out CSRF token.',
            date: '08.04.2015',
            statusClass: 'warning',
            tagName: 'Benigls'
        },
        {
            content: 'Resolve Conflict.',
            date: '05.04.2015',
            statusClass: 'success',
            tagName: 'Benigls'
        },
        {
            content: 'Update to Resource.',
            date: '16.11.2015',
            statusClass: 'info',
            tagName: 'Benigls'
        }
    ];
    Agile.inProgressList = [
        {
            content: 'Add Agile board Module.',
            date: '12.10.2015',
            statusClass: 'success',
            tagName: 'Gidj02'
        },
        {
            content: 'Update Tag Controller.',
            date: '05.04.2015',
            statusClass: 'success',
            tagName: 'Josersjq'
        },
        {
            content: 'Modal on new Project.',
            date: '16.11.2015',
            statusClass: 'warning',
            tagName: 'Mmagrasya'
        },
        {
            content: 'Refactoring code.',
            date: '09.12.2015',
            statusClass: 'warning',
            tagName: 'Josersjq'
        },
        {
            content: 'Change quantity of user story.',
            date: '08.04.2015',
            statusClass: 'info',
            tagName: 'Mmagrasya'
        },
        {
            content: 'Refactoring codes.',
            date: '05.04.2015',
            statusClass: 'success',
            tagName: 'Mmagrasya'
        },
        {
            content: 'Change template and set up notification and dashboard.',
            date: '11.04.2015',
            statusClass: 'danger',
            tagName: 'Mmagrasya'
        }
    ];
    
    Agile.completedList = [
        {
            content: 'Remove app, because of conversion to angular problem.',
            date: '16.11.2015',
            statusClass: 'info',
            tagName: 'Gidj02'
        },
        {
            content: 'Refactor UserStoryTableSeeder.',
            date: '09.12.2015',
            statusClass: 'warning',
            tagName: 'Josersjq'
        },
        {
            content: 'Memorized Preamble.',
            date: '09.12.2015',
            statusClass: 'warning',
            tagName: 'Mmagrasya'
        },
        {
            content: 'Daily scrum.',
            date: '08.04.2015',
            statusClass: 'warning',
            tagName: 'Gidj02'
        },
        {
            content: 'Create burndown chart module.',
            date: '05.04.2015',
            statusClass: 'success',
            tagName: 'Cleverbot026'
        },
        {
            content: 'Find Francis.',
            date: '16.11.2015',
            statusClass: 'info',
            tagName: 'Deadpool'
        },
        {
            content: 'Maximum effort on Planning and Design.',
            date: '12.10.2015',
            statusClass: 'warning',
            tagName: 'Deadpool'
        },
        {
            content: 'Create repository.',
            date: '05.04.2015',
            statusClass: 'success',
            tagName: 'Benigls'
        }
    ];

    Agile.sortableOptions = {
        connectWith: ".connectList"
    };
$
}])