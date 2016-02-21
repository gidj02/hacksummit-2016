<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{

    protected $table = 'task_table';

    protected $guarded = ['id'];
}
