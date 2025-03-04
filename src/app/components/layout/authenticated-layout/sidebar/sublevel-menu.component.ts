import { Component, Input, OnInit } from "@angular/core";
import { INavbarData } from "./helper";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Router } from "@angular/router";

@Component({
  selector: "app-sublevel-menu",
  template: `
    <ul
      *ngIf="collapsed && data.items && data.items.length > 0"
      [@submenu]="
        expanded
          ? {
              value: 'visible',
              params: {
                transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',
                height: '*'
              }
            }
          : {
              value: 'hidden',
              params: {
                transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',
                height: '0'
              }
            }
      "
      class="sublevel-nav"
    >
      <li
        *ngFor="let item of data.items"
        class="sublevel-nav-item mt-1"
        [routerLink]="[item.routeLink]"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        <a>
          <span class="sublevel-link-text" *ngIf="collapsed">
            {{ item.label }}
          </span>
        </a>
      </li>
    </ul>
  `,
  styleUrls: ["./sidebar.component.css"],
  animations: [
    trigger("submenu", [
      state(
        "hidden",
        style({
          height: "0",
          overflow: "hidden",
        })
      ),
      state(
        "visible",
        style({
          height: "*",
        })
      ),
      transition("visible <=> hidden", [
        style({ overflow: "hidden" }),
        animate("{{transitionParams}}"),
      ]),
      transition("void => *", animate(0)),
    ]),
  ],
})
export class SublevelMenuComponent implements OnInit {
  // frontendPort: string = environment.frontendPort;
  @Input() data: INavbarData = {
    routeLink: "",
    icon: "",
    label: "",
    items: [],
  };

  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleClick(item: any): void {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (let modelItem of this.data.items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
      item.expanded = !item.expanded;
    }
  }

  onMenuClick(event: MouseEvent, routerLink: string): void {
    // console.log("this is event mouse event ctrlKey", event.ctrlKey);
    // console.log("this is event mouse event metaKey", event.metaKey);

    // console.log("this is router link ", routerLink);
    // let customeUrl: string = this.frontendPort + routerLink;
    // const url = this.router.serializeUrl(
    //   this.router.createUrlTree([customeUrl])
    // );
    // console.log("this is url ", url);
    // console.log("this is customeUrl ", customeUrl);

    // if (event.ctrlKey || event.metaKey) {
    //   // Ctrl (or Command on Mac) + Mouse Click detected
    //   window.open(url, "_blank");
    //   event.preventDefault(); // Prevent default navigation
    // } else {
    //   this.router.navigate([routerLink]);
    // }
  }
}
