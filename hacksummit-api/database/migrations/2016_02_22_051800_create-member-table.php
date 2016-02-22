<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMemberTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('member_table', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',250);
            $table->string('username',250);
            $table->string('password',62);
            $table->integer('role_id');
            $table->integer('skill_set_id');
            $table->integer('user_set_id');
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
        Schema::drop('member_table');
    }
}
