<div style="position: relative; overflow-x: auto; width: 80%;">
<h3>Click the link below to export the daily report for {{ now()->subDay()->toFormattedDateString() }}:</h3>
<a href="{{ url('/api/export_daily_report?date=' . now()->subDay()->toFormattedDateString()) }}" target="_blank">
  Export Daily Report
</a>


  <table style="width: 100%; font-size: 0.875rem; text-align: left; color: #6b7280;">
    <thead style="font-size: 0.75rem; color: #374151; text-transform: uppercase; background-color: #f9fafb;">
      <tr>
        <th scope="col" style="padding: 0.75rem 1.5rem; text-align: left;">Ticket ID</th>
        <th scope="col" style="padding: 0.75rem 1.5rem; text-align: left;">Requested To</th>
        <th scope="col" style="padding: 0.75rem 1.5rem; text-align: left;">Assigned To</th>
        <th scope="col" style="padding: 0.75rem 1.5rem; text-align: left;">Details</th>
        <th scope="col" style="padding: 0.75rem 1.5rem; text-align: left;">Status</th>
      </tr>
    </thead>
    <tbody>
      @foreach ($data as $item)
      <tr style="background-color: #ffffff; border-bottom: 1px solid #d1d5db;">
        <th style="padding: 1rem 1.5rem; text-align: left;">{{ $item->id }}</th>
        <td style="padding: 1rem 1.5rem; text-align: left;">{{ $item->user->name ?? 'N/A' }}</td>
        <td style="padding: 1rem 1.5rem; text-align: left;">{{ $item->assigned_to->name ?? 'Unassigned' }}</td>
        <td style="padding: 1rem 1.5rem; text-align: left;">{{ $item->details }}</td>
        <td style="padding: 1rem 1.5rem; text-align: left;">{{ $item->status }}</td>
      </tr>
      @endforeach
    </tbody>
  </table>
</div>