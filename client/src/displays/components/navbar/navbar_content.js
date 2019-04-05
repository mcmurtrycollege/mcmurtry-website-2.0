import Constitution from '../../static/mcm_constitution.pdf';
import General_bylaws from '../../static/mcm_bylaws.pdf';
import Housing_bylaws from '../../static/mcm_housing_bylaws.pdf';
import Parking_bylaws from '../../static/mcm_parking_bylaws.pdf';
import Tax_exempt_form from '../../static/tax_exempt_form.pdf';

const navbar_items = [
  {
    header: "About",
    headerTo: "/about/",
    dropDownChildren: [
    ]
  },
  {
    header: "Events",
    dropDownChildren: [
      {
        subheader: "Events",
        to: "/events/"
      },
      {
        subheader: "Art Calender",
        to: "/artevents/"
      }
    ]
  },
  {
    header: "Residential Leadership",
    dropDownChildren: [
      {
        subheader: "McTeam",
        to: "/mcteam/"
      },
      {
        subheader: "McMinistry",
        to: "/mcministry/"
      },
      {
        subheader: "Court",
        to: "/court/"
      },
      {
        subheader: "Committees",
        to: "/committees/"
      }
    ]
  },
  {
    header: "Academics",
    dropDownChildren: [
      {
        subheader: "Divisional Advisors",
        to: "/divisionaladvisors/"
      },
      {
        subheader: "Pear Academic Advisors",
        to: "/peeracademicadvisors/"
      },
      {
        subheader: "Academic Fellows",
        to: "/academicfellows/"
      }
    ]
  },
  {
    header: "Wellbeing",
    dropDownChildren: [
      {
        subheader: "Rice Health Advisors",
        to: "/RHAs/"
      },
      {
        subheader: "Strive Liasons",
        to: "/striveliaisons/"
      }
    ]
  },
  {
    header: "Guiding Documents",
    dropDownChildren: [
      {
        subheader: "Constitution",
        href: Constitution
      },
      {
        subheader: "General Bylaws",
        href: General_bylaws
      },
      {
        subheader: "Housing Bylaws",
        href: Housing_bylaws
      },
      {
        subheader: "Parking Bylaws",
        href: Parking_bylaws
      }
    ]
  },
  {
    header: "O-Week",
    dropDownChildren: [
      {
        subheader: "Pixar Studio Week",
        href: 'https://mcmurtryoweek.wixsite.com/home-page'
      },
      {
        subheader: "O-Week Advisors",
        to: ""
      }
    ]
  },
  {
    header: "Resources",
    dropDownChildren: [
      {
        subheader: "Room Reservations",
        to: ""
      },
      {
        subheader: "Work Orders",
        href: 'https://www.emailmeform.com/builder/form/c9Iyb57aGe2ETnAk3Oce7'
      },
      {
        subheader: "Technology",
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSekrzRmxwFU8DxqwLAxV94b9OFyesTLxkmwjituOuCSIjUjtQ/viewform?embedded=true&formkey=dFRXRWdxa20yMlF2dEN2U1lSNWxSemc6MQ'
      },
      {
        subheader: "Initiative Requests",
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSfWw9BThDp7wDgxtYYvwRomD-myrMXZYP6ve-TzincU81ViBg/viewform'
      },
      {
        subheader: "The MIS",
        to: ""
      },
      {
        subheader: "Tax-Exempt Form",
        href: Tax_exempt_form
      }
    ]
  },
  {
    header: "Contact",
    dropDownChildren: [
    ]
  }
];

export default navbar_items;