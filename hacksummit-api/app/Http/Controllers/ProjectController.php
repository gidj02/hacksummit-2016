<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Project;
use Response;

use App\Http\Controllers\ProjectController;
use Computation\Process\DecisionSupportSystem;

use DB;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Project::get());
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
        $member = Project::create(
            $request->only('project_name', 'project_description','tag_id', 'cat_id', 'created_id', 'updated_id')
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
        return response()->json(Project::find($id));
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
        
        $proj = Project::find($id);
​
        if ($proj) {
            $proj->id = $request->get('id');
            $proj->project_name = $request->get('project_name');
            $proj->project_description = $request->get('project_description');
            $proj->tag_id = $request->get('tag_id');
            $proj->cat_id = $request->get('cat_id');
            $proj->created_at = $request->get('created_at');
            $proj->updated_at = $request->get('update_at');
        }
​
        $proj->save();
​
        return response()->json($proj);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        response()->json(Project::destroy($id));
    }

    public function getUserStories(Request $request){
        $tag = $request->get('tag');
        
        $tags = json_decode($tag);
        
        $final = array();
        $x = 0;
        foreach ($tags as $key => $value) {
            $data = array();
            //$data[] = $value;
            $tag_id = (array)DB::table('tag_table')->where('tag_name', '=', $value)->first();
            $query = DB::table('user_story_table')->where('tag_id', '=', $tag_id['id'] )->get();
            $counts = DB::table('user_story_table')->where('tag_id', '=', $tag_id['id'] )->count();
            
            foreach ($query as $key1 => $value1) {
                $data[] =$value1->user_story_name;

            }
            
            $data = array_count_values($data);

            foreach ($data as $key1 => $value1) {
                $data[$key1]=$value1/$counts;
                $aww = $data;
            }
            foreach ($data as $key1 => $value1) {
                if($value1/max($data)>=.5){
                    $final[]= $key1;
                }
            }
        }

        $output['sum'] = 0;

        foreach ($final as $key => $value) {
            $sum = 0;
            $count =0;
            $query = DB::table('user_story_table')->where('user_story_name', '=', $value )->get();
            foreach ($query as $key1 => $value1) {
                //dd( $value1->created_at);
                $date1=date_create($value1->created_at);
                $date2=date_create($value1->end_at);
                $diff=(array)date_diff($date1,$date2);
                $count++;
                $sum = $sum+$diff['h'];

            }

            $averagehr = $sum/$count;
            $output['user_stories'][$value] =  $averagehr;
            $output['sum'] = $averagehr + $output['sum'];

            
        }

        return response()->json($output);
        
    }
}
