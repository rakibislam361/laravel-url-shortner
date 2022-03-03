<?php

namespace App\Http\Livewire\Backend;

use App\Models\Backend\Browsinginformation;
use App\Models\Url;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

/**
 * Class RolesTable.
 */
class BrowsinginformationTable extends DataTableComponent
{
  /**
   * @return Builder
   */
  public string $defaultSortColumn = 'id';
  public string $defaultSortDirection = 'desc';

  protected string $pageName = 'url';
  protected string $tableName = 'url';


  public function query(): Builder
  {
    return Browsinginformation::with('user','url');
  }

  /**
   * @return array
   */
  public function columns(): array
  {
    $this->index = $this->page > 1 ? ($this->page - 1) * $this->perPage : 0;
    return [
      Column::make(__('NO.'), 'no')
        ->addClass('text-left')
        ->format(function () {
          return ++$this->index;
        }),
      Column::make(__('User IP'), 'user_ip')
        ->addClass('text-left')
        ->searchable(),
        Column::make(__('visit url'), 'visit_url')
        ->addClass('text-left')
        ->searchable()
        ->format(function ($value) {
          $strln = strlen($value);
          if ($strln > 100) {
            return '"'.substr($value, 0, 100).'..."';
          }else{
            return $value;
          }
        })
        ->asHtml(),
      Column::make(__('Location'), 'location')
        ->addClass('text-left')
        ->searchable(),
      Column::make(__('Latitude'), 'latitude')
        ->addClass('text-left')
        ->searchable(),
      Column::make(__('Longitude'), 'longitude')
        ->addClass('text-left')
        ->searchable(),
      Column::make(__('Browser'), 'browser')
        ->addClass('text-left')
        ->searchable(),
      Column::make(__('Browser'), 'browser')
        ->addClass('text-left')
        ->searchable(),
      Column::make(__('Device'), 'device')
        ->addClass('text-left')
        ->searchable(),
      Column::make(__('Request from'), 'user_ip')
        ->addClass('text-left')
        ->searchable(),
      Column::make(__('Status'), 'url.status')
        ->addClass('text-left')
        ->searchable()
        ->format(function ($value) {
          if ($value == 'active') {
            return '<span class="badge badge-primary">Active</span>';
          }
          return '<span class="badge badge-danger">Expired</span>';
        })
        ->asHtml(),
      Column::make(__('GET QR'), 'url')
        ->addClass('text-left')
        ->searchable()
        ->format(function ($value) {
          return '<label data-key="' . $value . '"  class="btn btn-light qr_code"><i class="fa fa-qrcode" aria-hidden="true"></i></label>';
        })
        ->asHtml(),
      // Column::make('Actions')
      //   ->addClass('text-center')
      //   ->format(function ($value, $column, $row) {
      //     return view('backend.content.url.includes.actions')->with(['url' => $row]);
      //   }),
    ];
  }


  // public function setTableRowClass($value)
  // {
  //   return $value->id;
  // }

  // public function setTableRowId($value)
  // {
  //   return $value->id;
  // }
}
