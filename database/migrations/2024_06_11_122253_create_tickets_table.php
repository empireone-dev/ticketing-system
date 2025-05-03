<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->nullable();
            $table->string('ticket_id')->nullable();
            $table->string('category_id')->nullable();
            $table->string('details')->nullable();
            $table->string('others')->nullable();
            $table->bigInteger('assigned_to')->nullable();
            $table->string('status')->nullable();
            $table->string('station')->nullable();
            $table->string('scsite')->nullable();
            $table->string('isUrgent')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
