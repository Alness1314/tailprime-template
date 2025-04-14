import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavigationDrawerComponent } from "../navigation-drawer/navigation-drawer.component";

@Component({
  selector: 'app-layout',
  imports: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    RouterOutlet,
    NavbarComponent,
    NavigationDrawerComponent
],
  templateUrl: './layout.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LayoutComponent {
  toggleSidebar() {
    const sidebar = document.getElementById('mobileSidebar');
    sidebar?.classList.toggle('-translate-x-full');
  }
}
