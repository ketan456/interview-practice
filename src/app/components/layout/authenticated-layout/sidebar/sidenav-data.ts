import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'dashboard',
    label: 'Dashboard',
  },

  {
    routeLink: 'all-concept',
    icon: 'manage_accounts',
    label: 'all Concept',
    items: [
      {
        routeLink: 'all-concept/input-output',
        label: 'Input Output eg.',
      },
      {
        routeLink: 'all-concept/directives',
        label: 'Directives eg.',
      },
      {
        routeLink: 'all-concept/pipes',
        label: 'Pipes eg.',
      },
      {
        routeLink: 'all-concept/reactive-form',
        label: 'Reactive Form eg.',
      },
      {
        routeLink: 'all-concept/rxjs',
        label: 'Rxjs eg.',
      },
      {
        routeLink: 'all-concept/subject',
        label: 'Subject rxjs eg.',
      },
      {
        routeLink: 'all-concept/infinite-scroller-view',
        label: 'Infinite Scroller eg.',
      },
    ],
  },
  // {
  //   routeLink: "admin/buyer/",
  //   icon: "supervisor_account",
  //   label: "Manage Visitors",
  //   items: [
  //     {
  //       routeLink: "admin/buyer/buyer-list",
  //       label: "Watch List",
  //     },
  //     {
  //       routeLink: "admin/buyer/add-buyer",
  //       label: "Ban List",
  //     },
  //     {
  //       routeLink: "admin/buyer/request-list",
  //       label: "Preapproved List",
  //     },
  //   ],
  // },
  // {
  //   routeLink: 'gatepass/gatepass-list',
  //   icon: 'passkey',
  //   label: 'Gate-Pass',
  //   items: [
  //     {
  //       routeLink: 'gatepass/gatepass-list',
  //       label: 'Gate-Pass List',
  //     },
  //     {
  //       routeLink: 'gatepass/add-gatepass',
  //       label: 'Add Gate-Pass',
  //     },
  //   ],
  // },

  // {
  //   routeLink: "admin/order/",
  //   icon: "description",
  //   label: "Employee Data",
  //   items: [
  //     {
  //       routeLink: "admin/order/order-listing",
  //       label: "Employee Master",
  //     },
  //     {
  //       routeLink: "admin/order/order-listing",
  //       label: "Import/Export Employee ",
  //     },
  //     {
  //       routeLink: "admin/order/order-listing",
  //       label: "Employee Classification",
  //     },
  //   ],
  // },
  // {
  //   routeLink: "admin/configuration/",
  //   icon: "settings",
  //   label: "User Management",
  //   items: [
  //     {
  //       routeLink: "admin/configuration/template-listing",
  //       label: "Super Admin",
  //     },
  //     {
  //       routeLink: "admin/configuration/template-listing",
  //       label: "Employee",
  //     },
  //     {
  //       routeLink: "admin/configuration/template-listing",
  //       label: "Security User",
  //     },
  //   ],
  // },
  // {
  //   routeLink: "admin/um",
  //   icon: "login",
  //   label: "Reports",
  //   items: [
  //     {
  //       routeLink: "admin/um/user-listing",
  //       label: "Visitor Summary Report",
  //     },
  //     {
  //       routeLink: "admin/um/role-listing",
  //       label: "Visitor Details Report",
  //     },
  //     {
  //       routeLink: "admin/um/role-listing",
  //       label: "Contract Visitor Summary",
  //     },
  //     {
  //       routeLink: "admin/um/role-listing",
  //       label: "Contract Vistitor Details",
  //     },
  //     {
  //       routeLink: "admin/um/role-listing",
  //       label: "Securitywise Visitor",
  //     },
  //     {
  //       routeLink: "admin/um/role-listing",
  //       label: "Preapproved List",
  //     },
  //     {
  //       routeLink: "admin/um/role-listing",
  //       label: "Watch List",
  //     },
  //     {
  //       routeLink: "admin/um/role-listing",
  //       label: "Ban List",
  //     },
  //     {
  //       routeLink: "admin/um/role-listing",
  //       label: "Visitor Transactions",
  //     },
  //     {
  //       routeLink: "admin/um/role-listing",
  //       label: "Contract Visitior Transactions",
  //     },
  //     {
  //       routeLink: "admin/um/role-listing",
  //       label: "Vehicle Trasactions",
  //     },
  //     {
  //       routeLink: "admin/um/role-listing",
  //       label: "Visitor Feedback",
  //     },
  //     {
  //       routeLink: "admin/um/role-listing",
  //       label: "Employee Gatepass",
  //     },

  //   ],
  // },
  // {
  //   routeLink: "admin/um/role-listing",
  //   icon: "help",
  //   label: "Setting",
  //   items: [
  //     {
  //     routeLink: "admin/um/user-listing",
  //     label: "Appointment Setting",
  //   },
  //   {
  //     routeLink: "admin/um/user-listing",
  //     label: "Logo Setting",
  //   },
  //   {
  //     routeLink: "admin/um/user-listing",
  //     label: "Email Setting",
  //   },
  //   {
  //     routeLink: "admin/um/user-listing",
  //     label: "SMS Setting",
  //   },
  //   {
  //     routeLink: "admin/um/user-listing",
  //     label: "Message Setting",
  //   },
  //   {
  //     routeLink: "admin/um/user-listing",
  //     label: "Application Setting",
  //   },
  //   {
  //     routeLink: "admin/um/user-listing",
  //     label: "Database Setting",
  //   },
  //   {
  //     routeLink: "admin/um/user-listing",
  //     label: "Help",
  //   },
  // ]
  // },
];
