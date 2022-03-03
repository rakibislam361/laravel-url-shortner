@extends('backend.layouts.app')

@section('title', __('Manage Browsin'))

@section('content')

<x-backend.card xmlns:livewire="">
  <x-slot name="header">
    @lang('Manage Browsin information')
  </x-slot>

  <x-slot name="body">
    <livewire:backend.browsinginformation-table />
  </x-slot>

  
  <div class="modal fade" id="qruCodeModal" tabindex="-1" role="dialog" aria-labelledby="qruCodeModalTitle"
  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
          <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body align-items-center">

          </div>
      </div>
  </div>
</div>
</x-backend.card>

@endsection

@push('after-styles')
<livewire:styles />
@endpush

@push('after-scripts')
<livewire:scripts />
@endpush