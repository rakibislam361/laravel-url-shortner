<div class="btn-group btn-group-sm">
    {{ html()->select('status', $allStatus = ['' => 'select', 'active' => 'Active', 'inactive' => 'Inactive'])->id('')->class('form-control status-change')->attribute('data-key', $value->id) }}
    <input type="hidden" id="status_update" value="{{ route('admin.url.status') }}">

    <a href="{{ route('admin.manage-url.destroy', $value->id) }}" class="btn btn-light m-1 delete" data-method="delete"
        data-toggle="tooltip" title="Delete">
        <i class="fas fa-trash"></i>
    </a>
</div>
