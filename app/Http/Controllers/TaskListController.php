<?php

namespace App\Http\Controllers;

use App\Models\TaskList;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class TaskListController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('TaskLists/Index', [
            'taskLists' => TaskList::with('user:id,name')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:40',
            'description' => 'nullable|string|max:255',
        ]);
 
        $request->user()->taskLists()->create($validated);
 
        return redirect(route('tasklists.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(TaskList $taskList)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TaskList $taskList)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TaskList $taskList): RedirectResponse
    {
        Gate::authorize('update', $taskList);

        $validated = $request->validate([
            'title' => 'required|string|max:40',
            'description' => 'nullable|string|max:255',
        ]);

        $taskList->update($validated);

        return redirect(route('tasklists.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TaskList $taskList): RedirectResponse
    {
        Gate::authorize('delete', $taskList);

        $taskList->delete();

        return redirect(route('tasklists.index'));
    }
}
