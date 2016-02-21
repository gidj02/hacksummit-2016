<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserStory extends Model
{
    protected $table = 'user_story_table';

    protected $guarded = ['id'];
}
