<?php

namespace App\Http\Controllers;

use App\Mail\SendReport;
use App\Models\Ticket;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Mail;

class SendReportController extends Controller
{
    public function send_reports()
    {
        $date = Carbon::today()->subDay();

        // Query tickets created on the given day
        $tickets = Ticket::whereDate('created_at', $date)->with(['user', 'assigned_to'])
            ->get();
        Mail::to('compliance@empireonegroup.com')->send(new SendReport($tickets));

        // Return the results
        // return response()->json([
        //     'date' => $date->toDateString(),
        //     'tickets' => $tickets
        // ]);
    }
    public function export_daily_report(Request $request)
    {
        $date = $request->date;
        $tickets = Ticket::whereDate('created_at', $date)->with(['user', 'assigned_to'])->get();
        $handle = fopen('php://output', 'w');
    
        $headers = [
            'Ticket ID',
            'User Name',
            'Assigned To',
            'Created At',
            'Updated At',
        ];
        fputcsv($handle, $headers);
        foreach ($tickets as $ticket) {
            fputcsv($handle, [
                $ticket->id,
                $ticket->user->name ?? 'N/A',
                $ticket->assigned_to->name ?? 'Unassigned',
                $ticket->created_at,
                $ticket->updated_at,
            ]);
        }
    
        fclose($handle);
    
        return Response::stream(function () {
            echo " Output";
        }, 200, [
            'Content-Type' => 'text/plain',
            'Content-Disposition' => 'attachment; filename="' . now()->toDateString() . '.csv"',
        ]);
    }
   
    
}
