<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddStartEndDateToUserStory extends Migration
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
            $table->dateTime('start_at');
            $table->dateTime('end_at');
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
        Schema::table('user_story_table', function (Blueprint $table) {
            $table->dropColumn('user_story_name','tag_id','cat_id','proj_id','complexity');
        });
    }
}
