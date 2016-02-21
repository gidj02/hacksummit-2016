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
            'created_at' => Carbon::now(),
            'end_at' => Carbon::now()->addHours(1)
            ));

        $roleList = array('User', 'Staff', 'Admin');
        $goalList = array('Place Order', 'Login', 'Search', 'Checkout', 'Cancel Order', 'Logout', 'Add to Wishlist', 'Print Receipt','Add to cart', 'Empty Cart');
        $businessValueList = array(
            'I can place another order',
            'I can access the dashboard',
            'I can find my item',
            'I can cancel my order',
            'I can log out my account',
            'I can have an official receipt',
            'I can purchase later',
            'I can purchase my order',
            'I can add items to my cart',
            'I can discard my cart'
            );

        foreach(range(1, 99) as $index)
        {
            $role = $faker->randomElement($roleList);
            $goal = $faker->randomElement($goalList);
            $businessValue = $faker->randomElement($businessValueList);

            UserStory::create(array(
                'user_story_name' => 'As a ' . $role . ', I want to ' . $goal . ', so that ' . $businessValue . '.',
                'complexity' => $faker->randomElement([1, 2, 3, 5, 8, 13, 21]),
                'tag_id' => $faker->randomDigitNotNull(),
                'cat_id' => $faker->randomDigitNotNull(),
                'proj_id' => $faker->randomDigitNotNull(),
                'created_at' => Carbon::now(),
                'end_at' => Carbon::now()->addHours($faker->randomElement([1, 3, 8]))
                ));
        }


    }
}
