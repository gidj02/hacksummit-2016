<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserStoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_story_table', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_story_name',250);
            $table->integer('tag_id');
            $table->integer('cat_id');
            $table->integer('proj_id');
            $table->integer('complexity');
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
        Schema::drop('user_story_table');
    }
}
