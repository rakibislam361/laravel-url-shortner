@extends('frontend.layouts.app')

@section('title', __('Url Shortner'))

@section('content')
    <div class="container py-4">
        <div class="row justify-content-center mt-5">
            <div class="col-md-8">
                <div class="card mb-2">
                    <div class="card-body">
                        <x-forms.post :action="route('frontend.url_shortener.store')">
                            <div class="form-row">
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <input value="{{ session()->get('url') }}" name="url" type="text"
                                            class="form-control" placeholder="https://www.example.com">
                                    </div>
                                    @if ($errors->has('url'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('url') }}</small>
                                        </p>
                                    @endif
                                </div>

                                <div class="col-md-2">
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </x-forms.post>
                    </div>
                </div>
                @if (Auth::check())
                    <x-backend.card xmlns:livewire="">
                        <x-slot name="body">
                            <livewire:frontend.url-table />
                        </x-slot>
                    </x-backend.card>
                @endif
            </div>
        </div> <!-- row-->
    </div> <!-- container-->

@endsection

@push('after-styles')
    <livewire:styles />
@endpush

@push('after-scripts')
    <livewire:scripts />
@endpush
