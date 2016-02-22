<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTaskTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('task_table', function (Blueprint $table) {
            $table->increments('id');
            $table->string('task_name',250);
            $table->string('task_description',500);
            $table->float('hours');
            $table->integer('user_story_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('task_table');
    }
}
