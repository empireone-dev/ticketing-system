<x-mail::message>

  Hi {{ $data['name'] }},

  You have received a new [message/comment] from your website.

  <x-mail::button :url="$data['link']">
  Click here to view
  </x-mail::button>

  **Details:**

  - **Name:** {{ $data['name'] }}
  - **Email:** {{ $data['email'] }}
  - **Message/Comment:**
  {{ $data['message'] }}

  Please review and respond at your earliest convenience.

  Thanks,<br>
  {{ config('app.name') }}

</x-mail::message>