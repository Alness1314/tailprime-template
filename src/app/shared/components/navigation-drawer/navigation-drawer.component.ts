import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ListboxModule } from 'primeng/listbox';

@Component({
  selector: 'app-navigation-drawer',
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    DividerModule,
    ListboxModule,
  ],
  templateUrl: './navigation-drawer.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationDrawerComponent {
  @Input() brandLogo!: string;
  @Input() menuItems: { label: string; icon: string; path: string }[] = [
    {
      label: 'Catalogos',
      path: 'dashboard',
      icon: 'pi-objects-column',
    },
    {
      label: 'Configuración',
      path: 'settings',
      icon: 'pi-cog',
    },
    {
      label: 'Usuarios',
      path: 'dashboard',
      icon: 'pi-user',
    },
  ];
  @Input() footerContent!: string;
  @Input() darkMode = false;

  @Output() onCloseSidebar = new EventEmitter<void>();
  @Output() onLogout = new EventEmitter<void>();

  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigateByUrl(path);
    this.onCloseSidebar.emit();
  }

  logout() {
    this.onLogout.emit();
    this.router.navigateByUrl('/');
  }
}
