<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatBrowsingInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('browsing_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->length(11)->nullable();
            $table->integer('url_id')->length(11)->nullable();
            $table->string('user_ip', 100)->nullable();
            $table->string('location', 100)->nullable();
            $table->string('latitude', 100)->nullable();
            $table->string('longitude', 100)->nullable();
            $table->text('browser')->nullable();
            $table->string('device', 100)->nullable();
            $table->text('previous_url')->nullable();
            $table->text('visit_url')->nullable();
            $table->string('active_status', 100)->nullable();
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
        //
    }
}
