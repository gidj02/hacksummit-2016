<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Carbon\Carbon;

use App\UserStory;

class UserStoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        UserStory::truncate();

        UserStory::create(array(
            'user_story_name' => 'As a User, I want to Place Order, so that I can place another order.',
            'complexity' => 1,
            'tag_id' => 1,
            'cat_id' => 1,
            'proj_id' => 1,
            'created_at' => $faker-> Carbon::now(),
            'end_at' => $faker-> Carbon::now()->addHours(1)
            ));

        $roleList = array('User', 'Staff', 'Admin');
        $goalList = array('Place Order');
        $businessValueList = array('I can place another order');

        foreach(range(1,999) as $index)
        {
            $role = randomElement($roleList);
            $goal = randomElement($goalList);
            $businessValue = randomElement($businessValueList);

            UserStory::create(array(
                'user_story_name' => 'As a ' $role ', I want to' $goal ', so that ' $businessValue '.',
                'complexity' => $faker->randomElement([1, 2, 3, 5, 8, 13, 21]),
                'tag_id' => $faker->randomDigitNotNull(),
                'cat_id' => $faker->randomDigitNotNull(),
                'proj_id' => $faker->randomDigitNotNull(),
                'created_at' => $faker-> Carbon::now(),
                'end_at' => $faker-> Carbon::now()->addHours(randomElement([1, 3, 8]))
                ));
        }


    }
}
