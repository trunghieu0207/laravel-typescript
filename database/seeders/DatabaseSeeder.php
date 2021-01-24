<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Nguyen Van A',
                'email' => 'nguyenvana@mail.com',
                'password' => bcrypt('123'),
                'phone' => '12345678'
            ],
            [
                'name' => 'Nguyen Van B',
                'email' => 'nguyenvanB@mail.com',
                'password' => bcrypt('123'),
                'phone' => '12345678'
            ],
            [
                'name' => 'Nguyen Van C',
                'email' => 'nguyenvanC@mail.com',
                'password' => bcrypt('123'),
                'phone' => '12345678'
            ],
            [
                'name' => 'Nguyen Van D',
                'email' => 'nguyenvanD@mail.com',
                'password' => bcrypt('123'),
                'phone' => '12345678'
            ]
        ]);
    }
}
