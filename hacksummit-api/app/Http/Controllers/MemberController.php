<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Member;
use Response;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Member::get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
​
        $member = Member::create(
            $request->only('name', 'username','password', 'role_id', 'skill_set_id', 'user_set_id', 'created_at', 'updated_at')
        );
            
        return response()->json($member);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Member::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
        $member = Member::find($id);
​
        if ($member) {
            $member->id = $request->get('id');
            $member->name = $request->get('name');
            $member->username = $request->get('username');
            $member->password = $request->get('password');
            $member->role_id = $request->get('role_id');
            $member->skill_set_id = $request->get('skill_set_id');
            $member->user_set_id = $request->get('user_set_id');
            $member->created_at = $request->get('created_at');
            $member->updated_at = $request->get('update_at');
        }
​
        $category->save();
​
        return response()->json($member);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        response()->json(Member::destroy($id));
    }
}
