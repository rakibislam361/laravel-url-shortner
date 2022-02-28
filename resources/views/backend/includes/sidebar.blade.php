<aside class="main-sidebar sidebar-light-lightblue elevation-0">
    <!-- Brand Logo -->
    <a href="/" class="brand-link">
        <img sizes="32x32" src="{{ asset('img/logo/small-logo.png') }}" alt="AdminLTE Logo"
            class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">URL SHORTNER</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <x-utils.link class="nav-link" :href="route('admin.dashboard')"
                        :active="activeClass(Route::is('admin.dashboard'), 'active')"
                        icon="nav-icon fa fa-tachometer-alt" :text="__('Dashboard')"></x-utils.link>
                </li>

                <i class="fa-solid "></i>
                @if ($logged_in_user->hasAllAccess() || ($logged_in_user->can('admin.access.user.list') || $logged_in_user->can('admin.access.user.deactivate') || $logged_in_user->can('admin.access.user.reactivate') || $logged_in_user->can('admin.access.user.clear-session') || $logged_in_user->can('admin.access.user.impersonate') || $logged_in_user->can('admin.access.user.change-password')))
                    <li class="nav-header">@lang('System')</li>

                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                            <i class="nav-icon icon-settings"></i>
                            <p>@lang('Settings')
                                <i class="fa fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <x-utils.link class="nav-link" :href="route('admin.dashboard')"
                                    :active="activeClass(Route::is('admin.dashboard'), 'active')"
                                    icon="fas fa-solid fa-minus" :text="__('Initial')">
                                </x-utils.link>
                            </li>
                        </ul>
                    </li>

                    <li
                        class="nav-item has-treeview {{ activeClass(Route::is('admin.auth.user.*') || Route::is('admin.auth.role.*'), 'menu-open') }}">
                        <x-utils.link class="nav-link" href="#" icon="nav-icon icon-users"
                            rightIcon="fa fa-angle-left right" :text="__('Access')"></x-utils.link>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <x-utils.link class="nav-link" :href="url('admin.permission-control.index')"
                                    :active="activeClass(Route::is('admin.permission-control.*'), 'active')"
                                    icon="nav-icon fas fas fa-long-arrow-alt-right" :text="__('Control Permission')">
                                </x-utils.link>
                            </li>

                            @if ($logged_in_user->hasAllAccess() || ($logged_in_user->can('admin.access.user.list') || $logged_in_user->can('admin.access.user.deactivate') || $logged_in_user->can('admin.access.user.reactivate') || $logged_in_user->can('admin.access.user.clear-session') || $logged_in_user->can('admin.access.user.impersonate') || $logged_in_user->can('admin.access.user.change-password')))
                                <li class="nav-item">
                                    <x-utils.link class="nav-link" :href="route('admin.auth.user.index')"
                                        :active="activeClass(Route::is('admin.auth.user.*'), 'active')"
                                        icon="nav-icon fas fa-long-arrow-alt-right" :text="__('User Management')">
                                    </x-utils.link>
                                </li>
                            @endif

                            @if ($logged_in_user->hasAllAccess())
                                <li class="nav-item">
                                    <x-utils.link class="nav-link" :href="route('admin.auth.role.index')"
                                        icon="nav-icon fas fa-long-arrow-alt-right"
                                        :active="activeClass(Route::is('admin.auth.role.*'), 'active')"
                                        :text="__('Role Management')">
                                    </x-utils.link>
                                </li>
                            @endif
                        </ul>
                    </li>
                @endif

                @if ($logged_in_user->hasAllAccess())
                    <li class="nav-item has-treeview">
                        <x-utils.link class="nav-link" href="#" icon="nav-icon fa fa-list-ul"
                            rightIcon="fa fa-angle-left right" :text="__('Logs')"></x-utils.link>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <x-utils.link class="nav-link" :href="route('log-viewer::dashboard')"
                                    icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Dashboard')">
                                </x-utils.link>
                            </li>
                            <li class="nav-item">
                                <x-utils.link class="nav-link" :href="route('log-viewer::logs.list')"
                                    icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Logs')"></x-utils.link>
                            </li>
                        </ul>
                    </li>
                @endif
            </ul>
        </nav> <!-- /.sidebar-menu -->
    </div> <!-- /.sidebar -->
</aside>
