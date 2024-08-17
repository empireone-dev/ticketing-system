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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('email')->unique();
            $table->bigInteger('account_type')->nullable();
            $table->string('position')->nullable();
            $table->enum('isOnline', ['true', 'false'])->default('false');
            $table->bigInteger('pending_count')->default(0)->nullable();
            $table->bigInteger('declined_count')->default(0)->nullable();
            $table->bigInteger('completed_count')->default(0)->nullable();
            $table->string('password');
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
