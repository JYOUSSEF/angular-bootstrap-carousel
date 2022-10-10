import { Component, OnInit, ViewChildren, QueryList, ElementRef, Renderer2 } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger("isDeleted", [
      state(
        "true",
        style({
          opacity: 0,
          display: "none",
          transform: "translateX(0) scale(1)"
        })
      ),
      transition("* => 1", [
        animate(
          "0.5s ease-out",
          style({
            opacity: 0,
            transform: "translateX(0) scale(0.5)"
          })
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  name = 'Bootstrap Carousel ù';
  people: Array<any>;
  @ViewChildren("personSlide") peopleSlides: QueryList<ElementRef>;

  constructor(private readonly renderer: Renderer2) {

  }

  ngOnInit() {
    this.people = this.createPeople();
  }

  trackByPersonId(person: any): string {
    return person.id;
  }

  deletePerson(person: any) {
    if (person) {
      person.isDeleted = true;
      const index = this.people.indexOf(person);
      setTimeout(() => {
        // if deleting last item in the carousel, make the first one active (since we are allowing carousel to wrap)
        if (index === this.people.length - 1) {
          const firstSlide = this.peopleSlides.first.nativeElement;
          this.renderer.addClass(firstSlide, "active");
        }
        this.people.splice(index, 1)
      }, 500);
    }
  }

  private createPeople(): Array<any> {
    return [
      {
        "id": "528f7bb1-81a2-4213-910a-ab02ccdf6a06",
        "age": 29,
        "eyeColor": "green",
        "name": "ForbesMclaughlin",
        "company": "SYBIXTEX",
        "email": "undefined.undefined@sybixtex.name",
        "phone": "+1 (834) 477-2065",
        "address": "459 Moore Street, Loretto, South Dakota, 2177"
      },
      {
        "id": "a5e5b5bd-a6e2-4c0c-a541-5dbb82c1c053",
        "age": 20,
        "eyeColor": "green",
        "name": "HolderMiles",
        "company": "BOINK",
        "email": "undefined.undefined@boink.me",
        "phone": "+1 (855) 582-2753",
        "address": "487 Furman Street, Springhill, Tennessee, 8018"
      },
      {
        "id": "78d1ba6a-2901-478c-a442-c9e0ef32b0a1",
        "age": 24,
        "eyeColor": "green",
        "name": "OliviaWilkinson",
        "company": "BOILICON",
        "email": "undefined.undefined@boilicon.ca",
        "phone": "+1 (860) 423-3630",
        "address": "739 Gaylord Drive, Sanford, Federated States Of Micronesia, 8573"
      },
      {
        "id": "6cd3ee98-76e6-4d7c-9863-e35125dc47c0",
        "age": 38,
        "eyeColor": "brown",
        "name": "FullerBennett",
        "company": "PROWASTE",
        "email": "undefined.undefined@prowaste.info",
        "phone": "+1 (851) 524-2179",
        "address": "365 Adelphi Street, Gerton, South Carolina, 4692"
      },
      {
        "id": "47032252-7826-4d30-aeda-00f1382a851c",
        "age": 21,
        "eyeColor": "blue",
        "name": "AgnesMcintosh",
        "company": "SLUMBERIA",
        "email": "undefined.undefined@slumberia.com",
        "phone": "+1 (993) 554-2848",
        "address": "917 Cumberland Walk, Zarephath, Connecticut, 3019"
      },
      {
        "id": "6603e18d-7036-474e-8522-d2d22d4db6e6",
        "age": 37,
        "eyeColor": "green",
        "name": "RichardLancaster",
        "company": "KENEGY",
        "email": "undefined.undefined@kenegy.org",
        "phone": "+1 (915) 520-2729",
        "address": "320 Rutland Road, Yettem, Hawaii, 6487"
      },
      {
        "id": "723145a5-e839-4e09-8677-02911ffdb64f",
        "age": 28,
        "eyeColor": "green",
        "name": "DeannaPope",
        "company": "MEDALERT",
        "email": "undefined.undefined@medalert.net",
        "phone": "+1 (823) 569-3200",
        "address": "438 Carlton Avenue, Limestone, Massachusetts, 1507"
      },
      {
        "id": "d471f845-862e-45a1-af94-68b6b436d29c",
        "age": 26,
        "eyeColor": "brown",
        "name": "AlstonMcgowan",
        "company": "POLARIA",
        "email": "undefined.undefined@polaria.biz",
        "phone": "+1 (809) 591-3659",
        "address": "696 Joval Court, Trucksville, Iowa, 1812"
      },
      {
        "id": "f2ce2751-595c-4282-94cb-d474630a7e4d",
        "age": 38,
        "eyeColor": "green",
        "name": "McbrideVega",
        "company": "MIRACLIS",
        "email": "undefined.undefined@miraclis.tv",
        "phone": "+1 (977) 555-2415",
        "address": "622 Jamaica Avenue, Cherokee, Vermont, 3101"
      },
      {
        "id": "ee353d7a-afa5-46bf-aee5-6ec6456b2acc",
        "age": 25,
        "eyeColor": "brown",
        "name": "PenelopeDennis",
        "company": "KINETICUT",
        "email": "undefined.undefined@kineticut.co.uk",
        "phone": "+1 (867) 437-3424",
        "address": "634 Independence Avenue, Goldfield, Oregon, 6340"
      },
      {
        "id": "4f33a227-ebaf-4c6f-93da-a42d1ea0d948",
        "age": 32,
        "eyeColor": "blue",
        "name": "LizzieDotson",
        "company": "CODACT",
        "email": "undefined.undefined@codact.biz",
        "phone": "+1 (895) 548-2778",
        "address": "358 Celeste Court, Olney, North Carolina, 2141"
      },
      {
        "id": "520e534a-3f59-46dc-9486-62b4b0b77f08",
        "age": 36,
        "eyeColor": "green",
        "name": "RosellaAvery",
        "company": "OVERFORK",
        "email": "undefined.undefined@overfork.us",
        "phone": "+1 (876) 458-3917",
        "address": "312 Guernsey Street, Enoree, Kansas, 8307"
      },
      {
        "id": "09f99f8b-8070-47ce-9cdd-0f99223733cd",
        "age": 30,
        "eyeColor": "blue",
        "name": "ValarieOsborne",
        "company": "FANGOLD",
        "email": "undefined.undefined@fangold.name",
        "phone": "+1 (908) 577-2802",
        "address": "110 Irwin Street, Longbranch, New Mexico, 200"
      },
      {
        "id": "a13a0e4f-4fca-4823-b1a8-c8953ead73bf",
        "age": 36,
        "eyeColor": "brown",
        "name": "BerniceBerg",
        "company": "FLEXIGEN",
        "email": "undefined.undefined@flexigen.me",
        "phone": "+1 (893) 486-3992",
        "address": "907 Vanderveer Place, Kingstowne, American Samoa, 4391"
      },
      {
        "id": "f9e1f397-320f-44bd-adc4-008c77d768c3",
        "age": 30,
        "eyeColor": "brown",
        "name": "RandallSims",
        "company": "ZOINAGE",
        "email": "undefined.undefined@zoinage.ca",
        "phone": "+1 (949) 452-2969",
        "address": "308 Varick Avenue, Englevale, Virginia, 6349"
      }
    ];
  }
}