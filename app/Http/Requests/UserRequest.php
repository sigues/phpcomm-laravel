<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class UserRequest extends ApiRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:90',
            'username' => 'required|max:45',
            'email' => 'email|required|unique:users,email',
            'password' => 'required|max:90',
        ];
    }
}
