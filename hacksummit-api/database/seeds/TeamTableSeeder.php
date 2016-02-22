<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

use App\Team;

class TeamTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        Team::truncate();

        $teamList = array('Development', 'QA', 'Design', 'SEO', 'Sales' );
        foreach(range(0,19)as $index)
        {
            Team::create(array(
                'member_id' => $faker->randomDigitNotNull(),
                'team_name' => $teamList[$index] . ' Team ' . $faker()->randomDigitNotNull()
            ));
        }
    }
}
