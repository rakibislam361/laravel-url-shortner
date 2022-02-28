<?php

namespace App\Http\Livewire\Frontend;

use App\Models\Url;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

/**
 * Class RolesTable.
 */
class UrlTable extends DataTableComponent
{
  protected string $tableName = 'Url';

  /**
   * @return Builder
   */
  public function query(): Builder
  {
    if (auth()->user() && auth()->user()->type === "user") {
      return Url::with('user')->where('user_id', auth()->user()->id);
    }
    return Url::with('user');
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
      Column::make(__('Generated URL'), 'generated_url')
        ->addClass('text-left')
        ->searchable()
        ->format(function ($row) {
          return '<a href="' . route("frontend.url_shortener.show", $row->id) . '" target="_blank">' . $row->generated_url . '</a>';
        })
        ->asHtml(),
      Column::make(__('Your URL'), 'url')
        ->addClass('text-left')
        ->searchable(),

      // Column::make('Actions')
      //   ->addClass('text-center')
      //   ->format(function ($value, $column, $row) {
      //     return view('frontend.content.url.includes.actions')->with(['url' => $row]);
      //   }),
    ];
  }

  public function setTableRowClass($value)
  {
    return $value->id;
  }

  public function setTableRowId($value)
  {
    return $value->id;
  }
}
