<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::group(['prefix' => 'api/v1', 'middleware' => 'cors'], function(){
    Route::get('category', 'CategoryController@index');
    Route::get('member', 'MemberController@index');
    Route::get('project', 'ProjectController@index');
    Route::get('role', 'RoleController@index');
    Route::get('skill_set', 'SkillSetController@index');
    Route::get('skill', 'SkillController@index');
    Route::resource('tag', 'TagController',
        array('only' => array('index', 'show', 'store', 'destroy')));
    Route::get('task', 'TaskController@index');
    Route::get('team', 'TeamController@index');
    Route::get('user_set', 'UserSetController@index');
    Route::get('user_story', 'UserStoryController@index');
});
