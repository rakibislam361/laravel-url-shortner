@extends('backend.layouts.app')

@section('title', __('Manage Url'))

@section('content')

    <x-backend.card xmlns:livewire="">
        <x-slot name="header">
            @lang('Manage Url')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link-header icon="fas fa-plus" class="btn btn-sm btn-tool btn-primary"
                :href="route('admin.manage-url.create')" :text="__('Add New')" />
        </x-slot>

        <x-slot name="body">
            {{-- <livewire:backend.url-table /> --}}
            <div class="col-md-12">
                <div class="row justify-content-between mb-4">
                    <div class="col-md-6">
                        <a href="{{ route('admin.url.report', 'day') }}" class="btn btn-sm btn-primary">Today</a>
                        <a href="{{ route('admin.url.report', 'week') }}" class="btn btn-sm btn-primary">Last Week</a>
                        <a href="{{ route('admin.url.report', 'month') }}" class="btn btn-sm btn-primary">Last
                            Month</a>
                        <a href="{{ route('admin.url.report', 'mvisit') }}" class="btn btn-sm btn-primary">Most
                            visited </a>
                    </div>
                </div>

                <table id="" class="display table_id">
                    <thead>
                        <tr>
                            <th>Generated URL</th>
                            <th>Main URL</th>
                            <th>Visitors</th>
                            <th>Request from</th>
                            <th>Status</th>
                            <th>GET QR</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($report_data as $key => $value)
                            <?php $strln = strlen($value->url); ?>
                            <tr>
                                <td><a href="{{ route('frontend.url_shortener.show', $value->id) }}"
                                        target="_blank">{{ $value->generated_url }} </a>
                                </td>
                                <td styly="width:30px">
                                    @if ($strln > 100)
                                        {{ substr($value->url, 0, 100) }}
                                    @else
                                        {{ $value->url }}
                                    @endif

                                </td>
                                <td><span class="badge badge-danger">{{ $most_visit['visits'] }}</span></td>
                                <td>{{ $value->user_ip }}</td>
                                <td>
                                    @if ($value->status == 'active')
                                        <span class="badge badge-primary">Active</span>
                                    @else
                                        <span class="badge badge-danger">Expired</span>
                                    @endif
                                </td>
                                <td>
                                    <label data-key="{{ $value->url }}" class="btn btn-light qr_code">
                                        <i class="fa fa-qrcode" aria-hidden="true"></i>
                                    </label>
                                </td>
                                <td>{{ view('backend.content.url.includes.actions', compact('value')) }}</td>
                            </tr>
                        @empty
                        @endforelse
                    </tbody>
                </table>
            </div>
        </x-slot>
    </x-backend.card>

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
@endsection

@push('after-styles')
    <livewire:styles />
@endpush

@push('after-scripts')
    <livewire:scripts />
@endpush
