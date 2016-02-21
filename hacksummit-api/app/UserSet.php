<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserSet extends Model
{
    protected $table = 'user_set_table';

    protected $guarded = ['id'];
}
