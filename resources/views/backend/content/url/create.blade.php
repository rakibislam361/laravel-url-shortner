@inject('carbon', '\Carbon\Carbon')

@extends('backend.layouts.app')

@section('title', __('Generate Url'))

@php
$required = html()
    ->span(' *')
    ->class('text-danger');
@endphp

@section('content')

    {{ html()->form('POST', route('admin.manage-url.store'))->attribute('enctype', 'multipart/form-data')->open() }}

    <x-backend.card>
        <x-slot name="header">
            @lang('Create New URL')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link-header class="btn btn-sm btn-tool btn-secondary" icon="fas fa-backspace"
                :href="route('admin.manage-url.index')" :text="__('Cancel')" />
        </x-slot>

        <x-slot name="body">
            <div class="row">
                <div class="col-md-12">
                    <x-backend.card>
                        <div class="card-header with-border">
                            <h3 class="card-title">URL Management
                            </h3>
                        </div>
                        <x-slot name="body">
                            <div class="form-row">
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <input value="" name="url" type="text" class="form-control"
                                            placeholder="https://www.example.com">
                                    </div>
                                    @if ($errors->has('url'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('url') }}</small>
                                        </p>
                                    @endif
                                </div>
                            </div>
                        </x-slot> <!--  .card-body -->

                        <x-slot name="footer">
                            <button class="btn btn-success" type="submit">@lang('Create')</button>
                            <a href="{{ route('admin.manage-url.index') }}" class="btn btn-danger"
                                type="reset">@lang('Cancel')</a>
                        </x-slot>
                    </x-backend.card>
                </div> <!-- .col-md-9 -->
            </div> <!-- .row -->
        </x-slot>

    </x-backend.card>

    {{ html()->form()->close() }}

@endsection

@push('after-styles')
    <link rel="stylesheet" href="{{ asset('assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css') }}">
@endpush

@push('after-scripts')
    <script src="{{ asset('js/admin/editor.js') }}"></script>
    <script src="{{ asset('assets/plugins/moment/moment.js') }}"></script>
    <script src="{{ asset('assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js') }}"></script>

    <script>
        $(document).ready(function() {
            simple_editor('.editor', 400);
            $('#datepicker-autoclose').datepicker({
                format: "dd-mm-yyyy",
                clearBtn: true,
                autoclose: true,
                todayHighlight: true,
            });
            $("#image").change(function() {
                readImageURL(this, $('#holder'));
            });
        });

        $(document).on('blur', "#name", function() {
            let nameField = $(this);
            let nameValue = nameField.val();
            if (!nameValue) {
                $("#post_error").text('Title must not empty');
                nameField.addClass('is-invalid');
            } else {
                nameField.removeClass('is-invalid');
            }
        });

        $(function() {
            $(".form-check-input").click(function() {
                const status = $(this).val();
                if (status === "schedule") {
                    $("#scheduleDate").removeClass("d-none");
                } else if (status === "1") {
                    $("#for_New_upload").removeClass("d-none");
                } else if (status === "0") {
                    $("#for_New_upload").addClass("d-none");
                } else {
                    $("#scheduleDate").addClass("d-none");
                }
            });

        });
    </script>
@endpush
