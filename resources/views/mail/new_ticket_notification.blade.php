<x-mail::message>

Dear EmpireOne IT Team,

I hope this message finds you well.

Details:
Ticket ID (if applicable): {{$data['ticket_id']}}

I am writing to request assistance with the ticketing system. 

Details:

Ticket ID (if applicable): {{$data['ticket_id']}}<br />
Description of the Issue: {{$data['details']}}<br />
I would appreciate your assistance in resolving this matter at your earliest convenience.<br />
Please let me know if you need any further information from my side.<br />

Thank you for your help!
Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
