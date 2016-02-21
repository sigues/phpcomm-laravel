<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class ApiRequest extends Request
{
    public function wantsJson()
    {
        return true;
    }

    public function response(array $errors)
    {
        if ($this->ajax() || $this->wantsJson())
        {
          return response()->api_response(null,400,$errors);
          //  return Response::json($errors);
        }

        return $this->redirector->to($this->getRedirectUrl())
                                        ->withInput($this->except($this->dontFlash))
                                        ->withErrors($errors, $this->errorBag);
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }
}
