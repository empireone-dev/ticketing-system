<x-mail::message>
  # Introduction

  Subject: Your Login Credentials for IT Ticketing System

  Dear {{$data['name']}},

  We are pleased to provide you with your login credentials for accessing IT Ticketing System. Please find the details below:

  Login URL: https://eo-iticketing.com<br />
  Username: {{$data['email']}}<br />
  Temporary Password: Business12

  Steps to Log In:

  Visit the login page using the provided URL.
  Enter your email and temporary password.
  You will be prompted to change your password after your first login. Please choose a secure password and ensure it meets the security criteria listed on the page.
  For security reasons, we recommend that you:

  Do not share your credentials with anyone.
  Change your password periodically.
  If you have any trouble logging in or have any questions, feel free to contact EmpireOne IT Department.
  Thanks,<br>

</x-mail::message>