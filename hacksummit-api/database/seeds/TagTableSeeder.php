<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

use App\Tag;

class TagTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tag::truncate();

        $tag = array('Web', 'Mobile', 'Angular', 'React', 'Django', 'Laravel', 'Paypal', 'MasterCard', 'C', 'C#', 'Raspberry', 'Python', 'PHP', 'CodeIgniter', 'CakePHP', 'Flask', 'VanillaJS', 'C++', 'Basic', 'Visual Studio');

        foreach(range(1,20) as $index)
        {
            Tag::create(array(
            'tag_name' => $tag[$index],
            'created_at' => Carbon::now(),
            'update_at' => Carbon::now()
            ));
        }
    }
}
